<script lang="ts">
	export let data;

	console.log(data.cats);
</script>

{#each data.cats as cat}
	<h1>{cat.name}</h1>
    {@html cat.detailed_decription.value}
	<hr />
	{#each data.items as item}
		{#if item.menu_item_category[0].name.includes(cat.name)}
			<article>
				<h1>{item.item_name}</h1>
				<h2>{item.item_description}</h2>
				<h3>${item.cost}</h3>
				{#each item.menu_item_type as type}
					<em>{type.name}</em>
				{/each}
			</article>
		{/if}
	{/each}
{/each}
