<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import ListingCard from '$lib/components/ListingCard.svelte';

	import TagMultiple from '~icons/mdi/tag-multiple';
	import SortIcon from '~icons/mdi/sort';

	const PRICE_RANGE_MAX = 300;

	export let data;

	const uniqueStates = [...new Set(data.cities.map((city) => city.state))];
	let selectedState;
	let selectedPlatform;
	let selectedSellers;
	let selectedSort;

	$: currentPage = Number($page.url.searchParams.get('page')) || 1;
	$: maxPrice = Number($page.url.searchParams.get('maxPrice')) || PRICE_RANGE_MAX;
	let cityId = $page.url.searchParams.get('cityId') || 0;

	$: selectedMaxPrice = maxPrice;
	let selectedCity = cityId;

	$: paramString = `maxPrice=${selectedMaxPrice}&cityId=${selectedCity}`;

	let filtersModal;

	function applyFilters() {
		filtersModal.close();
		goto(`/listings?${paramString}`);
	}
</script>

<div class="flex flex-col gap-y-8">
	<div
		class="w-full flex gap-4 flex-col sm:flex-row justify-between sm:items-end pb-4 border-b border-neutral"
	>
		<div>
			<h2 class="flex gap-2 text-4xl font-bold"><TagMultiple />All Listings</h2>
			<p class="mt-2 text-neutral-content text-xs sm:text-sm">
				{selectedState +
					', ' +
					data.cities.filter((city) => city.id === Number(cityId))[0].city +
					', ' +
					selectedPlatform +
					', ' +
					selectedSellers +
					', ' +
					selectedSort}
			</p>
		</div>
		<button
			class="btn btn-outline rounded-full"
			on:click={() => {
				filtersModal.showModal();
			}}
		>
			<SortIcon />
			Sort & Filter
		</button>
	</div>
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
		{#each data.listings as listing (listing.id)}
			<ListingCard {listing} />
		{/each}
	</div>
	<div class="join flex mt-8">
		<a
			href="/listings/?page={currentPage - 1}&{paramString}"
			class="join-item btn btn-neutral w-16"
			class:btn-disabled={currentPage <= 1}
		>
			«
		</a>
		<a href="/listings/?page=1&{paramString}" class="join-item btn btn-neutral w-16"> 1 </a>
		<div
			class="flex flex-1 justify-center items-center text-sm text-neutral-content bg-base-100 rounded-none"
		>
			Page {currentPage + ' / ' + data.totalPages}
		</div>
		<a
			href="/listings/?page={data.totalPages}&{paramString}"
			class="join-item btn btn-neutral w-16"
		>
			{data.totalPages}
		</a>
		<a
			href="/listings/?page={currentPage + 1}&{paramString}"
			class="join-item btn btn-neutral w-16"
			class:btn-disabled={currentPage >= data.totalPages}
		>
			»
		</a>
	</div>
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
					on:change={() => (selectedCity = 0)}
				>
					<option selected>All States</option>
					{#each uniqueStates as state}
						<option>{state}</option>
					{/each}
				</select>
				<select
					class="select select-bordered rounded-full"
					name="city_id"
					bind:value={selectedCity}
				>
					<option value={0} selected>All Cities</option>
					{#each data.cities.filter((city) => city.state === selectedState) as city (city.id)}
						<option value={city.id}>{city.city}</option>
					{/each}
				</select>
				<select class="select select-bordered rounded-full" bind:value={selectedPlatform}>
					<option disabled selected>All Platforms</option>
					<option>PlayStation 5</option>
					<option>Xbox Series X|S</option>
				</select>
				<select class="select select-bordered rounded-full" bind:value={selectedSellers}>
					<option disabled selected>All Sellers</option>
					<option>People</option>
					<option>Stores</option>
				</select>
				<select class="select select-bordered rounded-full" bind:value={selectedSort}>
					<option selected>Sorted by descending date</option>
					<option>Sorted by ascending date</option>
					<option>Sorted by descending price</option>
					<option>Sorted by ascending price</option>
				</select>
			</div>
			<button class="btn btn-neutral rounded-full" on:click={applyFilters}> Apply </button>
		</div>
	</div>
</dialog>
