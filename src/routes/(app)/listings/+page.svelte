<script>
	import ListingCard from '$lib/components/ListingCard.svelte';

	import TagMultiple from '~icons/mdi/tag-multiple';
	import SortIcon from '~icons/mdi/sort';

	export let data;

	const uniqueStates = [...new Set(data.cities.map((city) => city.state))];
	let selectedState;
	let selectedCity;
	let selectedPlatform;
	let selectedSellers;
	let selectedSort;
	let maxPrice = 300;

	let filtersModal;
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
					selectedCity +
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
		{#each data.listings as listing}
			<ListingCard {listing} />
		{/each}
	</div>
	<div class="join">
		<button class="join-item btn btn-outline btn-neutral">«</button>
		<button class="join-item btn btn-outline btn-neutral">Page 22 {data.count}</button>
		<button class="join-item btn btn-outline btn-neutral">»</button>
	</div>
	<div class="join flex mt-8">
		<button class="join-item btn">«</button>
		<div class="flex flex-1 justify-center bg-base-100 rounded-none">
			<a href="/listings?page=1" class="join-item btn">1</a>
			<a href="/listings?page=2" class="join-item btn">2</a>
			<a href="/listings?page=3" class="join-item btn">3</a>
			<a href="/listings?page=4" class="join-item btn">4</a>
			<a href="/listings?page=5" class="join-item btn">5</a>
		</div>
		<button class="join-item btn">»</button>
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
					<span class="label-text-alt">{maxPrice} DT</span>
				</div>
				<input type="range" min="0" max="300" bind:value={maxPrice} class="range" />
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
				<select
					class="select select-bordered rounded-full"
					name="city_id"
					bind:value={selectedCity}
				>
					<option value="All Cities" selected>All Cities</option>
					{#each data.cities.filter((city) => city.state === selectedState) as city}
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
			<button class="btn btn-neutral rounded-full"> Apply </button>
		</div>
	</div>
</dialog>
