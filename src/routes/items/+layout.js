import { error } from '@sveltejs/kit';

export const load = async ({ fetch, parent }) => {
	const response = await fetch(`http://localhost:4000/featured-products`);
	const { user } = await parent();
	if (response.status === 404) {
		throw error(404, { message: 'Product not found try later', hint: 'try different product' });
	}
	const products = await response.json();
	const title = 'Products';

	return { products, title, user };
};
