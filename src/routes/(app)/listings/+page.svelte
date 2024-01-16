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

	let filtersModal;
</script>

<div class="flex flex-col gap-y-8">
	<div
		class="w-full flex gap-4 flex-col sm:flex-row justify-between sm:items-end pb-4 border-b border-neutral"
	>
		<div>
			<h2 class="flex gap-2 text-4xl font-bold"><TagMultiple />All Listings</h2>
			<p class="mt-2 text-neutral-content text-sm">
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
	<div class="join flex mt-8">
		<button class="join-item btn">«</button>
		<div class="flex flex-1 justify-center bg-base-100 rounded-none">
			<button class="join-item btn">1</button>
			<button class="join-item btn">2</button>
			<button class="join-item btn btn-disabled">...</button>
			<button class="join-item btn">99</button>
			<button class="join-item btn">100</button>
		</div>
		<button class="join-item btn">»</button>
	</div>
</div>

<dialog bind:this={filtersModal} class="modal">
	<div class="modal-box">
		<form method="dialog">
			<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
		</form>
		<div class="flex flex-col">
			<div class="flex flex-col gap-3 py-10">
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
