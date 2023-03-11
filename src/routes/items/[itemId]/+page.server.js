export const load = async (serverLoadEvent) => {
	const response = await serverLoadEvent.fetch(
		`http://localhost:4000/products/${serverLoadEvent.params.itemId}`
	);
	const product = await response.json();
	return { product };
};
