<script lang="ts">
	import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";
    import ProgressBar from "$lib/ProgressBar.svelte";
    import "../app.css";
</script>

<main class="flex flex-col min-h-screen bg-background text-text font-nerd">
    <Navbar/>
    <ProgressBar/>
    <div id="content" class="flex-grow h-0 overflow-x-hidden overflow-y-auto">
        <slot/>
    </div>
    <Footer/>
</main>
