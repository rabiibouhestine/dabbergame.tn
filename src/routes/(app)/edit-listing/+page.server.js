import { AuthApiError } from "@supabase/supabase-js";
import { fail, redirect } from "@sveltejs/kit";
import { IGDB_CLIENT_ID, IGDB_TOKEN } from '$env/static/private';

export const actions = {
	default: async (event) => {
		const { request, url, locals: { supabase } } = event;

        // Get Listing Form Data
        const formData = await request.formData();
        const game_id = formData.get('game_id');
        const platform = JSON.parse(formData.get('platform'));
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

        const userCityQuery = await supabase
        .from('profiles')
        .select('city_id')
        .eq('id', session.user.id)
        .limit(1)
        .single()

        // Save Listing in the database
        const { data, error } = await supabase
        .from('listings')
        .insert({
            user_id: session.user.id,
            profile_id: session.user.id,
            city_id: userCityQuery.data.city_id,
            game_id: game_id,
            game_cover: game.cover.image_id,
            game_name: game.name,
            game_release_date: new Date(game.first_release_date * 1000).toISOString(),
            game_description: game.summary,
            game_genres: game.genres,
            game_platforms: game.platforms,
            game_rating: game.aggregated_rating,
            game_website: game.websites?.find((site) => site.category === 1)?.url || "",
            game_wikipedia: game.websites?.find((site) => site.category === 3)?.url || "",
            game_youtube: game.websites?.find((site) => site.category === 9)?.url || "",
            game_steam: game.websites?.find((site) => site.category === 13)?.url || "",
            game_epicgames: game.websites?.find((site) => site.category === 16)?.url || "",
            listing_platform: platform.name,
            listing_platform_family: platform.platform_family?.name,
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
