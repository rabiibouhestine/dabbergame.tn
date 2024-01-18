
export async function load({ url, locals }) {

    const maxPrice = Number(url.searchParams.get('maxPrice')) || 300;
    const state = url.searchParams.get('state') || 'All States';
    const city = url.searchParams.get('city') || 'All Cities';
    const platform = url.searchParams.get('platform') || 'All Platforms';
    const sellers = url.searchParams.get('sellers') || 'All Sellers';
    const sort = url.searchParams.get('sort') || '1';

    const page = Number(url.searchParams.get('page')) || 1;
    const limit = 6;
    const skip = limit * (page - 1);

    const supabase = locals.supabase;

    const citiesQuery = await supabase.from("cities").select();

    let listingsViewQuery = supabase
    .from('listings_full')
    .select('*', { count: 'exact' })
    .lte('listing_price', maxPrice)

    if (state && state !== 'All States') {
        listingsViewQuery = listingsViewQuery.eq('state', state);
    }

    if (city && city !== 'All Cities') {
        listingsViewQuery = listingsViewQuery.eq('city', city);
    }

    if (platform && platform !== 'All Platforms') {
        listingsViewQuery = listingsViewQuery.eq('listing_platform', platform);
    }

    if (sellers && sellers !== 'All Sellers') {
        listingsViewQuery = listingsViewQuery.eq('is_store', sellers === 'Stores');
    }

    switch (sort) {
        case "1":
            listingsViewQuery = listingsViewQuery.order('listing_price', { ascending: false });
            break;
        case "2":
            listingsViewQuery = listingsViewQuery.order('listing_price', { ascending: true });
            break;
        case "3":
            listingsViewQuery = listingsViewQuery.order('listing_price', { ascending: false });
            break;
        case "4":
            listingsViewQuery = listingsViewQuery.order('listing_price', { ascending: true });
            break;
        default:
            break;
    }

    listingsViewQuery = listingsViewQuery.range(skip, skip + limit - 1);

    listingsViewQuery = await listingsViewQuery;

    return {
        cities: citiesQuery.data,
        totalPages: Math.ceil(listingsViewQuery.count / limit),
        listings: listingsViewQuery.data
    };
}
