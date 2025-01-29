<script>
    import '../css/styles.css'
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    let { children } = $props();
</script>


<Header />

 {@render children()} <!--  or you can use <slot/> (slot is a older version)  -->

<Footer />