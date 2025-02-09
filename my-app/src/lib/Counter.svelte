   <script>
	let count = 1;
  
	function increment() {
	  count++;
	}
  
	function decrement() {
	  if (count > 1) {
		count--;
	  }
	}
  </script>
  
  <div class="amountSection">
	<div class="amountCounter">
		<label class="amountLabel">Amount:</label>
		<div class="counter">
			<button class="counterLeft"on:click={decrement}>-</button>
			<span>{count}</span>
			<button class="counterRight" on:click={increment}>+</button>
		</div>
	</div>
	<button class="addCartBtn">Add to cart</button>
  </div>
  
  <style>
	.amountSection {
	  display: flex;
	  flex-direction: row;
	  flex-wrap: wrap;
	  justify-content: space-between;
	  gap: 30px;
	  margin: 50px 0;
	}

	.amountCounter{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 20px;
		
	}
  
	.amountLabel {
		/* h3 */
		font-family: 'Raleway', sans-serif;
		font-weight: 300;
		font-size: 23px;
	}


  
	.counter {
		display: flex;
		align-items: center;
		border: 1px solid #4a456b62;
		border-radius: 5px;
		width: 100%;
		height: auto;
		/* padding: 10px 15px; */
		background: #F9F9F9;
	}
  
	.counter button {
		/* border: 1px solid #2A254B; */
		background: #edeafa;
		font-size: 25px;
		padding: 20px 30px;
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
		padding: 20px 30px;
		font-size: 25px;
	  	font-weight: bold;
		text-align: center;
		font-family: 'Raleway', sans-serif;

	}
  

    .addCartBtn{
        background-color: #F9F9F9;
        border: 2px solid #2A254B;
        padding: 20px 40px;
        color: #2A254B;
        text-decoration: none;
		font-family: 'Raleway', baloo;
		font-weight: 300;
		font-size: 18px;
    }

    .addCartBtn:hover{
        background-color: #2A254B;
        border: 2px solid #2A254B;
        box-shadow: 0 0 30px #C2BAFB;
        color: #F9F9F9;
        transition-delay: 0.3s; 
    }

	@media (max-width: 1150px) {

		.amountSection {
			justify-content: left;
			gap: 50px;
		}

		.addCartBtn{
			width: 100%;
		}
		
	}

	@media (max-width: 940px) {
		
		.amountSection {
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			gap: 30px;
		}
		 .amountSection{
			margin: 10px 15px;
			padding-bottom: 50px;

		 }

		 .amountCounter{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 20px;
			
		}

	}



  </style>