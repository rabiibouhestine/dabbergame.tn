import { AuthApiError } from "@supabase/supabase-js";
import { fail, redirect } from "@sveltejs/kit";

export async function load(event) {
    const { request, url, locals: { supabase } } = event;

    const { data } = await supabase.from("cities").select();
    return {
      cities: data ?? [],
    };
}

export const actions = {
	default: async (event) => {
		const { request, url, locals: { supabase } } = event;

        const formData = await request.formData();
        const email = formData.get('email');
        const password = formData.get('password');
        const first_name = formData.get('first_name');
        const last_name = formData.get('last_name');
        const city_id = formData.get('city_id');
        const phone = formData.get('phone');

        if (!email) {
            return fail(400, {
                email,
                error: "Missing Email"
            });
        }

        const { data, signupError } = await supabase.auth.signUp(
            {
                email: email,
                password: password,
                options: {
                    emailRedirectTo: 'http://localhost:5173/'
                }
            }
        )

        if (!signupError) {
            const { insertProfileError } = await supabase
            .from('profiles')
            .insert({
                id: data.user.id,
                first_name: first_name,
                last_name: last_name,
                city_id: city_id,
                phone: phone
            })
        }

	}
};
