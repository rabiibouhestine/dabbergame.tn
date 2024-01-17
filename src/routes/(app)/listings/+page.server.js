
export async function load({ url, locals }) {

    const maxPrice = Number(url.searchParams.get('maxPrice')) || 300;
    const cityId = Number(url.searchParams.get('cityId'));

    const page = Number(url.searchParams.get('page')) || 1;
    const limit = 6;
    const skip = limit * (page - 1);

    const supabase = locals.supabase;

    const citiesQuery = await supabase.from("cities").select();

    let listingsQuery = supabase
    .from('listings')
    .select('id, game_cover, listing_platform_family, listing_platform, listing_price, profiles (id, first_name, last_name, cities (id, state, city))', { count: 'exact' })
  
    if (cityId && cityId !== '0') {
        listingsQuery = listingsQuery.eq('city_id', cityId);
    }

    listingsQuery = listingsQuery
    .lt('listing_price', maxPrice)
    .order('listing_price', { ascending: false })
    .range(skip, skip + limit - 1);
  
    listingsQuery = await listingsQuery;

    return {
        cities: citiesQuery.data,
        totalPages: Math.ceil(listingsQuery.count / limit),
        listings: listingsQuery.data
    };
}
