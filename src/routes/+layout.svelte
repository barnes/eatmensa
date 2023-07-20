<script lang="ts">
	import { page } from '$app/stores';
	import '@picocss/pico';
	export let data;
</script>

<section class="container">
	<nav>
		<ul><h1>Mensa</h1></ul>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="menu">Menu</a></li>
			{#each data.pages as page}
				<!-- Exclude the page home page from the navigation -->
				{#if page.id != '23'}
				<li><a data-sveltekit-reload href={page.slug}>{page.title.rendered}</a></li>
				{/if}
			{/each}
		</ul>
	</nav>
	<slot />
</section>

<style>
	.container {
		padding: 1rem 0 0 0;
	}
</style>
