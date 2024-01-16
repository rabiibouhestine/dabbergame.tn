<script>
	import ListingCard from '$lib/components/ListingCard.svelte';

	export let data;

	const uniqueStates = [...new Set(data.cities.map((city) => city.state))];
	let selectedState;
	let selectedCity;
</script>

<div class="flex flex-col gap-y-8">
	<h2 class="w-full flex justify-between pb-2 border-b border-neutral text-4xl font-bold">
		All Listings
	</h2>
	<div class=" rounded-container flex flex-col md:flex-row gap-3 justify-between -mt-4">
		<div class="flex flex-col md:flex-row gap-3">
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
			<select class="select select-bordered rounded-full" name="city_id" bind:value={selectedCity}>
				<option value="All Cities" selected>All Cities</option>
				{#each data.cities.filter((city) => city.state === selectedState) as city}
					<option value={city.id}>{city.city}</option>
				{/each}
			</select>
			<select class="select select-bordered rounded-full">
				<option disabled selected>All Platforms</option>
				<option>PlayStation 5</option>
				<option>Xbox Series X|S</option>
			</select>
			<select class="select select-bordered rounded-full">
				<option disabled selected>All Sellers</option>
				<option>People</option>
				<option>Stores</option>
			</select>
		</div>
		<select class="select select-bordered rounded-full">
			<option disabled selected>Sort by date</option>
			<option>Sort by price</option>
			<option>Sort by date</option>
		</select>
	</div>
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
		{#each data.listings as listing}
			<ListingCard {listing} />
		{/each}
	</div>
	<div class="join flex mt-8">
		<button class="join-item btn">«</button>
		<div class="flex flex-1 justify-center bg-neutral rounded-none">
			<button class="join-item btn">1</button>
			<button class="join-item btn">2</button>
			<button class="join-item btn btn-disabled">...</button>
			<button class="join-item btn">99</button>
			<button class="join-item btn">100</button>
		</div>
		<button class="join-item btn">»</button>
	</div>
</div>
