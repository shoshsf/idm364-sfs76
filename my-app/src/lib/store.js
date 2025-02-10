
//Number of items in cart
import { writable } from 'svelte/store';

export const num_item = writable(1); // Default value is 1
export const total_items = writable(0); // Default value is 0

