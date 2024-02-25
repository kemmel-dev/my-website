
<nav>
    {#each routes as route}
        <a href="{route.href}">{route.name}</a>
    {/each}
</nav>

<script>
    let routes = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects' },
        { name: 'About', href: '/about' },
    ];
</script>