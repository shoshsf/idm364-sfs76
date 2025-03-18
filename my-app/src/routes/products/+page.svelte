<!-- NEW VERSION CONNECTED TO SUPABASE! -->

<script lang="js">

    // Page Inputs
    let site_title = "Products";
    let page_title = "Our Products";

    // Functionality and More Content
    const { data } = $props();

</script>

<svelte:head>
    <title>Crafted Comfort | {site_title}</title>
    <meta
        name="description"
        content="This is where the description goes for SEO"
    >
    
</svelte:head>


<h1 class="pageTitle">{page_title}</h1>


<div class="product-grid">
    {#if data.products}
            {#each data.products as product}
            <a href="/products/{product.slug}" class="product">
                <img src={product.productImg} alt={product.title} />
                <div class="productText">
                    <h4>{product.title}</h4>
                    <p><strong>Price:</strong> ${product.price}</p>
                </div>
            </a>
            {/each}
        
        {:else }
        <p>Loading...</p>
    {/if}
</div>

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


<!--  OLD LOCAL DATABASE Version  -->

    <!-- <script>
        const { data } = $props();

        $inspect(data);
        
        import ProductSort from "$lib/ProductSort.svelte";
        // import ProductItemsGrid from "$lib/ProductItemsGrid.svelte";
    </script> -->

    <!-- <main>
    <h1>View All Products</h1>
    <div class="product-grid">
        {#each data.products as {name, productImg, price, slug}}
            <a href="/products/{slug}" class="product">
                <img src={productImg} alt={name} />
                <div class="productText">
                    <h4>{name}</h4>
                    <p><strong>Price:</strong> ${price}</p>
                </div>
            </a>
        {/each}
    </div>

</main> -->
<!-- ---------------------------- -->

