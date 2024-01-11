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
        const responseData = await response.json();
        const game = responseData[0];

        // Get Session
        const session = await event.locals.getSession();

        // Save Listing in the database
        const { data, error } = await supabase
        .from('listings')
        .insert({
            user_id: session.user.id,
            profile_id: session.user.id,
            game_id: game_id,
            game_cover: game.cover.image_id,
            game_name: game.name,
            game_description: game.summary,
            game_genres: game.genres,
            game_platforms: game.platforms,
            game_rating: game.aggregated_rating,
            // game_website text,
            // game_wikipedia text,
            // game_youtube text,
            // game_steam text,
            // game_epicgames text,
            listing_platform: platform,
            listing_condition: condition,
            listing_delivery: delivery,
            listing_price: price,
            listing_trade: trade,
            listing_store_link: store_link,
        })
        .select()

        throw redirect(303, "/listing/" + data[0].id);
	}
};
