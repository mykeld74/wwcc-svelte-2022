import client from '$lib/client';
export const prerender = true;

export async function load() {
	const query = `*[_type == "currentseries"] {
      linkid			
		}`;
	const currentSeriesID = await client.fetch(query);
	return { currentSeriesID };
}
