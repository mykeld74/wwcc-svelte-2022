import client from '$lib/client';

export async function load() {
	const query = `*[_type == "currentseriesimage"] {
      seriesImg
		}`;
	const currentSeriesImg = await client.fetch(query);
	return { currentSeriesImg };
}
