import { supabase } from "$lib/utils/supabaseClient";

export const actions = {
	default: async ({ request }) => {
		
        const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        const { data: { user } } = await supabase.auth.getUser();

        console.log(data.user);
	}
};
