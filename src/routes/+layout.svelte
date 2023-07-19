<script lang="ts">
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
				<li><a data-sveltekit-reload href={page.slug}>{page.title.rendered}</a></li>
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
