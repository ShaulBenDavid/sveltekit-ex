export const load = async (loadEvent) => {
	loadEvent.depends('stocks');
	const wix = await loadEvent.fetch('http://localhost:4000/wix-stock');
	const apple = await loadEvent.fetch('http://localhost:4000/apple-stock');
	const tesla = await loadEvent.fetch('http://localhost:4000/tesla-stock');

	return {
		wixStock: wix.json(),
		appleStock: apple.json(),
		teslaStock: tesla.json()
	};
};
