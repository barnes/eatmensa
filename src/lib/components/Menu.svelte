<script lang="ts">
    export let data;
</script>

<ul class="menu">
			<li><a href="/">Home</a></li>
			<li><a href="menu">Menu</a></li>
			{#each data.pages as page}
				<!-- Exclude the page home page from the navigation -->
				{#if page.id != '23'}
				<li><a data-sveltekit-reload href={page.slug}>{page.title.rendered}</a></li>
				{/if}
			{/each}
</ul>

<style>
    @media (min-width: 576px) {
        .menu {
            display: block;
        }
    }
    @media (max-width: 576px) {
        .menu {
            display: none;
        }
    }
</style>