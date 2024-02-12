import { AuthApiError } from "@supabase/supabase-js";
import { fail, redirect } from "@sveltejs/kit";

export async function load({ params, locals }) {
    const id = params.id;
    const supabase = locals.supabase;

    // const profileQuery = await supabase
    // .from('profiles')
    // .select(`*, cities (state, city)`)
    // .eq('id', id)
    // .single()

    // const listingsQuery = await supabase
    // .from('listings')
    // .select('id, game_cover, listing_platform_family, listing_platform, listing_price')
    // .eq('user_id', id)

    const citiesQuery = await supabase.from("cities").select();

    return {
        // profile: profileQuery.data,
        // listings: listingsQuery.data,
        cities: citiesQuery.data ?? [],
    };
}

export const actions = {
	logout: async (event) => {
		const { request, url, locals: { supabase } } = event;

        const { error } = await supabase.auth.signOut();

        if (error) {
            return fail(500, {
                message: "Something went wrong logging you out.",
            })
        }
    
        throw redirect(303, "/");
    }
}
