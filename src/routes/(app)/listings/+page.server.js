
export async function load({ url, locals }) {

    const page = url.searchParams.get('page') || 1;
    const limit = 6;
    const skip = limit * (page - 1);

    const supabase = locals.supabase;
    const listingsQuery = await supabase
    .from('listings')
    .select(`*, profiles (id, first_name, last_name, cities (state, city))`)
    .range(skip, skip + limit - 1)

    const citiesQuery = await supabase.from("cities").select();

    return {
        listings: listingsQuery.data,
        cities: citiesQuery.data
    };
}
