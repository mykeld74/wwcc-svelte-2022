import client from '$lib/client';
export const prerender = true;

export async function load() {
	const query = `*[_type == "event"] | order(order desc){
      _id,
      title,
      date,
      time,
			location,
      body,
      order
		}`;

	console.log(Events);
	return { Events };
}
