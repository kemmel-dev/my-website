<script>
	import Markdown from 'svelte-exmarkdown';
	import { gfmPlugin } from 'svelte-exmarkdown/gfm';
    import { onMount } from 'svelte';

    let md = '';
	const plugins = [gfmPlugin()];

    // Fetch the markdown content from an external file
    async function fetchMarkdownFile() {
        try {
            const url = `./src/routes/` + path;
            const response = await fetch(url);
            md = await response.text();
        } catch (error) {
            console.error('Error fetching markdown file:', error);
        }
    }

    onMount(() => fetchMarkdownFile())
    export let path = ''
</script>

<Markdown {md} {plugins}/>
