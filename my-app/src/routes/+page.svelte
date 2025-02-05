<svelte:head>
    <title>Crafted Comfort | Home</title>
    <meta
        name="description"
        content="This is where the description goes for SEO"
    >
    
</svelte:head>

<script>
    import CeramicView from "$lib/CeramicView.svelte";
</script>

<main>
    <div class="hero">
        <div id="heroText">
            <div id="heroUpper">
                <h1>The furniture brand for comfort, with timeless designs </h1>
                <p>A new era in eco friendly furniture with tasteful colors. Creating beautiful ways to decorate your space while being comfortable. </p>
            </div>
            <a href="#" class="btn-opacity-white">View Collection</a>

        </div>
            <img id="heroImg" src="https://res.cloudinary.com/drkhhutl3/image/upload/v1738544320/heroRight_gmo59f.png" alt="">
        
    </div>

    <CeramicView />
</main>


<style>
    /* *{
        border: 1px solid red;
    } */

    p{
        font-size: 20px;
        line-height: 30px;
    }

    /* main{
        margin: 15px 90px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    } */

    .hero{
        display: flex;
        flex-direction: row;
        width: auto;
        height: 30%;
        background-color: #2A254B;
        color: #ffffff;
    }

    /* #heroImg{
        width: auto;
        height: 100%;
    } */

    #heroImg{
        object-fit: cover;
        /* width: auto;
        height: 100%; */
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
        box-shadow: 0 0 30px #C2BAFB;
        transition-delay: 0.3s; 
    }


    @media (max-width: 900px) {

        main{
            margin: 15px 50px;
        }

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
        main{
            margin: 15px 20px;
        }

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



    @media (max-width: 500px) {

        main{
            margin: 15px 0px;
        }

    }


</style>

<!-- <h1>Welcome to SvelteKit</h1>
<h2>Home Page</h2>
<h3>This is h3</h3>
<h4>This is h4</h4>
<img src="../../static/logo.png" alt="" height="1000px">
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<p> This is Home page</p> -->








<!-- <script lang='js'>
  import MyComponent from "$lib/MyComponent.svelte";

    let count = $state(1);
    let double = $derived(count * 2);

    $effect(() =>{
        if (count >= 10) {
            console.log('Count is more than 10');
        }
    })

</script>

<button onclick={() => count++}> count: {count}</button>
<p>{count}</p>
<p>{double}</p>
 
<MyComponent /> -->

<!-- FORM Set up -->

<!-- <script lang="en">

    let name = $state('');
    let agreed = $state(false);
    let color = $state('');
    let choice = $state('');
    let my_div = $state(null);

    $inspect(name);
    $inspect(color);

</script>

<div bind:this={my_div}>
    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur doloremque unde sequi quia ipsum, atque, iusto harum labore ut porro eum, consectetur aliquam suscipit voluptatem laboriosam velit nobis amet cupiditate.
    </p>
</div>

<button onclick={() => alert( `Div height: ${my_div.offsetHeight}px`)}> Get Div Height</button>


<input type="text" bind:value={name}/>


<input type="checkbox" bind:checked={agreed}/>

<input type="radio" bind:group={color} value="red"/>
<input type="radio" bind:group={color} value="green"/>

<select bind:value={choice}>
    <option value=""> -- select --</option>
    <option value="one"> One </option>
    <option value="two"> Two </option>
</select>

<p>Name: {name}</p>
<p>Agreed: {agreed}</p>
<p>Color: {color}</p>
<p>Choice: {choice}</p> -->


<!-- ----------------------- -->
<!-- 
<script lang="en">
    let is_visible = true;
</script>

{#if is_visible}

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio doloremque reiciendis, molestias corrupti autem repudiandae temporibus iste, delectus quibusdam eos, neque dolore eum ratione! Vero totam hic ex tempora. Sapiente.</p>

{:else}
<p>is_visible is false</p>

{/if} -->