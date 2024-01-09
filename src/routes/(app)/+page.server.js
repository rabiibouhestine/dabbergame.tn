
export const actions = {
	register: async (event) => {
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
  
	},
  login: async (event) => {
    const { request, url, locals: { supabase } } = event;
		
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
