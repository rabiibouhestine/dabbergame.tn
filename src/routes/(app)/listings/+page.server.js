
export async function load({ locals }) {
    const supabase = locals.supabase;

    const listingsQuery = await supabase
    .from('listings')
    .select(`*, profiles (id, first_name, last_name, cities (state, city))`)

    const citiesQuery = await supabase.from("cities").select();

    return {
        listings: listingsQuery.data,
        cities: citiesQuery.data
    };
}
