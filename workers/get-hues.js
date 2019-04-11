addEventListener('fetch', event => {
	event.respondWith(fetchAndApply(event.request))
})

async function fetchAndApply(request) {
	let hues = await HUES.get('usc-hack')
	return new Response(hues)
}