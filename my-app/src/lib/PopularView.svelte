<script lang="js">
    const { data } = $props();
</script>

<!-- Old Version -->
    <!-- <div class="container">
    <div class="containerInner">
        <h2>Our popular products</h2>
        <div class="row">
            <a href="#" class="product">
                <img src="https://res.cloudinary.com/drkhhutl3/image/upload/v1739154274/product_MinimalistWhiteCeramicPlanter_nakk53.png" alt="">
                <div class="productText">
                    <h4>Minimalist White Ceramic Planter</h4>
                    <p >$34.99</p>
                </div>
            </a>
            <a href="#" class="product">
                <img src="https://res.cloudinary.com/drkhhutl3/image/upload/v1739154274/product_MinimalistWhiteCeramicPlanter_nakk53.png" alt="">
                <div class="productText">
                    <h4>Minimalist White Ceramic Planter</h4>
                    <p >$34.99</p>
                </div>
            </a><a href="#" class="product">
                <img src="https://res.cloudinary.com/drkhhutl3/image/upload/v1739154274/product_MinimalistWhiteCeramicPlanter_nakk53.png" alt="">
                <div class="productText">
                    <h4>Minimalist White Ceramic Planter</h4>
                    <p >$34.99</p>
                </div>
            </a><a href="#" class="product">
                <img src="https://res.cloudinary.com/drkhhutl3/image/upload/v1739154274/product_MinimalistWhiteCeramicPlanter_nakk53.png" alt="">
                <div class="productText">
                    <h4>Minimalist White Ceramic Planter</h4>
                    <p >$34.99</p>
                </div>
            </a>
        </div>
        <div id="viewBtnDiv">
            <a href="" id="viewBtn"> View Collection</a>
        </div>
    </div>         
</div> --> 
<!-- ----------- -->

<!-- NEW SVELTE + Supabase VERSION -->
<div class="container">
    <div class="containerInner">
        <h2>What's Popular</h2>
        <div class="row">
            {#if data.products}
                {#each data.products.filter(product => product.tags.includes('popular')).slice(0, 5) as product}
                    <a href="/products/{product.slug}" class="product">
                        <img src={product.productImg} alt={product.title} />
                        <div class="productText">
                            <h4>{product.title}</h4>
                            <p><strong>Price:</strong> ${product.price}</p>
                        </div>
                    </a>
                {/each}
                {:else}
                    <p>Loading...</p>
            {/if}
        </div>
        <div id="viewBtnDiv">
            <a href="/products/popular/" id="viewBtn"> View Collection</a>
        </div>
    </div>
</div>

<style>

    /* *{
        border: 1px solid red;
    } */

    .container{
        display: flex;
        flex-direction: column;
    }

    .containerInner{
        margin: 10px 0;
        padding: 30px 0;  
    }

    /* .row{
        display: flex;
        flex-direction: row;
        gap: 20px;
    } */
     
    .row{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 20px;
    }

    a  {
        text-decoration: none;
    }

    .product  {
        background: white;
        border: 1px solid #F9F9F9;
        color: #2A254B;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .product:hover{
        background-color: #F9F9F9;
        box-shadow: 0 0 10px #C2BAFB;
        border: 1px solid #2A254B;
        /* transform: translateY(-3px); */
        transition-delay: 0.3s; 
    }

    .productText{
        padding: 5px 15px;
        margin: 0;
        text-decoration: none;
    }

    .product img{
        width: 100%;
        object-fit: contain;
    }

    #viewBtnDiv{
        display: flex;
        justify-content: center;
        padding: 2rem;
    }

    #viewBtn{
        background-color: #F9F9F9;
        border: 2px solid #2A254B;
        padding: 20px 30px;
        color: #2A254B;
    }

    #viewBtn:hover{
        background-color: #2A254B;
        border: 2px solid #2A254B;
        box-shadow: 0 0 30px #C2BAFB;
        color: #F9F9F9;
        transition-delay: 0.3s; 
    }

    @media (max-width: 1090px){
        .row {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            padding: 20px 0; 
        }
    }

    @media (max-width: 700px){
        .row {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            padding: 20px 0; 
        }
    }

    @media (max-width: 600px){
        .row {
            grid-template-columns: repeat(2, 2fr);
            gap: 15px;
        }

    }

</style>