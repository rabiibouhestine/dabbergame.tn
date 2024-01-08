import { json } from '@sveltejs/kit';
import { IGDB_CLIENT_ID, IGDB_TOKEN } from '$env/static/private';

export async function GET({ url }) {

    let search = url.searchParams.get('search');

    // URL of the API endpoint
    const apiUrl = "https://api.igdb.com/v4/games?search=" + search + "&fields=id,cover.image_id,name,first_release_date,platforms.name";

    // Headers to be set in the request
    const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + IGDB_TOKEN,
        'Client-ID': IGDB_CLIENT_ID
    };

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: headers
    })

    const data = await response.json();

	return json(data);
}
