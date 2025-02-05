<svelte:head>
    <title>Crafted Comfort | Products</title>
    <meta
        name="description"
        content="This is where the description goes for SEO"
    >
    
</svelte:head>

<script>
    import ProductSort from "$lib/ProductSort.svelte";
    import ProductItemsGrid from "$lib/ProductItemsGrid.svelte";
</script>

<main>
    <h1>View All Products</h1>
    
    <ProductSort />
    <ProductItemsGrid />


</main>


<style>
    *{
        border: 1px solid red;
    }

    p{
        font-size: 20px;
        line-height: 30px;
    }

    .hero{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 30%;
        background-color: #2A254B;
        color: #ffffff;
    }


    #heroImg{
        object-fit: cover;
        position: relative;
        top: 0;
        right: 0;
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

    a{
        background-color: #59537d;
        padding: 20px 30px;
        margin: 20px 0;
        color: #ffffff;
        text-decoration: none;
        border: 2px solid #2A254B;
        width: 50%;
        text-align: center;
    }

    a:hover{
        background-color: #F9F9F9;
        border: 1px solid #2A254B;
        color: #2A254B;
        transition-delay: 0.3s; 
    }

    @media (max-width: 900px) {
        
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