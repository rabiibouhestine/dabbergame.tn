<script>
	import Windows from '~icons/cib/windows';
	import Playstation from '~icons/cib/playstation';
	import Xbox from '~icons/cib/xbox';
	import NintendoSwitch from '~icons/cib/nintendo-switch';

	import TagMultiple from '~icons/mdi/tag-multiple';
	import ArrowRight from '~icons/mdi/arrow-right-bold';

	import ListingCard from '$lib/components/ListingCard.svelte';
	import UserInfo from '$lib/components/UserInfo.svelte';
	import { getGameCover } from '$lib/utils/igdbUtils';

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
	<div class="grid grid-cols-1 lg:grid-cols-5 gap-5">
		<div class="lg:col-span-3 flex flex-col gap-6 rounded-container justify-between">
			<h2 class="text-4xl font-bold">Featured Games</h2>
			<div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
				{#each data.popular as game}
					<a href="/listings/{game.game_id}" class="relative flex justify-center items-end group">
						<img
							src={getGameCover(game.game_cover)}
							alt="game"
							class="rounded-lg transition ease-in-out group-hover:scale-105"
						/>
						<div
							class="absolute -mb-4 badge badge-neutral gap-1 p-4 font-bold transition ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-4"
						>
							Rating: {Math.round(game.num_listings)}
						</div>
					</a>
				{/each}
			</div>
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
								first_name={store.first_name}
								last_name={store.last_name}
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
	<div class="w-full flex justify-between pb-2 border-b border-neutral mt-8">
		<h2 class="text-4xl font-bold">Latest Listings</h2>
		<a href="/listings" class="btn btn-circle btn-ghost text-3xl font-bold">
			<ArrowRight />
		</a>
	</div>
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
		{#each data.listings as listing}
			<ListingCard {listing} />
		{/each}
	</div>
	<a href="/listings" class="btn btn-outline rounded-full text-lg font-bold">
		<TagMultiple />
		See all listings
	</a>
</div>
