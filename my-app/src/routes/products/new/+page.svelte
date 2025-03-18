<script lang="js">

    // Page Inputs
    let site_title = "New Arrivals";
    let page_title = "Our New Arrivals";
        
    // Functionality and More Content
    const { data } = $props();

</script>

<svelte:head>
    <title>Crafted Comfort | {site_title} </title>
    <meta
        name="description"
        content="This is where the description goes for SEO"
    >
</svelte:head>

<!-- NEW SVELTE + Supabase VERSION -->

<h1 class="pageTitle">{page_title}</h1>

<div class="container">
    <div class="containerInner">
        <div class="row">
            {#if data.products}
                {#each data.products.filter(product => product.tags.includes('new')) as product}
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
        <hr>
        <div id="viewBtnDiv">
            <a href="/products/" id="viewBtn">View All Our Products</a>
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