<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import GameDetails from '$lib/components/GameDetails.svelte';
	import ListingBanner from '$lib/components/ListingBanner.svelte';

	import SortIcon from '~icons/mdi/sort';
	import ListingsIcon from '~icons/mdi/tag-multiple';
	import NextPAgeIcon from '~icons/mdi/chevron-right';
	import PreviousPageIcon from '~icons/mdi/chevron-left';
	import LastPageIcon from '~icons/mdi/chevron-triple-right';
	import FirstPageIcon from '~icons/mdi/chevron-triple-left';

	export let data;

	const uniqueStates = [...new Set(data.cities.map((city) => city.state))];
	const PRICE_RANGE_MAX = 300;
	const sortOptions = [
		{
			id: '1',
			label: 'Sorted by Descending Date'
		},
		{
			id: '2',
			label: 'Sorted by Ascending Date'
		},
		{
			id: '3',
			label: 'Sorted by Descending Price'
		},
		{
			id: '4',
			label: 'Sorted by Ascending Price'
		}
	];

	let selectedSellers;
	let selectedSort;

	$: currentPage = Number($page.url.searchParams.get('page')) || 1;
	$: maxPrice = Number($page.url.searchParams.get('maxPrice')) || PRICE_RANGE_MAX;
	$: state = $page.url.searchParams.get('state') || 'All States';
	$: city = $page.url.searchParams.get('city') || 'All Cities';
	$: platform = $page.url.searchParams.get('platform') || 'All Platforms';
	$: sellers = $page.url.searchParams.get('sellers') || 'All Sellers';
	$: sort = $page.url.searchParams.get('sort') || '1';

	$: selectedMaxPrice = maxPrice;
	$: selectedState = state;
	$: selectedCity = city;
	$: selectedPlatform = platform;
	$: selectedSellers = sellers;
	$: selectedSort = sort;

	$: paramString = `maxPrice=${selectedMaxPrice}&state=${selectedState}&city=${selectedCity}&platform=${selectedPlatform}&sellers=${selectedSellers}&sort=${selectedSort}`;

	let filtersModal;

	function applyFilters() {
		filtersModal.close();
		goto(`/game/${data.game.id}?${paramString}`);
	}

	function getSortLabel(id) {
		return sortOptions.filter((obj) => obj.id === id)[0].label;
	}
</script>

<div class="flex flex-col gap-y-8">
	<div class="rounded-container flex flex-col md:flex-row items-center md:items-start gap-6">
		<img
			src="https://images.igdb.com/igdb/image/upload/t_cover_big/{data.game.cover.image_id}.jpg"
			alt="game cover"
			class="rounded-xl w-60 h-full"
		/>
		<div class="flex-grow flex flex-col gap-6">
			<h2 class="text-4xl font-bold">
				{data.game.name}
			</h2>
			<GameDetails
				summary={data.game.summary}
				release_date={new Date(data.game.first_release_date * 1000).toISOString().split('T')[0]}
				genres={data.game.genres}
				platforms={data.game.platforms}
				website={data.game.websites?.find((site) => site.category === 1)?.url}
				wikipedia={data.game.websites?.find((site) => site.category === 3)?.url}
				youtube={data.game.websites?.find((site) => site.category === 9)?.url}
				steam={data.game.websites?.find((site) => site.category === 13)?.url}
				epicdata.games={data.game.websites?.find((site) => site.category === 16)?.url}
			/>
		</div>
	</div>
	<div
		class="w-full flex gap-4 flex-col sm:flex-row justify-between sm:items-end pb-3 border-b border-neutral"
	>
		<div>
			<h2 class="flex gap-2 text-4xl font-bold"><ListingsIcon />Listings</h2>
			<p class="mt-2 text-neutral-content text-xs sm:text-sm">
				{state + ', ' + city + ', ' + platform + ', ' + sellers + ', ' + getSortLabel(sort)}
			</p>
		</div>
		<button
			class="btn btn-outline rounded-full"
			on:click={() => {
				'filtersModal.showModal();';
			}}
		>
			<SortIcon />
			Sort & Filter
		</button>
	</div>
	<div class="flex flex-col justify-center gap-4">
		{#each data.listings as listing (listing.id)}
			<ListingBanner
				id={listing.id}
				platform={listing.listing_platform}
				platformFamily={listing.listing_platform_family}
				price={listing.listing_price}
				firstName={listing.first_name}
				lastName={listing.last_name}
				state={listing.state}
				city={listing.city}
				isStore={listing.is_store}
			/>
		{/each}
	</div>
	<div class="join flex mt-8">
		<a href="/game/{data.game.id}?{paramString}&page=1" class="join-item btn btn-neutral w-16">
			<FirstPageIcon />
		</a>
		<a
			href="/game/{data.game.id}?{paramString}&page={currentPage - 1}"
			class="join-item btn btn-neutral w-16"
			class:btn-disabled={currentPage <= 1}
		>
			<PreviousPageIcon />
		</a>
		<div
			class="flex flex-1 justify-center items-center text-sm text-neutral-content bg-base-100 rounded-none"
		>
			Page {currentPage + ' / ' + data.totalPages}
		</div>
		<a
			href="/game/{data.game.id}?{paramString}&page={currentPage + 1}"
			class="join-item btn btn-neutral w-16"
			class:btn-disabled={currentPage >= data.totalPages}
		>
			<NextPAgeIcon />
		</a>
		<a
			href="/game/{data.game.id}?{paramString}&page={data.totalPages}"
			class="join-item btn btn-neutral w-16"
		>
			<LastPageIcon />
		</a>
	</div>
</div>
