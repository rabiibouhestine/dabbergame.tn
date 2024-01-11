import { AuthApiError } from "@supabase/supabase-js";
import { fail, redirect } from "@sveltejs/kit";

export const actions = {
	default: async (event) => {
		const { request, url, locals: { supabase } } = event;

        const formData = await request.formData();
        const game_id = formData.get('game_id');
        const platform = formData.get('platform');
        const condition = formData.get('condition');
        const delivery = formData.get('delivery');
        const price = formData.get('price');
        const store_link = formData.get('store_link');
        const trade = formData.get('trade');


        console.log(formData.get('trade'));

	}
};
