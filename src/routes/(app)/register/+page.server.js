import { AuthApiError } from "@supabase/supabase-js";
import { fail, redirect } from "@sveltejs/kit";

export const actions = {
	default: async (event) => {
		const { request, url, locals: { supabase } } = event;

        const formData = await request.formData();
            const email = formData.get('email');
            const password = formData.get('password');

        const { data, error } = await supabase.auth.signUp(
            {
                email: email,
                password: password,
                options: {
                    emailRedirectTo: 'http://localhost:5173/'
                }
            }
        )
  
	}
};
