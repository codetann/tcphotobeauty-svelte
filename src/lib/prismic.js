import * as prismic from '@prismicio/client';

const repo = import.meta.env.VITE_PRISMIC_REPO;
const accessToken = import.meta.env.PRISMIC_ACCESS_TOKEN;
const endpoint = prismic.getEndpoint(repo);

const routes = [
	{
		type: 'photo-tile',
		path: '/photo'
	}
];

const createClient = (fetch) => {
	const clientOptions = {
		fetch,
		accessToken,
		routes
	};
	const client = prismic.createClient(endpoint, clientOptions);
	return client;
};

export { createClient };
