const color = require('color')

addEventListener("fetch", event => {
  event.respondWith(fetchAndApply(event.request));
});

async function fetchAndApply(request) {
	let formData = await request.formData()
	let parsedColor
	try {
		parsedColor = color(formData.get('color'))
	} catch (err) {
		return new Response(err.message)
	}
	let colors = await HUES.get('colors')
	colors = JSON.parse(colors) || []
	colors.push(parsedColor.color)
	if(colors.length > 28){
		colors = colors.slice(colors.length - 27 , 28)
	}
	await HUES.put('colors', JSON.stringify(colors))
  return new Response(JSON.stringify(colors))
}
