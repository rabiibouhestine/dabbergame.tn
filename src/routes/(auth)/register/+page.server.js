import { supabase } from "$lib/utils/supabaseClient";

export const actions = {
	default: async ({ request }) => {
		
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
