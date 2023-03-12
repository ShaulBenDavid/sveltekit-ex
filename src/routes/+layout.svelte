<script>
	import Header from '$lib/header.svelte';
	import { page } from '$app/stores';
	export let data;
</script>

<Header />
<svelte:head>
	<title>{$page.data.title || 'Codevolution'}</title>
</svelte:head>

<h1>Welcome {data.user}</h1>
{#if $page.data.notification}
	<h2>Notification {$page.data.notification}</h2>
{/if}
<slot />
<footer>footer</footer>
