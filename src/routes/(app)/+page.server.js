import { supabase } from "$lib/utils/supabaseClient";

export async function load() {
  const { data } = await supabase.from("countries").select();
  return {
    countries: data ?? [],
  };
}

export const actions = {
	register: async ({ request }) => {
		
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
  
	},
  login: async ({ request }) => {
		
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
