// src/lib/store.js
import { writable } from 'svelte/store';
import { browser } from '$app/environment';
 
// Load cart from localStorage if available
const storedCart = browser ? localStorage.getItem('cart') : null;
const storedTotal = browser ? localStorage.getItem('total_items') : null;
 
// Initialize stores with stored values or defaults
export const num_item = writable(1);
export const total_items = writable(storedTotal ? parseInt(storedTotal) : 0);
export const cart = writable(storedCart ? JSON.parse(storedCart) : []);
 
// Subscribe to cart changes to update localStorage
if (browser) {
  cart.subscribe(value => {
    localStorage.setItem('cart', JSON.stringify(value));
  });
  
  total_items.subscribe(value => {
    localStorage.setItem('total_items', value.toString());
  });
}
 
export const orderNumber = writable('');
export const orderPlaced = writable(false);

// Add cart functions
export function addToCart(product, quantity) {
    console.log('Adding product:', product);
    
    cart.update(items => {
      // Try multiple ways to identify the same product
      const existingItem = items.find(item =>
        // Check by ID if available
        (product.id && item.id === product.id) ||
        // Check by slug if available
        (product.slug && item.slug === product.slug) ||
        // Check by name and price as a fallback
        (item.name === (product.name || product.title) && item.price === product.price)
      );
      
      console.log('Existing item found:', existingItem);
      
      if (existingItem) {
        // Update quantity if product already in cart
        return items.map(item => {
          if ((product.id && item.id === product.id) ||
              (product.slug && item.slug === product.slug) ||
              (item.name === (product.name || product.title) && item.price === product.price)) {
            return { ...item, quantity: item.quantity + quantity };
          }
          return item;
        });
      } else {
        // Add new product to cart with required fields
        return [...items, {
          id: product.id || Date.now(), // Use timestamp as fallback
          slug: product.slug,
          name: product.name || product.title,
          description: product.shortDescription || product.description,
          price: product.price,
          quantity: quantity,
          image: product.cartImg || product.heroImg
        }];
      }
    });
    
    // Update total items count
    total_items.update(n => n + quantity);
  }
 
// Remove item from cart
export function removeFromCart(id) {
  let removedQuantity = 0;
  
  cart.update(items => {
    // Find the quantity before removing
    const item = items.find(i => i.id === id);
    if (item) removedQuantity = item.quantity;
    
    // Return filtered array without the item
    return items.filter(i => i.id !== id);
  });
  
  // Update total items count
  total_items.update(n => n - removedQuantity);
}