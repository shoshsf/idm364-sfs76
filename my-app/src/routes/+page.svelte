<script lang="js">
     
    // Page Inputs
     let site_title = "Home";
     let meta_name = "description";
     let meta_content = "This is the home page.";

    // Functionality and More Content
    const { data } = $props();
    import HeroHome from "$lib/HeroHome.svelte";
    import OurBrand from "$lib/OurBrand.svelte";
    import NewArrivalsView from "$lib/NewArrivalsView.svelte";
    import PopularView from "$lib/PopularView.svelte";

    // $inspect(data);
    
</script>


<svelte:head>
    <title>Crafted Comfort | {site_title} </title>
    <meta
        name= {meta_name}
        content= {meta_content}
    >
</svelte:head>


<HeroHome />
<OurBrand />
<NewArrivalsView data={data}/>
<PopularView data={data}/>



<!--  OLD CODE FROM CLASS -->


        <!-- <script>
            const {form} = $props();

            $inspect(form);
        </script>

        <form method="POST">
            <label for="name">Name</label>
            <input type="text" name="name" required placeholder="Jane Doe"
            value="Jane Doe">
        </form>



        {#if form?.success}

        <p>Form submitted successfully!</p>
        <p>Thank you {form.name}</p>

        {/if} -->






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
