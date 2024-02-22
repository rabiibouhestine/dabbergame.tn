import { fail, redirect } from "@sveltejs/kit";

export const actions = {
    delete: async ({params, locals}) => {
        const session = await locals.getSession();
        const supabase = locals.supabase;
        const listingID = params.id;

        const deleteListingQuery = await supabase
        .from('listings')
        .delete()
        .eq('id', listingID)

        if (deleteListingQuery.error) {
            return fail(500, {
                message: "Server error. Try again later.",
            })
        }

        throw redirect(303, "/user/" + session.user.id);
    }
};

export async function load({ params, locals }) {
    const id = params.id;
    const supabase = locals.supabase;

    const listingQuery = await supabase
    .from('listings')
    .select(`*, profiles (id, first_name, last_name, is_store, phone, cities (id, state, city))`)
    .eq('id', id)
    .single()

    return {
        listing: listingQuery.data
    };
}
