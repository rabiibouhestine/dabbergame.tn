
export async function load({ params, locals }) {
    const id = params.id;
    const supabase = locals.supabase;

    const listingQuery = await supabase
    .from('listings')
    .select(`*, profiles (id, first_name, last_name, cities (id, state, city))`)
    .eq('id', id)
    .single()

    return {
        listing: listingQuery.data
    };
}
