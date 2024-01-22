<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import ListingCard from '$lib/components/ListingCard.svelte';

	import ListingsIcon from '~icons/mdi/tag-multiple';
	import NextPAgeIcon from '~icons/mdi/chevron-right';
	import PreviousPageIcon from '~icons/mdi/chevron-left';
	import LastPageIcon from '~icons/mdi/chevron-triple-right';
	import FirstPageIcon from '~icons/mdi/chevron-triple-left';
	import NoListingsIcon from '~icons/mdi/tag-off';
	import AddListingIcon from '~icons/mdi/tag-plus';
	import MarkerIcon from '~icons/mdi/map-marker-radius';
	import GamepadIcon from '~icons/mdi/gamepad-variant';
	import UsersIcon from '~icons/mdi/account-group';
	import SortIcon from '~icons/mdi/sort';
	import FilterIcon from '~icons/mdi/filter-cog';

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

	$: gameId = $page.url.searchParams.get('gameId') || '';
	$: gameName = $page.url.searchParams.get('gameName') || '';

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

	$: paramString = `gameId=${gameId}&gameName=${gameName}&maxPrice=${selectedMaxPrice}&state=${selectedState}&city=${selectedCity}&platform=${selectedPlatform}&sellers=${selectedSellers}&sort=${selectedSort}`;

	let filtersModal;

	function applyFilters() {
		filtersModal.close();
		goto(`/listings?${paramString}`);
	}

	function getSortLabel(id) {
		return sortOptions.filter((obj) => obj.id === id)[0].label;
	}
</script>

<div class="flex flex-col gap-y-8">
	<div
		class="w-full flex gap-4 flex-col sm:flex-row justify-between sm:items-end pb-3 border-b border-neutral"
	>
		<div>
			<h2 class="flex gap-2 text-4xl font-bold mb-3" class:text-secondary={gameName}>
				<ListingsIcon />{gameName || 'All Listings'}
			</h2>
			<div class="flex flex-wrap gap-4 text-sm">
				<p
					class="flex gap-1 items-center"
					class:font-bold={state !== 'All States'}
					class:text-secondary={state !== 'All States'}
				>
					<MarkerIcon />
					{state}, {city}
				</p>
				<p
					class="flex gap-1 items-center"
					class:font-bold={platform !== 'All Platforms'}
					class:text-secondary={platform !== 'All Platforms'}
				>
					<GamepadIcon />
					{platform}
				</p>
				<p
					class="flex gap-1 items-center"
					class:font-bold={sellers !== 'All Sellers'}
					class:text-secondary={sellers !== 'All Sellers'}
				>
					<UsersIcon />
					{sellers}
				</p>
				<p
					class="flex gap-1 items-center"
					class:font-bold={sort !== '1'}
					class:text-secondary={sort !== '1'}
				>
					<SortIcon />
					{getSortLabel(sort)}
				</p>
			</div>
		</div>
		<button
			class="btn btn-outline rounded-full"
			on:click={() => {
				filtersModal.showModal();
			}}
		>
			<FilterIcon />
			Sort & Filter
		</button>
	</div>
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
		{#each data.listings as listing (listing.id)}
			<ListingCard
				id={listing.id}
				platform={listing.listing_platform}
				platformFamily={listing.listing_platform_family}
				coverImageId={listing.game_cover}
				price={listing.listing_price}
				userId={listing.profile_id}
				userFirstName={listing.first_name}
				userLastName={listing.last_name}
				userState={listing.state}
				userCity={listing.city}
				isStore={listing.is_store}
			/>
		{/each}
	</div>
	{#if data.totalPages < 1}
		<div class="flex flex-col gap-6 justify-center items-center">
			<NoListingsIcon class="text-6xl" />
			<div class="text-center">
				<p class="text-2xl font-bold">No listings</p>
				<p class="text-2xl font-bold text-neutral-content">Be the first to create one!</p>
			</div>
			<a href="/add-listing" class="btn btn-outline rounded-full"><AddListingIcon /> Add Listing</a>
		</div>
	{/if}
	{#if data.totalPages > 0}
		<div class="join flex mt-8">
			<a
				href="/listings/?{paramString}&page=1"
				class="join-item btn btn-neutral w-16"
				class:btn-disabled={data.totalPages <= 1}
			>
				<FirstPageIcon />
			</a>
			<a
				href="/listings/?{paramString}&page={currentPage - 1}"
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
				href="/listings/?{paramString}&page={currentPage + 1}"
				class="join-item btn btn-neutral w-16"
				class:btn-disabled={currentPage >= data.totalPages}
			>
				<NextPAgeIcon />
			</a>
			<a
				href="/listings/?{paramString}&page={data.totalPages}"
				class="join-item btn btn-neutral w-16"
				class:btn-disabled={data.totalPages <= 1}
			>
				<LastPageIcon />
			</a>
		</div>
	{/if}
</div>

<dialog bind:this={filtersModal} class="modal">
	<div class="modal-box">
		<form method="dialog">
			<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
		</form>
		<div class="flex flex-col gap-6 mt-6">
			<label class="form-control w-full">
				<div class="label">
					<span class="label-text">Max Price</span>
					<span class="label-text-alt">{selectedMaxPrice} DT</span>
				</div>
				<input
					type="range"
					min={0}
					max={PRICE_RANGE_MAX}
					class="range"
					bind:value={selectedMaxPrice}
				/>
			</label>
			<div class="flex flex-col gap-3">
				<select
					class="select select-bordered rounded-full"
					bind:value={selectedState}
					on:change={() => (selectedCity = 'All Cities')}
				>
					<option selected>All States</option>
					{#each uniqueStates as state}
						<option>{state}</option>
					{/each}
				</select>
				<select class="select select-bordered rounded-full" bind:value={selectedCity}>
					<option selected>All Cities</option>
					{#each data.cities.filter((city) => city.state === selectedState) as city (city.id)}
						<option>{city.city}</option>
					{/each}
				</select>
				<select class="select select-bordered rounded-full" bind:value={selectedPlatform}>
					<option selected>All Platforms</option>
					<option>PlayStation 5</option>
					<option>Xbox Series X|S</option>
				</select>
				<select class="select select-bordered rounded-full" bind:value={selectedSellers}>
					<option selected>All Sellers</option>
					<option>People</option>
					<option>Stores</option>
				</select>
				<select class="select select-bordered rounded-full" bind:value={selectedSort}>
					{#each sortOptions as sortOption}
						<option value={sortOption.id}>{sortOption.label}</option>
					{/each}
				</select>
			</div>
			<button class="btn btn-neutral rounded-full" on:click={applyFilters}> Apply </button>
		</div>
	</div>
</dialog>
