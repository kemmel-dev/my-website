<script>
    import Logo from '$lib/Logo.svelte';
    import Icon from '@iconify/svelte';
    import { base } from '$app/paths';

    console.log(base);

    let routes = [
        { name: 'Home', href:  '/' },
        { name: 'Blog', href: '/' },
        { name: 'Projects', href: '/projects' },
        { name: 'About', href: '/about' },
    ];
</script>


<nav class="flex justify-center w-full h-32 p-4 duration-500 bg-white shadow-xl lg:h-16">
    <div class="grid items-center grid-cols-1 duration-500 max-w-screen-3xl grow lg:grid-cols-3">
        <a class="text-3xl" href="@Model.NavRootPage.Url">
            <Logo/>
        </a>
        <div class="flex mt-8 duration-500 divide-x-2 lg:mt-0 lg:justify-center">
            {#each routes as route}
                <div>
                    <a href="{base}{route.href}" class="p-2 hover:text-accent">{route.name}</a>
                </div>
            {/each}
        </div>
        <div>
            <a
                href="@Model.SearchPage.Url"
                class="absolute duration-500 right-4 top-4 xs:top-12 lg:relative lg:right-auto lg:top-auto lg:float-right">
                <Icon icon="charm:search" width="32"/>
            </a>
        </div>
    </div>
</nav>

