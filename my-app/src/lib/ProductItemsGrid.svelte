<!-- 
<script>
    import { products } from "./products.js";
</script>

<div class="product-grid">
    {#each $products as product}
        <a href={`/products/${product.id}`} class="product">
            <img src={product.productImg} alt={product.name} />
            <div class="productText">
                <h4>{product.name}</h4>
                <p><strong>Price:</strong> ${product.price}</p>
            </div>
        </a>
    {/each}
</div> -->

<!-- 
<div class="product-grid">
    <a href="/products/details/" class="product">
        <img src="https://res.cloudinary.com/drkhhutl3/image/upload/v1739104850/TheDandyChair_Card_xmrqoo.png" alt="">
        <div class="productText">
            <h4>The Dandy Chair</h4>
            <p >$250.00</p>
        </div>
    </a>
    <a href="/products/details/" class="product">
        <img src="https://res.cloudinary.com/drkhhutl3/image/upload/v1739104850/TheOtterChair_Card_nb3fzl.png" alt="">
        <div class="productText">
            <h4>The Dandy Chair</h4>
            <p >$250.00</p>
        </div>
    </a>
    <a href="/products/details/" class="product">
        <img src="https://res.cloudinary.com/drkhhutl3/image/upload/v1739104850/TheOtterChair_Card_nb3fzl.png" alt="">
        <div class="productText">
            <h4>The Dandy Chair</h4>
            <p >$250.00</p>
        </div>
    </a>
    <a href="/products/details/" class="product">
        <img src="https://res.cloudinary.com/drkhhutl3/image/upload/v1739104850/TheOtterChair_Card_nb3fzl.png" alt="">
        <div class="productText">
            <h4>The Dandy Chair</h4>
            <p >$250.00</p>
        </div>
    </a>
    <a href="/products/details/" class="product">
        <img src="https://res.cloudinary.com/drkhhutl3/image/upload/v1739104850/TheOtterChair_Card_nb3fzl.png" alt="">
        <div class="productText">
            <h4>The Dandy Chair</h4>
            <p >$250.00</p>
        </div>
    </a>
    <a href="/products/details/" class="product">
        <img src="https://res.cloudinary.com/drkhhutl3/image/upload/v1739104850/TheOtterChair_Card_nb3fzl.png" alt="">
        <div class="productText">
            <h4>The Dandy Chair</h4>
            <p >$250.00</p>
        </div>
    </a>
    <a href="/products/details/" class="product">
        <img src="https://res.cloudinary.com/drkhhutl3/image/upload/v1739104850/TheOtterChair_Card_nb3fzl.png" alt="">
        <div class="productText">
            <h4>The Dandy Chair</h4>
            <p >$250.00</p>
        </div>
    </a>
    <a href="/products/details/" class="product">
        <img src="https://res.cloudinary.com/drkhhutl3/image/upload/v1739104850/TheOtterChair_Card_nb3fzl.png" alt="">
        <div class="productText">
            <h4>The Dandy Chair</h4>
            <p >$250.00</p>
        </div>
    </a>
    <a href="/products/details/" class="product">
        <img src="https://res.cloudinary.com/drkhhutl3/image/upload/v1739104850/TheOtterChair_Card_nb3fzl.png" alt="">
        <div class="productText">
            <h4>The Dandy Chair</h4>
            <p >$250.00</p>
        </div>
    </a>
    <a href="/products/details/" class="product">
        <img src="https://res.cloudinary.com/drkhhutl3/image/upload/v1739104850/TheOtterChair_Card_nb3fzl.png" alt="">
        <div class="productText">
            <h4>The Dandy Chair</h4>
            <p >$250.00</p>
        </div>
    </a>
    <a href="/products/details/" class="product">
        <img src="https://res.cloudinary.com/drkhhutl3/image/upload/v1739104850/TheOtterChair_Card_nb3fzl.png" alt="">
        <div class="productText">
            <h4>The Dandy Chair</h4>
            <p >$250.00</p>
        </div>
    </a>
    <a href="/products/details/" class="product">
        <img src="https://res.cloudinary.com/drkhhutl3/image/upload/v1739104850/TheOtterChair_Card_nb3fzl.png" alt="">
        <div class="productText">
            <h4>The Dandy Chair</h4>
            <p >$250.00</p>
        </div>
    </a>
</div> -->

<style>
    /* *{
        border: 1px solid red;
    } */
    .product-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 20px;
        padding: 20px 0;
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

    @media (max-width: 1090px){
        .product-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            padding: 20px 0; 
        }
    }

    @media (max-width: 700px){
        .product-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            padding: 20px 0; 
        }
    }

    @media (max-width: 600px){
        .product-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            padding: 20px 0; 
        }
    }

    @media (max-width: 400px){
        .product-grid {
            grid-template-columns: repeat(2, 2fr);
            gap: 20px;
            padding: 20px 0; 
        }
    }
</style>