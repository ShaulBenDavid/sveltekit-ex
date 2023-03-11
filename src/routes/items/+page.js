export const load = async (loadEvent) => {
	const title = 'dummy title';
	const response = await loadEvent.fetch('http://localhost:4000/products');
	const products = await response.json();
	return { title, products };
};
