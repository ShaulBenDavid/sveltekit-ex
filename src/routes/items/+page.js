export const load = async (loadEvent) => {
	const title = 'dummy title';
	const response = await loadEvent.fetch('http://localhost:4000/products');
	const products = await response.json();
	const notification = 'end of season sale!';
	return { title, products, notification };
};
