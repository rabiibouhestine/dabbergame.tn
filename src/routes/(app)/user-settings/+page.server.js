import { AuthApiError } from "@supabase/supabase-js";
import { fail, redirect } from "@sveltejs/kit";

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
