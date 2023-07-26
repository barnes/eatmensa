<script lang="ts">
	export let data;

	console.log(data.cats);

	const menu = {
		menu: {
			categories: [
				{
					category: 'Sandwiches',
					description: 'Delicious sandwiches made with fresh ingredients.',
					items: [
						{
							title: 'Classic BLT',
							description: 'Bacon, lettuce, and tomato served on toasted bread.',
							price: 8.99,
							allergy_flags: []
						},
						{
							title: 'Veggie Delight',
							description: 'Grilled vegetables with avocado and hummus in a whole wheat wrap.',
							price: 7.99,
							allergy_flags: ['vegan']
						},
						{
							title: 'Gluten-Free Chicken Wrap',
							description:
								'Grilled chicken with lettuce, tomatoes, and dairy-free dressing in a gluten-free wrap.',
							price: 9.99,
							allergy_flags: ['gluten-free', 'dairy-free']
						}
					]
				},
				{
					category: 'Salads',
					description: 'Fresh and healthy salads to tantalize your taste buds.',
					items: [
						{
							title: 'Caesar Salad',
							description:
								'Romaine lettuce, croutons, and parmesan cheese tossed in Caesar dressing.',
							price: 6.99,
							allergy_flags: []
						},
						{
							title: 'Mediterranean Quinoa Salad',
							description:
								'Quinoa, cucumber, cherry tomatoes, olives, and feta cheese in a lemon vinaigrette.',
							price: 8.49,
							allergy_flags: ['vegetarian']
						},
						{
							title: 'Tuna Nicoise Salad',
							description:
								'Seared tuna, mixed greens, boiled eggs, potatoes, and green beans with balsamic vinaigrette.',
							price: 10.99,
							allergy_flags: []
						}
					]
				},
				{
					category: 'Soups',
					description: 'Comforting and hearty soups to warm your soul.',
					items: [
						{
							title: 'Tomato Basil Soup',
							description: 'Classic tomato soup with fresh basil and a hint of cream.',
							price: 4.99,
							allergy_flags: ['vegetarian']
						},
						{
							title: 'Lentil Soup',
							description: 'Hearty lentil soup with vegetables and aromatic spices.',
							price: 5.49,
							allergy_flags: ['vegan']
						},
						{
							title: 'Chicken Noodle Soup',
							description:
								'Traditional chicken noodle soup made with tender chicken and egg noodles.',
							price: 6.49,
							allergy_flags: []
						}
					]
				}
			]
		}
	};
</script>

<!-- {#each menu.menu.categories as cat}
	<h1>{cat.category}</h1>
	<p>{cat.description}</p>
	<hr />
	<div class="menu-item">
		{#each cat.items as item}
		<article>
			<h3>{item.title}</h3>
			<p>{item.description}</p>
			<em>${item.price}</em>
			{#each item.allergy_flags as flag}
			<em>{flag}</em>
			{/each}
		</article>
		{/each}
	</div>
{/each} -->

<div>
{#each data.cats as cat}
	<h1>{cat.name}</h1>
		{@html cat.detailed_decription.value}
	<hr />
	<div class="grid">
		{#each data.items as item}
			{#if item.menu_item_category[0].name.includes(cat.name)}
				<article>
					<h3>{item.item_name}</h3>
					<p>{item.item_description}</p>
					<em>${item.cost}</em>
					{#each item.menu_item_type as type}
					<em>{type.name}</em>
					{/each}
				</article>
			{/if}
		{/each}
	</div>
{/each}
</div>

<style>
	.grid {
		grid-template-rows: 50 50;
	}
	article {
		padding: 1rem;
	}
</style>
