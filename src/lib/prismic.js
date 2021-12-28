import * as prismic from '@prismicio/client';

export function createClient(fetch) {
	const repo = import.meta.env.VITE_PRISMIC_REPO;
	const accessToken = import.meta.env.PRISMIC_ACCESS_TOKEN;
	const endpoint = prismic.getEndpoint(repo);

	const routes = [{ type: 'photo-tile', path: '/photos' }];
	const clientOptions = {
		fetch,
		accessToken,
		routes
	};

	return prismic.createClient(endpoint, clientOptions);
}
