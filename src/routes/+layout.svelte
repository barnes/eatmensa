<script lang="ts">
	import { page } from '$app/stores';
	import '@picocss/pico';
	export let data;
	import MobileMenu from '$lib/components/MobileMenu.svelte';
	import Menu from '$lib/components/Menu.svelte';
	

</script>

<section class="container-fluid">
	<nav>
		<ul><h1>Mensa</h1></ul>
			<MobileMenu data={data} />
			<Menu data={data} />
	</nav>
	<slot />
</section>

<style>
	.container-fluid {
		padding: 1rem 0 0 0;
	}
</style>
	
