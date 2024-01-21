
export async function load({ locals }) {
    const supabase = locals.supabase;

    const storesQuery = await supabase
    .from('profiles')
    .select('id, first_name, last_name, cities (state, city)')
    .eq('is_store', true);

    return {
        stores: storesQuery.data
    };
}
