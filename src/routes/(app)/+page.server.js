
export async function load({ locals }) {
    const supabase = locals.supabase;

    const listingsQuery = await supabase
    .from('listings')
    .select(`*, profiles (id, first_name, last_name, cities (id, state, city))`)
    .limit(18)

    const popularQuery = await supabase.rpc('popular_games');

    const storesQuery = await supabase.rpc('featured_stores');

    return {
        listings: listingsQuery.data,
        popular: popularQuery.data,
        featured: storesQuery.data
    };
}
