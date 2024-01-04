
export async function load({ params }) {
    const id = params.id;

	// URL of the API endpoint
	const apiUrl = "https://api.igdb.com/v4/multiquery";

	// Headers to be set in the request
	const headers = {
		'Accept': 'application/json',
		'Authorization': 'Bearer x0ps462fbuojuod51mzufgt6tjs9ne',
		'Client-ID': 'd65avpcxntyv4ok3mj1ud2cf3ufy02'
	};

	// Queries
	const rawQueries = {
		games: `
		  query games "Game Info" {
			fields id, cover, name, first_release_date, summary, genres, platforms, rating, aggregated_rating, websites;
			where id = ${id};
		  };
		`,
		covers: `
		  query covers "Game Cover" {
			fields image_id;
			where game = ${id};
		  };
		`,
		websites: `
		  query websites "Game Websites" {
			fields category, url;
			where game = ${id};
		  };
		`,
	};
	
	const response = await fetch(apiUrl, {
		method: 'POST',
		headers: headers,
		body: Object.values(rawQueries).join('\n\n')
	})

	const data = await response.json();
		
	return {
		game: data
	};
}
