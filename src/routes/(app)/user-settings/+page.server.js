import { AuthApiError } from "@supabase/supabase-js";
import { fail, redirect } from "@sveltejs/kit";

export async function load(event) {
    const supabase = event.locals.supabase;

    const { data } = await supabase.from("cities").select();
    return {
      cities: data ?? [],
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
