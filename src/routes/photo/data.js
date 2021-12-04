// const data = [
// 	{
// 		id: 'YaxU8BMAADIA0Xg3',
// 		uid: null,
// 		url: null,
// 		type: 'package',
// 		href: 'https://tcphotobeauty.cdn.prismic.io/api/v2/documents/search?ref=YaxU9RMAAC4A0XhQ&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YaxU8BMAADIA0Xg3%22%29+%5D%5D',
// 		tags: [],
// 		first_publication_date: '2021-12-05T05:58:13+0000',
// 		last_publication_date: '2021-12-05T05:58:13+0000',
// 		slugs: ['package-2'],
// 		linked_documents: [],
// 		lang: 'en-us',
// 		alternate_languages: [],
// 		data: {
// 			'package-name': [
// 				{
// 					type: 'heading1',
// 					text: 'Package 2',
// 					spans: []
// 				}
// 			],
// 			'package-id': 1,
// 			'package-price': 1500,
// 			'package-services': [
// 				{
// 					'package-service': [
// 						{
// 							type: 'paragraph',
// 							text: 'Bridals',
// 							spans: []
// 						}
// 					]
// 				},
// 				{
// 					'package-service': [
// 						{
// 							type: 'paragraph',
// 							text: 'Engagements',
// 							spans: []
// 						}
// 					]
// 				},
// 				{
// 					'package-service': [
// 						{
// 							type: 'paragraph',
// 							text: '8 Hour Coverage',
// 							spans: []
// 						}
// 					]
// 				}
// 			]
// 		}
// 	},
// 	{
// 		id: 'YaxUtRMAAC8A0Xcr',
// 		uid: null,
// 		url: null,
// 		type: 'package',
// 		href: 'https://tcphotobeauty.cdn.prismic.io/api/v2/documents/search?ref=YaxU9RMAAC4A0XhQ&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YaxUtRMAAC8A0Xcr%22%29+%5D%5D',
// 		tags: [],
// 		first_publication_date: '2021-12-05T05:57:21+0000',
// 		last_publication_date: '2021-12-05T05:57:21+0000',
// 		slugs: ['package-1'],
// 		linked_documents: [],
// 		lang: 'en-us',
// 		alternate_languages: [],
// 		data: {
// 			'package-name': [
// 				{
// 					type: 'heading1',
// 					text: 'Package 1',
// 					spans: []
// 				}
// 			],
// 			'package-id': 1,
// 			'package-price': 1200,
// 			'package-services': [
// 				{
// 					'package-service': [
// 						{
// 							type: 'paragraph',
// 							text: 'Bridals',
// 							spans: []
// 						}
// 					]
// 				},
// 				{
// 					'package-service': [
// 						{
// 							type: 'paragraph',
// 							text: 'Engagements',
// 							spans: []
// 						}
// 					]
// 				},
// 				{
// 					'package-service': [
// 						{
// 							type: 'paragraph',
// 							text: '4 Hour Coverage',
// 							spans: []
// 						}
// 					]
// 				}
// 			]
// 		}
// 	}
// ];

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
