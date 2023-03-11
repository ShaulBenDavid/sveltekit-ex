<script>
	export let data;
	$: product = data.product;
</script>

<h1>{product.title}</h1>
<div>
	<h2>{product.price}</h2>
	<p>{product.description}</p>
	<hr />
</div>
