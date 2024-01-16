
export async function load({ params, locals }) {
    const id = params.id;
    const supabase = locals.supabase;

    const profileQuery = await supabase
    .from('profiles')
    .select(`*, cities (state, city)`)
    .eq('id', id)

    const listingsQuery = await supabase
    .from('listings')
    .select('id, game_cover, listing_platform_family, listing_platform, listing_price')
    .eq('user_id', id)

    return {
        profile: profileQuery.data[0],
        listings: listingsQuery.data
    };
}
