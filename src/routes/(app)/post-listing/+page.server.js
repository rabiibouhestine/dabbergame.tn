import { AuthApiError } from "@supabase/supabase-js";
import { fail, redirect } from "@sveltejs/kit";
import { IGDB_CLIENT_ID, IGDB_TOKEN } from '$env/static/private';

export const actions = {
	default: async (event) => {
		const { request, url, locals: { supabase } } = event;

        // Get Listing Form Data
        const formData = await request.formData();
        const game_id = formData.get('game_id');
        const platform = formData.get('platform');
        const condition = formData.get('condition');
        const delivery = formData.get('delivery');
        const price = formData.get('price');
        const store_link = formData.get('store_link');
        const trade = formData.get('trade');

        // Get Game Info from IGDB API
        const apiUrl = "https://api.igdb.com/v4/games";
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + IGDB_TOKEN,
            'Client-ID': IGDB_CLIENT_ID
        };
        const body = "fields id,cover.image_id,name,first_release_date,summary,genres.name,platforms.name,aggregated_rating,websites.category,websites.url;\nwhere id = " + game_id + ";"
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: body
        })
        const data = await response.json();
        const game = data[0];

        // Get Session
        const session = await event.locals.getSession();

        // Save Listing in the database
        console.log(session);

	}
};
