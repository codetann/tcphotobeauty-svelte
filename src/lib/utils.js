const localstorage = {
	get: (key) => {
		if (localStorage.getItem(key)) {
			return JSON.parse(localStorage.getItem(key));
		}
		return null;
	},
	set: (key, value) => {
		localStorage.setItem(key, JSON.stringify(value));
	}
};

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

export const parseClients = (clients) => {
	const cache = localstorage.get('clients');

	if (cache) {
		return cache;
	}
	const clientList = clients.map((c) => {
		const uid = c.uid;
		const title = c.data['client-title'][0].text;
		const thumbnail = c.data['client-thumbnail'].url;
		const gallery = c.data['client-gallery'].map((g) => {
			return {
				url: g['client-gallery-photo'].url,
				height: g['client-gallery-photo'].height,
				width: g['client-gallery-photo'].width,
				name: g['client-gallery-photo'].name
			};
		});
		return { uid, title, thumbnail, gallery };
	});

	localstorage.set('clients', clientList);
	return clientList;
};
