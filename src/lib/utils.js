export const parsePackage = (pkg) => {
	return pkg.map((p) => {
		const title = p.data['package-name'][0].text;
		const price = p.data['package-price'];
		const services = p.data['package-services'].map((s) => {
			return s['package-service'][0].text;
		});
		return {
			title,
			price,
			services
		};
	});
};
