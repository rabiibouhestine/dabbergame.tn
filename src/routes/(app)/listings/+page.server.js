
export async function load({ url, locals }) {

    const maxPrice = Number(url.searchParams.get('maxPrice')) || 300;
    const state = url.searchParams.get('state') || 'All States';
    const city = url.searchParams.get('city') || 'All Cities';

    const page = Number(url.searchParams.get('page')) || 1;
    const limit = 6;
    const skip = limit * (page - 1);

    const supabase = locals.supabase;

    const citiesQuery = await supabase.from("cities").select();

    let listingsViewQuery = supabase
    .from('listings_full')
    .select('*', { count: 'exact' })

    if (state && state !== 'All States') {
        listingsViewQuery = listingsViewQuery.eq('state', state);
    }

    if (city && city !== 'All Cities') {
        listingsViewQuery = listingsViewQuery.eq('city', city);
    }

    listingsViewQuery = listingsViewQuery
    .lte('listing_price', maxPrice)
    .order('listing_price', { ascending: false })
    .range(skip, skip + limit - 1);

    listingsViewQuery = await listingsViewQuery;

    return {
        cities: citiesQuery.data,
        totalPages: Math.ceil(listingsViewQuery.count / limit),
        listings: listingsViewQuery.data
    };
}
