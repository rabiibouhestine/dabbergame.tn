<script>
	import Windows from '~icons/cib/windows';
	import Playstation from '~icons/cib/playstation';
	import Xbox from '~icons/cib/xbox';
	import NintendoSwitch from '~icons/cib/nintendo-switch';

	import TagMultiple from '~icons/mdi/tag-multiple';
	import ArrowRight from '~icons/mdi/arrow-right-bold';

	import ListingCard from '$lib/components/ListingCard.svelte';
	import UserInfo from '$lib/components/UserInfo.svelte';
	import FeaturedGames from '$lib/components/FeaturedGames.svelte';

	export let data;
</script>

<div class="flex flex-col items-center gap-y-10">
	<div class="flex flex-col justify-center gap-10 items-center my-32">
		<div class="text-center">
			<h2 class="text-6xl md:text-7xl font-bold">Dabber Game</h2>
			<p class="text-md md:text-3xl text-neutral-content">
				Best place to buy, sell and trade video games in Tunisia!
			</p>
		</div>
		<div class="w-full px-6 flex justify-between items-center text-4xl md:text-6xl">
			<a href="/listings" class="hover:text-windows transition ease-in-out hover:scale-125">
				<Windows />
			</a>
			<a
				href="/listings"
				class="hover:text-playstation transition ease-in-out hover:scale-125 text-5xl md:text-7xl"
			>
				<Playstation />
			</a>
			<a href="/listings" class="hover:text-xbox transition ease-in-out hover:scale-125">
				<Xbox />
			</a>
			<a href="/listings" class="hover:text-nintendo transition ease-in-out hover:scale-125">
				<NintendoSwitch />
			</a>
		</div>
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-6 gap-5">
		<div class="lg:col-span-4">
			<FeaturedGames />
		</div>
		<div class="lg:col-span-2 flex flex-col gap-6 rounded-container">
			<div class="flex justify-between">
				<h2 class="text-4xl font-bold">Stores</h2>
				<a href="/stores" class="btn btn-circle btn-ghost text-3xl font-bold">
					<ArrowRight />
				</a>
			</div>
			<div class="flex flex-col gap-2">
				{#each data.featured as store}
					<a
						href="/user/{store.id}"
						class="flex items-center justify-between border-neutral border-b last:border-0 pb-2 last:pb-0 group"
					>
						<div class="transition ease-in-out group-hover:scale-105">
							<UserInfo
								firstName={store.first_name}
								lastName={store.last_name}
								state={store.state}
								city={store.city}
							/>
						</div>
						<div
							class="badge badge-neutral gap-1 p-4 font-bold transition ease-in-out group-hover:scale-105"
						>
							<TagMultiple />
							<span class="font-bold">{store.num_listings} listings</span>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
	<div class="w-full flex justify-between pb-1 border-b border-neutral mt-8">
		<h2 class="flex gap-2 text-4xl font-bold"><TagMultiple />Latest Listings</h2>
		<a href="/listings" class="btn btn-circle btn-ghost text-3xl font-bold">
			<ArrowRight />
		</a>
	</div>
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
		{#each data.listings as listing}
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
			/>
		{/each}
	</div>
	<a href="/listings" class="btn btn-outline rounded-full text-lg font-bold">
		<TagMultiple />
		See all listings
	</a>
</div>
