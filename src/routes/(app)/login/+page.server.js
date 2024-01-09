import { AuthApiError } from "@supabase/supabase-js";
import { fail } from "@sveltejs/kit";

export const actions = {
  login: async (event) => {
    const { request, url, locals: { supabase } } = event;
		
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
      if (error instanceof AuthApiError && error.status === 400) {
				return fail(400, {
					error: "Invalid credentials",
				})
			}
			return fail(500, {
				message: "Server error. Try again later.",
			})
    }
  }
};
