<script>
    import Icon from '@iconify/svelte';
    let footerItems = [
        { name: 'E-mail', href: 'mailto:kamieldevisser@gmail.com', icon: "ic:baseline-email"},
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/kamiel-de-visser/', icon: "mdi:linkedin" },
        { name: 'GitHub', href: 'https://www.github.com/kemmel-dev/', icon: "mdi:github"},
        { name: 'Resume', href: '/$lib/Resume.pdf', icon: "mdi:resume"}
    ];
</script>

<footer>
    <div class="bottom-0 flex flex-row justify-center w-full h-16 py-4 space-x-4 bg-white shadow-t-xl">
        {#each footerItems as item }
            <a href="{item.href}" class="flex flex-col items-center justify-center  text-xs text-black px-2 opacity-25 hover:text-accent hover:opacity-100">
                <Icon icon="{item.icon}" class="text-3xl"/>
                {item.name}
            </a>
        {/each}    
    </div>
</footer>


