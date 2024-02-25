
<footer>
    {#each footerItems as item }
        <a href="{item.href}">{item.name}</a>
    {/each}
</footer>

<script>
    let footerItems = [
        { name: 'E-mail', href: 'mailto:kamieldevisser@gmail.com' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/kamiel-de-visser/' },
        { name: 'GitHub', href: 'https://www.github.com/kemmel-dev/' },
        { name: 'Resume', href: '/$lib/Resume.pdf'}
    ];
</script>