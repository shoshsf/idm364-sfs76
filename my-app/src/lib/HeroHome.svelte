<div class="hero">
    <div id="heroText">
        <div id="heroUpper">
            <h1>The furniture brand for comfort, with timeless designs </h1>
            <p>A new era in eco friendly furniture with tasteful colors. Creating beautiful ways to decorate your space while being comfortable. </p>
        </div>
        <a href="#" class="btn-opacity-white">View Collection</a>

    </div>
    <div id="imageContainer">
        <img id="image" src="https://res.cloudinary.com/drkhhutl3/image/upload/v1738544320/heroRight_gmo59f.png" alt="">
    </div>
</div>


<style>
    /* *{
        border: 1px solid red;
    } */

    .hero{
        background-color: #2A254B;
        color: #ffffff;
        display: grid;
        grid-template-columns: 60% 40%;
        width: 100%;
        max-width: 1600px;
    }

    #imageContainer{
        width: 100%;
        height: auto;
        overflow:hidden;
        position: relative;
        border: 2px solid black;
    }

    #image{
        width: 100%;
        height: 100%;
        object-fit: cover; /* Zooms in without distortion */
        position: absolute;
    }

    #heroText{
        margin: 45px;
        display: flex;
        flex-direction: column;
        gap: 60px;
    }

    #heroUpper{
        display: flex;
        flex-direction: column;
    }

    .btn-opacity-white{
        background-color: #2A254B;
        border: 2px solid #F9F9F9;
        padding: 20px 30px;
        color: #ffffff;
        margin: 20px 0;
        text-decoration: none;
        width: 50%;
        text-align: center;
    }

    .btn-opacity-white:hover{
        background-color: #F9F9F9;
        border: 2px solid #2A254B;
        padding: 20px 30px;
        color: #2A254B;
        /* box-shadow: 0 0 10px #C2BAFB; */
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


