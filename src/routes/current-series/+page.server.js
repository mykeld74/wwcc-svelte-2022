import client from '$lib/client';
export const prerender = true;

export async function load() {
	const query = `*[_type == "currentseries"][0..5] | order(_createdAt desc){
      linkid,
			title,
			description,		
			createdAt,	
		}`;
	const currentSeriesID = await client.fetch(query);
	return { currentSeriesID };
}
