<script>
	import { invalidateAll, invalidate } from '$app/navigation';
	export let data;
	$: stock = data;
	function refresh() {
		invalidate('stocks');
		invalidateAll();
	}
	let count = 0;
	$: counter = () => (count += 1);
	console.log('1 =', 1);
</script>

<h1>{stock.wixStock.symbol}</h1>
<h1>{stock.appleStock.symbol}</h1>
<h1>{stock.teslaStock.symbol}</h1>
<button on:click={refresh}>Refresh</button>
<button on:click={counter}>{count}</button>
