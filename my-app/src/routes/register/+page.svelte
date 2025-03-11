<script>
    import {enhance} from '$app/forms';
    const {form} = $props();

    let email_input = $state(null);
    let password_input = $state(null);

    $effect(() =>{
        if (email_input && form?.message)
            email_input.focus();
    });

</script>

<h1>Register</h1>

<section>
    <h2>Create a New Account</h2>
    <form method="POST" action="?/register" use:enhance>
        <label for="email">Email</label>
        <input 
            type="email" 
            placeholder="svelte@example.com" 
            name="email" 
            bind:this={email_input}
            required
        />

        <label for="password">Password</label>
        <input 
            type="password" 
            placeholder="Enter Password" 
            name="password" 
            bind:this={password_input}
            required
        />

        <button formaction="?/register">Register</button>
    </form>
</section>


{#if form?.register_success}
    <p>{form.email} You are Registered!</p>
    {:else if form?.message}
  <p>{form.message}</p>
{/if}