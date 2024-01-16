
export async function load({ locals }) {
    const supabase = locals.supabase;

    const listingsQuery = await supabase
    .from('listings')
    .select(`id, game_cover, listing_platform_family, listing_platform, listing_price, profiles (id, first_name, last_name, cities (id, state, city))`)
    .limit(18)

    const storesQuery = await supabase.rpc('featured_stores');

    return {
        listings: listingsQuery.data,
        featured: storesQuery.data
    };
}
