
export async function load({ locals }) {
    const supabase = locals.supabase;

    const listingsQuery = await supabase
    .from('listings_full')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(18);

    const storesQuery = await supabase.rpc('featured_stores');

    return {
        listings: listingsQuery.data,
        featured: storesQuery.data
    };
}
