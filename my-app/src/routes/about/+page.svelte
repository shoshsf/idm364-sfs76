<script>

    // Page Inputs
    let site_title = "About Us";
    let page_title = "About Crafted Comforts";
    let subtitle = "Designed for Elegance. Crafted for Comfort.";
    let description = "At Crafted Comforts, we blend aesthetics with functionality to create furniture that transforms spaces into sanctuaries. Our designs embrace simplicity, sustainability, and superior craftsmanship, ensuring every piece tells a story of comfort and elegance.";

    // Functionality and More Content
    import OurBrand from "$lib/OurBrand.svelte";

</script>

<svelte:head>
    <title>Crafted Comfort | {site_title} </title>
    <meta
        name="description"
        content="This is where the description goes for SEO"
    >
</svelte:head>

<div class="hero">
    <div id="imageContainer">
        <img id="image" src="https://res.cloudinary.com/drkhhutl3/image/upload/v1742285377/idm364/mvsiowtw34xixv5pbisb.png" alt="">
    </div>
    <div id="textContainer">
        <div id="title">
            <h1>{page_title}</h1>
            <h2>{subtitle}</h2>
        </div>
        <div id="productDetails">
            <div id="desc">
                <p>{description}</p>
            </div>
        </div>
                
    </div>     
</div>

<OurBrand />


<style>
    /* *{
        border: 1px solid red;
    } */

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
        overflow: hidden;
        position: relative;
    }


    #image{
        width: 100%;
        height: 100%;
        object-fit: cover; 
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
        flex-wrap: wrap;
        justify-content: space-between;
        border-bottom: 2px solid #2A254B;
    }


    
    @media (max-width: 1150px) {

        .hero{
            grid-template-columns: 1fr 1fr;
        }


        #textContainer{
            padding: 20px 35px;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            gap: 15px;
        }

        #productDetails{
            gap: 20px;
        }

        #title{
            flex-wrap: wrap;
        }
      

    }

    @media (max-width: 940px) {

        .hero{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 100%;
            margin: 0 auto;
            box-sizing: border-box;
        }

        #imageContainer{
            width: auto;
            height: 100%;
            overflow: visible;
            position: relative;
        }
        #imageContainer img {
        width: 100%;
        transition: transform 0.3s ease-in-out;
        cursor: pointer;
        }

        #imageContainer img:hover {
            transform: scale(1.5);
        }

        #image{
            width: 100%;
            height: 100%;
            object-fit: cover; 
            position: absolute;
        }


        #textContainer{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: right;
            flex-wrap: wrap;
            padding: 0;
            border: 1px solid red;
            max-width: 90%;
            box-sizing: border-box;
            overflow-wrap: break-word;

        }

        #productDetails{
            margin: 10px 15px;
        }

        #title{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            border-bottom: 2px solid #2A254B;
            margin: 15px;
        }



    }

    @media (max-width: 480px) {

        .hero{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 100%;
            margin: 0 auto;
            box-sizing: border-box;
        }

        #imageContainer{
            width: auto;
            height: 100%;
            overflow: visible;
            position: relative;
        }

        #image{
            object-fit: cover;
            position: relative;
            top: 0;
            right: 0;
        }

        #textContainer{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: right;
            flex-wrap: wrap;
            padding: 0;
            margin: 0;
            border: 1px solid blue;
            max-width: 100%;
            height: auto;
            box-sizing: border-box;
            overflow-wrap: break-word;

        }

        #productDetails{
            padding: 10px;
            height: auto;
            border: 1px solid green;
            margin: 0;

        }

        #title{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            border-bottom: 2px solid #2A254B;
            padding: 10px;
            margin:0;
        }



    }



</style>
