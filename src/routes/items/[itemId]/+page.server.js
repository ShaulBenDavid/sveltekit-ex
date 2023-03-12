import { error } from '@sveltejs/kit';

export const load = async (serverLoadEvent) => {
	const response = await serverLoadEvent.fetch(
		`http://localhost:4000/products/${serverLoadEvent.params.itemId}`
	);
	if (response.status === 404) {
		throw error(404, { message: 'Product not found try later', hint: 'try different product' });
	}
	const product = await response.json();
	const notification = 'end of season sale! 50%';

	return { product, notification };
};
