import { json } from '@sveltejs/kit';

export async function GET({ url }) {

    let search = url.searchParams.get('search');

    // URL of the API endpoint
    const apiUrl = "https://api.igdb.com/v4/games?search=" + search + "&fields=id,slug,name,first_release_date";

    // Headers to be set in the request
    const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer x0ps462fbuojuod51mzufgt6tjs9ne',
        'Client-ID': 'd65avpcxntyv4ok3mj1ud2cf3ufy02'
    };

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: headers
    })

    const data = await response.json();

	return json(data);
}
