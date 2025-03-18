<script>

    // Page Inputs
    let site_title ="Coming Soon";
    let headerText = "Something Exciting is Coming!";
    let paraText = "We’re working on something special and it is almost here!";

    // Functionality and More Content

        // Navigate back to home when the button is clicked
        function goHome() {
            window.location.href = '/';
        }
</script>

<svelte:head>
    <title>Crafted Comfort | {site_title} </title>
    <meta
        name="description"
        content="This is where the description goes for SEO"
    >
</svelte:head>

<div class="error-container">
    <h1>{headerText}</h1>
    <div>✨✨✨</div>
    <p>{paraText}</p>
    <button on:click={goHome}>Go Back Home</button>
</div>

<style>
    .error-container {
        text-align: center;
        padding: 3rem;
        border: 1px solid #2c2543;
        color: #2c2543;
        border-radius: 3px;
        max-width: 500px;
        margin: 5rem auto;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    h1 {
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 2rem;
    } 

    button {
        background: #2A254B;
        border: 2px solid #2A254B;
        color: white;
        padding: 20px 30px;
        font-family: 'Raleway', baloo;
        font-weight: 300;
        font-size: 18px;
        cursor: pointer;
        /* transition: background 0.3s ease-in-out; */
    }

    button:hover {
        background: #F9F9F9;
        padding: 20px 30px;
        border: 2px solid #2A254B;
        color: #2A254B;
    }


</style>
