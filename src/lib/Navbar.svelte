
<nav class="flex justify-center w-full h-32 p-4 duration-500 bg-white shadow-xl lg:h-16">
    {#each routes as route}

    <div class="grid items-center grid-cols-1 duration-500 max-w-screen-3xl grow lg:grid-cols-3">
        <a href="{route.href}" class="text-3xl">{route.name}</a>
    </div>
    {/each}
</nav>

<script>
    let routes = [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/' },
        { name: 'Projects', href: '/projects' },
        { name: 'About', href: '/about' },
    ];
</script>