<!-- 
<div class="container">
	<div class="button col col-1">
	<button id="minus-btn">-</button>
	</div>
	<div class="number col col-2">
	<h1 id="count">0</h1>
	</div>
	<div class="button col col-1">
	<button id="plus-btn">+</button>
	</div>

</div>

  

  
  <style>
	
	.container {
	  display: flex;
	  border: 4px solid #404040;
	  background: #ffdc00;
	  border-radius: 10rem;
	  width: 150px;
	  padding: 1rem;
	  justify-content: space-between;
	  align-items: center;
	  align-content: center;
	}
  
	h1 {
	  margin: 0;
	  padding: 0;
	  user-select: none;
	}
  
	.col-1 {
	  width: 45%;
	}
  
	.col-2 {
	  width: 25%;
	}
  
	.col > button,
	.number {
	  width: 100%;
	  background: #ffdc00;
	  border: 0px;
	  text-align: center;
	}
  
	.button {
	  font-family: sans-serif;
	  font-size: 2em;
	}
  
	button {
	  color: #ff370c;
	  user-select: none;
	  outline: none;
	}
  </style>

<script>
	// Ensure the script runs after the DOM is loaded
	window.onload = function() {
	  let minusBtn = document.getElementById("minus-btn");
	  let count = document.getElementById("count");
	  let plusBtn = document.getElementById("plus-btn");
  
	  let countNum = 0;
	  count.innerHTML = countNum;
  
	  minusBtn.addEventListener("click", () => {
		countNum -= 1;
		count.innerHTML = countNum;
	  });
  
	  plusBtn.addEventListener("click", () => {
		countNum += 1;
		count.innerHTML = countNum;
	  });
	};
  </script>
   -->


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
	  justify-content: space-between;
	  gap: 20px;
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

  </style>