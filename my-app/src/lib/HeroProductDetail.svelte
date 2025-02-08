<script>
    import Counter from "./Counter.svelte";
</script>

<div class="hero">
    <div id="imageContainer">
        <img id="image" src="https://res.cloudinary.com/drkhhutl3/image/upload/v1739051181/TheDandyChair_Detail_jgwuoz.png" alt="">
    </div>
    <div id="textContainer">
        <div id="productDetails">
            <div id="title">
                <h1> The Dandy Chair</h1>
                <h2>$250.00</h2>
            </div>
            <div id="desc">
                <h3>Description</h3>
                <p>
                    A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect or any stylish living space with beech legs and lambskin leather upholstery.
                </p>
                <ul>
                    <li>Premium Material</li>
                    <li>Handmade upholstery</li>
                    <li>Quality timeless classic</li>
                </ul>
            </div>
            <div id="dimensions">
                <h3>Dimensions</h3>
                <div class="dimensionInner" >
                    <div class="">
                        <p>Height</p>
                        <p>110cm</p>
                    </div>
                    <div class=" divider1">
                        <p>Width</p>
                        <p>75cm</p>
                    </div>
                    <div class="">
                        <p>Depth</p>
                        <p>50cm</p>
                    </div>
                </div>
            </div>
        </div>
        
        <Counter/>
        
    </div>     
</div>



<style>
    /* *{
        border: 1px solid red;
    } */

    p{
        font-size: 20px;
        line-height: 30px;
    }

    .hero{
        display: grid;
        grid-template-columns: 40% 60%;
        width: 100%;
        max-width: 1600px;
        border: 2px solid #2A254B;

    }

    #imageContainer{
        width: 100%;
        height: auto;
        overflow:hidden;
        position: relative;
    }

    #image{
        width: 100%;
        height: 100%;
        object-fit: cover; /* Zooms in without distortion */
        position: absolute;
    }

    #textContainer{
        padding: 40px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        /* border: 1px solid red; */
    }


    #title{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 2px solid #2A254B;

    }


    #dimensions{
        display: flex;
        flex-direction: column;
 
    }

    .dimensionInner{
        display: grid;
        width: 50%;
        grid-template-columns: 1fr 1fr 1fr;
        text-align: center;
        border: 1px solid #2A254B;
    }
    
    .divider1{
        border-right: 3px double #2A254B;
        border-left: 3px double #2A254B;
    }

    #inputSec{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    #itemCounter{
        display: flex;
        flex-direction: row;
    }
    
    #addCartDiv{
        display: flex;
        justify-content: center;
        padding: 2rem;
        align-items: center;
    }

    #addCartBtn{
        background-color: #F9F9F9;
        border: 2px solid #2A254B;
        padding: 20px 30px;
        color: #2A254B;
        text-decoration: none;
    }

    #addCartBtn:hover{
        background-color: #2A254B;
        border: 2px solid #2A254B;
        box-shadow: 0 0 30px #C2BAFB;
        color: #F9F9F9;
        transition-delay: 0.3s; 
    }

    


    @media (max-width: 900px) {


        /* #heroImg{
            width: 35%;
            height: auto;
        } */

        #heroText{
            margin: 35px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

    }

    @media (max-width: 800px) {

        .hero{
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;

        }

        #heroImg{
            width: 0%;
            height: 0%;
            border: none;
            border-radius: 0 ;
            padding: 0;
            visibility: hidden;


        }

    }

</style>
