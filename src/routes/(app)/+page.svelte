<script>
	import Windows from '~icons/cib/windows';
	import Playstation from '~icons/cib/playstation';
	import Xbox from '~icons/cib/xbox';
	import NintendoSwitch from '~icons/cib/nintendo-switch';

	import TagsLine from '~icons/clarity/tags-line';
	import ListingCard from '$lib/components/ListingCard.svelte';
	import UserInfo from '$lib/components/UserInfo.svelte';
	import { getGameCover } from '$lib/utils/igdbUtils';

	export let data;

	const popular = [
		{
			image_id: 'co7as5'
		},
		{
			image_id: 'co7ctx'
		},
		{
			image_id: 'co6lz0'
		},
		{
			image_id: 'co6jar'
		}
	];
</script>

<div class="flex flex-col items-center gap-y-10">
	<div class="min-h-64 flex flex-col justify-center gap-10 items-center">
		<div class="text-center">
			<h2 class="text-6xl md:text-7xl font-bold">Dabber Game</h2>
			<p class="text-md md:text-3xl text-neutral-content">
				Best place to buy, sell and trade video games in Tunisia!
			</p>
		</div>
		<div class="w-full px-6 flex justify-between items-center text-4xl md:text-6xl">
			<a href="/listings" class="hover:text-pc transition ease-in-out hover:scale-125">
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
	<div class="flex flex-col lg:flex-row gap-6">
		<div class="w-full flex flex-col gap-6 rounded-container justify-between">
			<div>
				<h2 class="text-4xl font-bold">Popular Games</h2>
				<p class="text-neutral-content">Based on the number of listings for each game.</p>
			</div>
			<div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
				{#each popular as game}
					<a href="/listings/1" class="transition ease-in-out hover:scale-105">
						<img src={getGameCover(game.image_id)} alt="game" class="rounded-lg" />
					</a>
				{/each}
			</div>
		</div>
		<div class="min-w-80 flex flex-col gap-6 rounded-container">
			<h2 class="text-4xl font-bold">Featured</h2>
			<div class="flex flex-col gap-2">
				{#each [1, 2, 3, 4] as seller}
					<a
						href="/"
						class="flex items-center justify-between border-neutral border-b last:border-0 pb-2 last:pb-0 group transition ease-in-out hover:scale-105 hover:text-secondary"
					>
						<UserInfo />
						<div class="badge badge-neutral gap-1 p-4 font-bold group-hover:badge-secondary">
							<TagsLine />
							<span class="font-bold">3</span>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
	<div class="divider divider-start text-4xl font-bold">Latest Listings</div>
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
		{#each data.listings as listing}
			<ListingCard {listing} />
		{/each}
	</div>
	<a href="/listings" class="btn btn-neutral rounded-full">
		<TagsLine />
		See all listings
	</a>
</div>
