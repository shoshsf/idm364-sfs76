


<div class="container">
    <div class="containerInner">
        <h2>New ceramics</h2>
        <div class="row">
            <a href="#" class="product">
                <img src="https://res.cloudinary.com/drkhhutl3/image/upload/v1739154241/product_TerraRusticClayPot_tofdoo.png" alt="">
                <div class="productText">
                    <h4>Terra Rustic Clay Pot</h4>
                    <p >$250.00</p>
                </div>
            </a>
            <a href="#" class="product">
                <img src="https://res.cloudinary.com/drkhhutl3/image/upload/v1739154241/product_TerraRusticClayPot_tofdoo.png" alt="">
                <div class="productText">
                    <h4>Terra Rustic Clay Pot</h4>
                    <p >$250.00</p>
                </div>
            </a><a href="#" class="product">
                <img src="https://res.cloudinary.com/drkhhutl3/image/upload/v1739154241/product_TerraRusticClayPot_tofdoo.png" alt="">
                <div class="productText">
                    <h4>Terra Rustic Clay Pot</h4>
                    <p >$250.00</p>
                </div>
            </a><a href="#" class="product">
                <img src="https://res.cloudinary.com/drkhhutl3/image/upload/v1739154241/product_TerraRusticClayPot_tofdoo.png" alt="">
                <div class="productText">
                    <h4>Terra Rustic Clay Pot</h4>
                    <p >$250.00</p>
                </div>
            </a><a href="#" class="product">
                <img src="https://res.cloudinary.com/drkhhutl3/image/upload/v1739154241/product_TerraRusticClayPot_tofdoo.png" alt="">
                <div class="productText">
                    <h4>Terra Rustic Clay Pot</h4>
                    <p >$250.00</p>
                </div>
            </a>
        </div>
        <div id="viewBtnDiv">
            <a href="" id="viewBtn"> View Collection</a>
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

    .row{
        display: flex;
        flex-direction: row;
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