export const prerender = true;

export async function load({ fetch }) {
	const res = await fetch('/data/works.json')
	const works = await res.json()

	return { works }
}