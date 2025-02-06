<div class="container">
    <div class="containerInner">
        <h3>What makes our brand different</h3>
        <div class="row">
            <a href="#" class="product">
                <div class="productText">
                    <h4>Next day as standard</h4>
                    <p>Order before 3pm and get your order the next day as standard</p>
                </div>
            </a>
            <a href="#" class="product">
                <div class="productText">
                    <h4>Made by true artisans</h4>
                    <p>Handmade crafted goods made with real passion and craftmanship</p>
                </div>
            </a>
            <a href="#" class="product">
                <div class="productText">
                    <h4>Unbeatable prices</h4>
                    <p >For our materials and quality, you won't find better prices anywhere</p>
                </div>
            </a>
            <a href="#" class="product">
                <div class="productText">
                    <h4>Recycled packaging</h4>
                    <p>We use 100% recycled packaging to ensure our footprint is manageable</p>
                </div>
            </a>
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
        margin: 20px 30px;
    }

    .row{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }

    a  {
        text-decoration: none;
    }

    .product  {
        background: white;
        border: 1px solid #F9F9F9;
        color: #2A254B;
    }

    .productText{
        padding: 5px 15px;
        margin: 0;
        text-decoration: none;
    }

    h3{
        text-align: center;
    }

    .productText h4{
        padding-bottom: 5px;
        border-bottom: 1px solid #2A254B;
        width: max-content;
    }


    /* @media (max-width: 1090px){
        .row {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            padding: 20px 0; 
        }
    } */
    @media (max-width: 1050px){
        .row {
            grid-template-columns: repeat(2, 2fr);
            gap: 20px;
            padding: 20px 0; 
        }    }


    @media (max-width: 700px){
        .row {
            grid-template-columns: repeat(2, 2fr);
            gap: 20px;
            padding: 20px 0; 
        }
    }

    @media (max-width: 600px){
        .row {
            gap: 15px;
        }

    }
    @media (max-width: 500px){
        .row {
            grid-template-columns: repeat(1, 1fr);
            gap: 15px;
        }
        .product  {
            background: white;
            border: 1px solid #2A254B;
            color: #2A254B;
        }

    }

</style>