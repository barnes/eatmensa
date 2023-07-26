<script lang="ts">
	import { fade } from "svelte/transition";

    export let data;
    let open = true;
    const toggleMenu = () => {
        open = !open;
    }
</script>

<span class="menu" on:click={toggleMenu} class:hide={open == false}><svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="16px" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></span>

<div class="mobile-menu" class:open transition:fade>
    <ul>
        <li class="menu" on:click={toggleMenu}>X</li>
        <li><a on:click={toggleMenu} role="button" href="/">Home</a></li>
        <li><a on:click={toggleMenu} href="menu">Menu</a></li>
        {#each data.pages as page}
        <!-- Exclude the page home page from the navigation -->
        {#if page.id != '23'}
        <li><a on:click={toggleMenu} data-sveltekit-reload href={page.slug}>{page.title.rendered}</a></li>
        {/if}
        {/each}
    </ul>
</div>


<style>
    @media (min-width: 576px) {
        .menu {
            display: none;
        }
    }
    @media (max-width: 576px) {
        .menu {
            display: flex;
        }
    }
   ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   }
    .open {
        display:none;
    }
    .hide {
        display: none;
    }
    .mobile-menu {
        background-color: var(--pico-background-color);
        width:100vw;
        height: 100vh;
        position: absolute;
        right:0;
        top: 0;
        bottom: 0;
        left: 0;
        transition:
    width 2s,
    height 2s,
    background-color 2s,
    rotate 2s;
    }
</style>