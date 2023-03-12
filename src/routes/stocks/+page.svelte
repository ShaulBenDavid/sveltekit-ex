<script>
	import { invalidateAll, invalidate } from '$app/navigation';
	export let data;
	$: stock = data;
	function refresh() {
		invalidate('stocks');
		invalidateAll();
	}
</script>

<h1>{stock.wixStock.symbol}</h1>
<h1>{stock.appleStock.symbol}</h1>
<h1>{stock.teslaStock.symbol}</h1>
<button on:click={refresh}>Refresh</button>
