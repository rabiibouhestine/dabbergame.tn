
export async function load({ url, locals }) {

    const page = url.searchParams.get('page') || 1;
    const limit = 6;
    const skip = limit * (page - 1);

    const supabase = locals.supabase;

    const listingsQuery = await supabase
    .from('listings')
    .select('id, game_cover, listing_platform_family, listing_platform, listing_price, profiles (id, first_name, last_name, cities (state, city))', { count: 'exact' })
    .range(skip, skip + limit - 1)

    const citiesQuery = await supabase.from("cities").select();

    return {
        count: listingsQuery.count,
        listings: listingsQuery.data,
        cities: citiesQuery.data
    };
}
