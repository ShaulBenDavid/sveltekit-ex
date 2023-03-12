<script>
	export let data;
	$: products = data.products;
</script>

<slot />
<h1>{data.title} for {data.user}</h1>
{#each products as product}
	<a href={`/items/${product.id}`}>
		<h2>{product.title}</h2>
		<p>{product.description}</p>
		<hr />
	</a>
{/each}
