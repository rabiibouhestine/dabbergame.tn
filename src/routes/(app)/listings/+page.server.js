
export async function load({ url, locals }) {

    const maxPrice = Number(url.searchParams.get('maxPrice')) || 300;
    const city = url.searchParams.get('city') || 'All Cities';

    const page = Number(url.searchParams.get('page')) || 1;
    const limit = 6;
    const skip = limit * (page - 1);

    const supabase = locals.supabase;

    const citiesQuery = await supabase.from("cities").select();

    let listingsQuery = supabase
    .from('listings')
    .select('id, game_cover, listing_platform_family, listing_platform, listing_price, profiles (id, first_name, last_name, cities (id, state, city))', { count: 'exact' })
  
    if (city && city !== 'All Cities') {
        const cityId = citiesQuery.data.filter((obj) => obj.city === city)[0].id;
        listingsQuery = listingsQuery.eq('city_id', cityId);
    }

    listingsQuery = listingsQuery
    .eq('profiles.cities.id', 18)
    .lt('listing_price', maxPrice)
    .order('listing_price', { ascending: false })
    .range(skip, skip + limit - 1);

    listingsQuery = await listingsQuery;

    let listingsViewQuery = await supabase
    .from('listings_full')
    .select('*', { count: 'exact' })
    .lt('listing_price', maxPrice)
    .order('listing_price', { ascending: false })
    .range(skip, skip + limit - 1);

    return {
        cities: citiesQuery.data,
        totalPages: Math.ceil(listingsViewQuery.count / limit),
        listings: listingsViewQuery.data
    };
}
