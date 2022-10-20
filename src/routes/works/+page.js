export async function load ({ fetch }) {
	const res = await fetch('/works/works.json')
	const works = await res.json()

	return { works }
}