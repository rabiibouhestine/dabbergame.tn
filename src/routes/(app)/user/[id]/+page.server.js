
export async function load({ params, locals }) {
    const id = params.id;
    const supabase = locals.supabase;

    const profileQuery = await supabase
    .from('profiles')
    .select()
    .eq('id', id)

    const listingsQuery = await supabase
    .from('listings')
    .select()
    .eq('user_id', id)

    return {
        profile: profileQuery.data[0],
        listings: listingsQuery.data
    };
}
