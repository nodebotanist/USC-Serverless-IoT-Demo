addEventListener("fetch", event => {
  event.respondWith(fetchAndApply(event.request));
});

async function fetchAndApply(request) {
	let formData = await request.formData()
  return new Response(JSON.stringify(formData.get('color')));
}
