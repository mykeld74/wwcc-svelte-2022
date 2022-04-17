import sanityClient from '@sanity/client';

const client = sanityClient({
	projectId: 'nxf8w2wg',
	dataset: 'production',
	apiVersion: '2021-03-25',
	useCdn: false
});

export default client;
