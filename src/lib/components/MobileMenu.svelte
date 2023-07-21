<script lang="ts">
    export let data;
    let open = true;
    const toggleMenu = () => {
        open = !open;
    }
</script>

<span class="menu" on:click={toggleMenu} class:hide={open == false}>🍔</span>

<div class="mobile-menu" class:open>
    <ul>
        <li class="menu" on:click={toggleMenu}>🍔</li>
        <li><a href="/">Home</a></li>
        <li><a href="menu">Menu</a></li>
        {#each data.pages as page}
        <!-- Exclude the page home page from the navigation -->
        {#if page.id != '23'}
        <li><a data-sveltekit-reload href={page.slug}>{page.title.rendered}</a></li>
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
    align-items: baseline;
   }
    .open {
        display:none;
        transition: left 0.5s;
    }
    .hide {
        display: none;
    }
    .mobile-menu {
        background-color: green;
        width:100%;
        height: 100%;
        position: absolute;
        right:0;
        transition: left 0.5s;
        margin:0;
        padding: 0;
        border: none
    }
</style>