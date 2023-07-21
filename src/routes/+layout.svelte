<script lang="ts">
	import { page } from '$app/stores';
	import '@picocss/pico';
	export let data;
	import MobileMenu from '$lib/components/MobileMenu.svelte';
	import Menu from '$lib/components/Menu.svelte';
	

</script>
<header class="container">
	<nav>
		<ul><h1>Mensa</h1></ul>
			<MobileMenu data={data} />
			<Menu data={data} />
	</nav>
</header>

<main class="container">
	<slot />
</main>

<footer class="container">
	<p>© 2021 Mensa</p>
</footer>


<style>
	
</style>
	
