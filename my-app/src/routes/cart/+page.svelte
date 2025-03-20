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
        <table class="cartTable">
            <thead>
                <tr class="cartHeader">
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody class="cartItems">
            {#each $cart as item}
                <tr class="cartItem">
                    <td>
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
                    </td>
                    <td>
                        <div class="counter">
                        <button class="counterLeft" on:click={() => decrement(item)}>-</button>
                        <span>{item.quantity}</span>
                        <button class="counterRight" on:click={() => increment(item)}>+</button>
                        </div>
                    </td>
                    <td class="cartTotal">${(item.price * item.quantity).toFixed(2)}</td>

                </tr>
            {/each}
            </tbody>
        </table>

        <div class="cartSummary">
            <p>Subtotal: <span>${subtotal.toFixed(2)}</span></p>
            <p class="border-bottom">Tax (6%): <span>${tax.toFixed(2)}</span></p>
            <p class="total"><strong>Total: <span>${total.toFixed(2)}</span></strong></p>
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
    .cartContainer {
        width: 90%;
        padding: 10px;
    }
    .cartTable {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }
    .cartTable th, .cartTable td {
        border-bottom: 1px solid #ddd;
        padding: 10px;
        text-align: left;
    }
    .cartTable th {
        /* background-color: #f4f4f4; */
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

    .cartImgDiv {
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
		border: 1px solid #4a456b62;
		border-radius: 5px;
		width: max-content;
		height: auto;
		/* padding: 10px 15px; */
		background: #F9F9F9;
	}
  
	.counter button {
		/* border: 1px solid #2A254B; */
		background: #edeafa;
		font-size: 30px;
		padding: 10px 15px;
		cursor: pointer;
		color: #26224C;
	}

	.counterRight{
		border-radius: 0 5px 5px 0;
	}

	.counterLeft{
		border-radius: 5px 0 0 5px;
	}
  
	.counter span {
		padding: 10px 20px;
        height: fit-content;
		font-size: 20px;
	    font-weight: bold;
		text-align: center;
		font-family: 'Raleway', sans-serif;
	}

    .cartTotal {
        font-weight: bold;
		text-align: center;
		font-family: 'Raleway', sans-serif;    
    }

    .cartSummary {
        text-align: right;
        font-size: 1rem;
    }

    .border-bottom{
      padding-bottom: 20px;
      border-bottom: 1px solid #2A254B;
    }

    .checkout-btn {
        background-color: #2A254B;
        border: 2px solid #2A254B;
        color: white;
        padding: 20px 30px;
        cursor: pointer;
        margin-top: 20px;
        font-family: 'Raleway', baloo;
        font-weight: 300;
        font-size: 18px;
    }

    .checkout-btn:hover{
        background-color: #F9F9F9;
        border: 2px solid #2A254B;
        padding: 20px 30px;
        color: #2A254B;
        /* box-shadow: 0 0 10px #C2BAFB; */
        transition-delay: 0.3s;
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
  
    
        @media screen and (max-width: 700px) {
            .cartTable thead {
                display: none;
            }
            .cartTable tbody, .cartTable tr, .cartTable td {
                display: block;
                width: 100%;
            }
            .cartTable th, .cartTable td {
                border-bottom: none;
            }
            /* .cartTable td {
                text-align: right;
                padding-left: 50%;
                position: relative;
            } */
            .cartTable td:before {
                content: attr(data-label);
                position: absolute;
                left: 0;
                width: 50%;
                padding-left: 10px;
                font-weight: bold;
                text-align: left;
            }

            .cartDetails{
                display: flex;
                flex-direction: row;
                gap: 15px;
                justify-content: left;
                align-items: center;
            }
            .cartItem {
                border-bottom: 1px solid #eee;
                border-top: 1px solid #eee;
            }
            .counter {
                display: flex;
                align-items: center;
                border: 1px solid #4a456b62;
                border-radius: 5px;
                width: max-content;
                height: auto;
                /* padding: 10px 15px; */
                background: #F9F9F9;
            }
        
            .counter button {
                /* border: 1px solid #2A254B; */
                background: #edeafa;
                font-size: 30px;
                padding: 10px 15px;
                cursor: pointer;
                color: #26224C;
            }

            .counterRight{
                border-radius: 0 5px 5px 0;
            }

            .counterLeft{
                border-radius: 5px 0 0 5px;
            }
        
            .counter span {
                padding: 10px 20px;
                height: fit-content;
                font-size: 20px;
                font-weight: bold;
                text-align: center;
                font-family: 'Raleway', sans-serif;
            }
            .cartTotal{
                visibility: hidden;
            }

            .checkout-btn {
                width: 100%;
            }
        }
    </style>
    