<script lang="js">

    import {enhance} from '$app/forms';
    const {form} = $props();

    let email_input = $state(null);

    $effect(() =>{
        if (email_input && form?.message)
            email_input.focus();
    })

</script>

<h1>Log in</h1>

<section>
    <h3>
        Sign in or Register with an email
    </h3>
    <form method="POST" action="?/login" use:enhance>
        <label for="email">Email</label>
        <input 
            type="email" 
            placeholder="svelte@example.com" 
            name="email" 
            bind:this={email_input}
            required
        />
        <button formaction="?/login">Login</button> 
        <button formaction="?/register">Register</button>
    </form>
    <a href="/register"> Register </a>

</section>


{#if form?.login_success}
    <p>{form.email} You are Logged In!</p>
    {:else if form?.message}
        <p>{form.message}</p>
{/if}

{#if form?.register_success}
    <p>{form.email} You are Registered!</p>
{/if}