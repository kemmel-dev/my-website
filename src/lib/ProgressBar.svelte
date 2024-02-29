<script>
	import { onMount } from "svelte";

    let container, progressBar, progress;

    onMount(() => {

        container = document.querySelector('#content');
        progressBar = document.querySelector('#progress-bar');
        progress = document.querySelector('#progress');

        // Whenever the browser is resized, determine visibility of progress bar
        window.addEventListener('resize', function() {
            determineProgressVisibility();
            determineProgressWidth();
        });

        // Whenever the page is loaded, determine visibility of progress bar
        window.addEventListener('load', function() {
            determineProgressVisibility();
        });

        container.addEventListener('scroll', function() {
        determineProgressWidth();
    });
    });



    function determineProgressVisibility() {
        if (isOverflown(container)) {
            progressBar.style.visibility = 'visible';
        } else {
            progressBar.style.visibility = 'hidden';
        }
    }

    function determineProgressWidth() {
        progress.style.width = `${container.scrollTop / (container.scrollHeight - container.clientHeight) * 100}%`;
    }

    function isOverflown(element) {
        return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
    }


</script>

<div id="progress-bar" class="w-full h-[8px] bg-secondary">
    <div id="progress"  class="w-0 h-full bg-primary"></div> 
</div> 