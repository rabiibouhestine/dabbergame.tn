
export async function load({ locals }) {
    const supabase = locals.supabase;

    const listingsQuery = await supabase
    .from('listings')
    .select(`*, profiles (id, first_name, last_name, cities (id, state, city))`)
    .limit(18)

    return {
        listings: listingsQuery.data
    };
}
