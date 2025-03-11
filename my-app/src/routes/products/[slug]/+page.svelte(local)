<script lang="js">

    const {data} = $props();

    const { name, longDescription, price,  quantity, totalAvailable, heroImg, cartImg, height, width, depth} = data.product;

    $inspect(data);

    import Counter from '$lib/Counter.svelte';
    import MightLikeView from "$lib/MightLikeView.svelte";
    import OurBrand from "$lib/OurBrand.svelte";

    let zoomed = false;

    function toggleZoom(event) {
        const img = event.currentTarget;
        if (zoomed) {
            img.style.transform = "scale(1)";
            zoomed = false;
        } else {
            img.style.transform = "scale(1.5)";
            zoomed = true;
        }
    }
</script>


<div class="hero">
    <div id="imageContainer">
        <img id="image" src={heroImg} alt={name} On:mouseover={toggleZoom} 
        On:mouseleave={toggleZoom}>
    </div>
    <div id="textContainer">
        <div id="title">
            <h1>{name}</h1>
            <h2>${price}</h2>
        </div>
        <div id="productDetails">
            <div id="desc">
                <h3>Description</h3>
                <p>{longDescription}</p>
            </div>
            <div id="dimensions">
                <h3>Dimensions</h3>
                <div class="dimensionInner" >
                    <div class="">
                        <p>Height</p>
                        <p>{height} in</p>
                    </div>
                    <div class=" divider1">
                        <p>Width</p>
                        <p>{width} in</p>
                    </div>
                    <div class="">
                        <p>Depth</p>
                        <p>{depth} in</p>
                    </div>
                </div>
            </div>
            
        </div>

        <Counter />
        
    </div>     
</div>

<MightLikeView />
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

        #dimensions{
            display: flex;
            flex-direction: column;
        }

        .dimensionInner{
            display: grid;
            width: 80%;
            grid-template-columns: 1fr 1fr 1fr;
            text-align: center;
            border: 1px solid #2A254B;
        }
        
        .divider1{
            border-right: 3px double #2A254B;
            border-left: 3px double #2A254B;
        }

    }

    @media (max-width: 940px) {
        /* .hero {
            display: grid;
            grid-template-columns: 100%; 
            grid-template-rows: 400px 1fr; 
            width: 100%;
        }

        #imageContainer{
            width: 100%;
            height: 400px;
            overflow: visible;
            position: relative;
        }

         #image{
            width: 100%;
            height: 400px;
            object-fit: cover; 
            position: relative;

        }

        #textContainer{
            margin: 35px 0;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            padding:10px;
            width: 100%;
            border: 1px solid red;

        } */

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

        /* #image{
            object-fit: cover;
            position: relative;
            top: 0;
            right: 0;
        } */

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

        .dimensionInner{
            width: 100%;
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

        .dimensionInner{
            width: 100%;
        }


    }



</style>