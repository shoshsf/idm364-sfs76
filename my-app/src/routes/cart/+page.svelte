<!-- NEW SVELTE + Supabase VERSION -->
<script>
  // Page Inputs
  let site_title = "Shopping Cart";
  let page_title = "Your Shopping Cart";


  // Functionality and More Content

  import { cart, total_items, removeFromCart, orderNumber, orderPlaced } from "$lib/store";
  
  function increment(item) {
    cart.update(items => {
      return items.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
    });
    total_items.update(n => n + 1);
  }
  
  function decrement(item) {
    if (item.quantity > 1) {
      cart.update(items => {
        return items.map(i => i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i);
      });
      total_items.update(n => n - 1);
    } else {
      showModal = true;
      itemToRemove = item;
    }
  }
  
  let showModal = false;
  let itemToRemove = null;
  
  function confirmRemove() {
    if (itemToRemove) {
      removeFromCart(itemToRemove.id);
      itemToRemove = null;
    }
    showModal = false;

  }
  
  function cancelRemove() {
    showModal = false;
    itemToRemove = null;
  }

  function checkout() {
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    orderNumber.set(`#${randomNumber}`);
    cart.set([]);
    total_items.set(0);
    
    orderPlaced.set(true);
    
    setTimeout(() => {
      orderPlaced.set(false);
    }, 5000);
  }
  
  $: subtotal = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Tax Rate (modify this to be dynamic based on location or other factors)
  const taxRate = 0.06; // 6% tax rate in PA
  
  // Calculate the tax
  $: tax = subtotal * taxRate;

  // Calculate the total (Subtotal + Tax)
  $: total = subtotal + tax;

</script>

  <svelte:head>
    <title>Crafted Comfort | {site_title}</title>
    <meta
        name="description"
        content="This is where the description goes for SEO"
    >
  </svelte:head>
    
  <div class="cartContainer">
    <h1>{page_title}</h1>
    
    {#if $cart.length === 0}
      <p>Your cart is empty. <a href="/">Continue shopping</a></p>
    {:else}
      <div class="cartHeader">
        <h3>Product</h3>
        <h3>Quantity</h3>
        <h3>Total</h3>
      </div>
      <div class="cartItems">
        {#each $cart as item}
          <div class="cartItem">
            <a href="/products/{item.slug}" class="cartDetails">
              <div class="cartImgDiv">
                <img src={item.image} alt={item.name} class="cartImage" />
              </div>
              <div class="itemText">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
              </div>
            </a>
            <div class="counter">
              <button on:click={() => decrement(item)}>-</button>
              <span>{item.quantity}</span>
              <button on:click={() => increment(item)}>+</button>
            </div>
            <p class="cartTotal">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        {/each}
      </div>
      <div class="cartSummary">
        <p>Subtotal: <span>${subtotal.toFixed(2)}</span></p>
        <p class="border-bottom">Tax (6%): <span>${tax.toFixed(2)}</span></p>
        <p class="total"> <strong> Total: <span>${total.toFixed(2)}</span></strong></p>
        <button class="checkout-btn" on:click={checkout}>Checkout</button>
      </div>
    {/if}
  </div>

  {#if $orderPlaced} 
    <div class="order-confirmation">
      <div class="order-content">
        <h1>Order Placed!</h1>
        <p>Your order number is {$orderNumber}</p>
        <p>Thank you for your purchase!</p>
      </div>
    </div>
  {/if}
    
  <!-- Modal -->
  {#if showModal}
    <div class="modal">
      <div class="modal-content">
        <p>Are you sure you want to remove this item?</p>
        <div class="modal-buttons">
          <button class="confirm-btn" on:click={confirmRemove}>Yes, remove</button>
          <button class="cancel-btn" on:click={cancelRemove}>Cancel</button>
        </div>
      </div>
    </div>
  {/if}

  
<style>

  /* *{
      border: 1px solid red;
  } */

  .cartContainer {
    width: 80%;
    margin: auto;
  }

  .cartHeader, .cartItem {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    align-items: center;
    gap: 30px;
    padding: 10px 0;
  }

  .cartHeader {
    border-bottom: 2px solid #ddd;
  }

  .cartItems {
    margin-bottom: 20px;
    /* padding: ; */
  }

  .cartItem {
    border-bottom: 1px solid #eee;
  }

  .cartDetails{
      display: flex;
      flex-direction: row;
      gap: 15px;
      justify-content: left;
      align-items: center;
  }

    a{
      font-family: 'Raleway', baloo;
      font-weight: 300;
      font-size: 18px;
      text-decoration: none;
      color: #2A254B;
    }

    a:hover{
      text-decoration: underline;
      cursor: pointer;
    }

  .cartImgDiv{
    width: 120px;
    height: 100%;
  }

  .cartImage {
    width: 100%;
    object-fit: cover;
  }

  .counter {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .counter button {
    padding: 5px 10px;
    border: none;
    background-color: #eee;
    cursor: pointer;
  }

  .cartTotal {
    font-weight: bold;
  }

  .cartSummary {
    text-align: right;
    margin-top: 20px;
    align-items: right;
  }

  .border-bottom{
    padding-bottom: 20px;
    border-bottom: 1px solid #2A254B;
  }

  .total{
    
  }


  .checkout-btn {
    background-color: #2A254B;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin-top: 20px;
  }

  /* Modal Styling */
  .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .modal-content {
      background: white;
      padding: 20px;
      border-radius: 5px;
      text-align: center;
  }

  .modal-buttons {
      margin-top: 15px;
      display: flex;
      justify-content: space-between;
  }

  .confirm-btn {
      background-color: red;
      color: white;
      padding: 10px 15px;
      border: none;
      cursor: pointer;
  }

  .cancel-btn {
      background-color: gray;
      color: white;
      padding: 10px 15px;
      border: none;
      cursor: pointer;
  }

  .order-confirmation {
        text-align: center;
        padding: 3rem;
        border: 1px solid #2c2543;
        color: #2c2543;
        border-radius: 3px;
        max-width: 500px;
        margin: 5rem auto;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    h1 {
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 2rem;
    } 
</style>


<!-- Old Code -->
  <!-- <script>
    import { writable } from "svelte/store";

    export let cart = writable([
        { id: 1, name: 'The Otter Chair', description: 'A timeless design, with premium materials features as one of our most popular and iconic pieces. ', price: 250, quantity: 1, image: 'https://res.cloudinary.com/drkhhutl3/image/upload/v1739133398/TheOtterChair_Cart_x9rajd.png' },
        { id: 2, name: 'The Danny Chair', description: 'A timeless design, with premium materials features as one of our most popular and iconic pieces. ', price: 125, quantity: 1, image: 'https://res.cloudinary.com/drkhhutl3/image/upload/v1739133315/TheDandyChair_Cart_cj85il.png' }
    ]);

    let showModal = false;
    let itemToRemove = null;

    function increment(item) {
        cart.update(items => {
            return items.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
        });
    }

    function decrement(item) {
        cart.update(items => {
            return items.map(i => {
                if (i.id === item.id) {
                    if (i.quantity > 1) {
                        return { ...i, quantity: i.quantity - 1 };
                    } else {
                        showModal = true;
                        itemToRemove = i;
                    }
                }
                return i;
            });
        });
    }

    function confirmRemove() {
        if (itemToRemove) {
            cart.update(items => items.filter(i => i.id !== itemToRemove.id));
            itemToRemove = null;
        }
        showModal = false;
    }

    function cancelRemove() {
        showModal = false;
        itemToRemove = null;
    }

    $: subtotal = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0);-->
<!----------- -->
