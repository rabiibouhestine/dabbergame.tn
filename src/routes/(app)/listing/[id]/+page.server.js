
export async function load({ params, locals }) {
    const id = params.id;
    const supabase = locals.supabase;

    const listingQuery = await supabase
    .from('listings')
    .select()
    .eq('id', id)

    return {
        listing: listingQuery.data[0]
    };
}
