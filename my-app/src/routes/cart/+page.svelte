
  <script>
    import { writable } from "svelte/store";

    // Example cart store (could be moved to a separate store file)
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

    $: subtotal = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

</script>


  
  <div class="cartContainer">
    <h1>Your shopping cart</h1>
    <div class="cartHeader">
      <h3>Product</h3>
      <h3>Quantity</h3>
      <h3>Total</h3>
    </div>
    <div class="cartItems">
      {#each $cart as item}
        <div class="cartItem">
          <div class="cartDetails">
            <img src={item.image} alt={item.name} class="cartmage" />
            <div class="itemText">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
            </div>
          </div>
          <div class="counter">
            <button onclick={decrement(item)}>-</button>
            <span>{item.quantity}</span>
            <button onclick={increment(item)}>+</button>
          </div>
          <p class="cartTotal">${item.price * item.quantity}</p>
        </div>
      {/each}
    </div>
    <div class="cartSummary">
      <p>Subtotal: <span>${subtotal}</span></p>
      <p class="taxInfo">Taxes and shipping are calculated at checkout</p>
      <button class="checkout-btn">Go to checkout</button>
    </div>
  </div>

  <!-- Modal -->
    {#if showModal}
    <div class="modal">
        <div class="modal-content">
            <p>Are you sure you want to remove this item?</p>
            <div class="modal-buttons">
                <button class="confirm-btn" onclick={confirmRemove}>Yes, remove</button>
                <button class="cancel-btn" onclick={cancelRemove}>Cancel</button>
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
        justify-content: center;
        align-items: center;
    }
  
    .cartImage {
      width: 80px;
      height: 80px;
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
    }
  
    .taxInfo {
      font-size: 14px;
      color: gray;
    }
  
    .checkout-btn {
      background-color: #2A254B;
      color: white;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
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
  </style>
  