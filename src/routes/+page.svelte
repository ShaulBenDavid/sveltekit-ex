<script>
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
	const handleClick = () => {
		goto('/products', { replaceState: true });
	};
	beforeNavigate(() => {
		console.log('before');
	});

	afterNavigate(() => {
		console.log('after');
	});
</script>

<h1>Hello world</h1>
<a href="/blog">Blog</a>
<a href="/products">Products</a>
<button on:click={handleClick}>place holder</button>
