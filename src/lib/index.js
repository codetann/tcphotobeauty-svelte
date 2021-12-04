import * as prismic from '@prismicio/client';

const config = {
	repo: process.env.PRISMIC_REPO,
	accessToken: process.env.PRISMIC_ACCESS_TOKEN,
	endpoint: prismic.getEndpoint(process.env.PRISMIC_ENDPOINT)
};

const routes = [
	{
		type: 'photo-tile',
		path: '/photo'
	}
];

const createClient = (fetch) => {
	const clientOptions = {
		fetch,
		accessToken: config.accessToken,
		routes
	};
	const client = prismic.createClient(config.endpoint, clientOptions);
	return client;
};

export { createClient };
