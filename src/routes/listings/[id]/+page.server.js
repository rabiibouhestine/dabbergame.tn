
export async function load({ params }) {
    const id = params.id;

	// URL of the API endpoint
	const apiUrl = "https://api.igdb.com/v4/games";

	// Headers to be set in the request
	const headers = {
		'Accept': 'application/json',
		'Authorization': 'Bearer x0ps462fbuojuod51mzufgt6tjs9ne',
		'Client-ID': 'd65avpcxntyv4ok3mj1ud2cf3ufy02'
	};

	// Body
	const body = "fields id,cover.image_id,name,first_release_date,summary,genres.name,platforms.name,rating,aggregated_rating,websites.category,websites.url;\nwhere id = " + id + ";"
	
	const response = await fetch(apiUrl, {
		method: 'POST',
		headers: headers,
		body: body
	})

	const data = await response.json();
		
	return {
		game: data[0]
	};
}
