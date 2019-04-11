addEventListener('fetch', event => {
	event.respondWith(fetchAndApply(event.request))
})

async function fetchAndApply(request) {
	let hues = await HUES.get('colors')
	return new Response(hues)
}