<script>
	import Windows from '~icons/cib/windows';
	import Playstation from '~icons/cib/playstation';
	import Xbox from '~icons/cib/xbox';
	import Nintendo from '~icons/cib/nintendo';

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
			<h2 class="text-7xl font-bold">Dabber Game</h2>
			<p class="text-3xl">Best place to buy, sell and trade video games in Tunisia!</p>
		</div>
		<div class="w-full flex justify-between text-6xl">
			<a href="/" class="hover:text-pc hover:scale-105">
				<Windows />
			</a>
			<a href="/" class="hover:text-playstation hover:scale-105">
				<Playstation />
			</a>
			<a href="/" class="hover:text-xbox hover:scale-105">
				<Xbox />
			</a>
			<a href="/" class="hover:text-nintendo hover:scale-105">
				<Nintendo />
			</a>
		</div>
	</div>
	<div class="flex flex-col lg:flex-row gap-6">
		<div class="w-full flex flex-col gap-8 rounded-container">
			<div class="divider divider-start text-4xl font-bold">Popular Games</div>
			<div class="h-full flex flex-wrap justify-center items-center gap-6">
				{#each popular as game}
					<a href="/listings/1">
						<img src={getGameCover(game.image_id)} alt="game" class="rounded-xl w-32" />
					</a>
				{/each}
			</div>
		</div>
		<div class="min-w-80 flex flex-col gap-8 rounded-container">
			<div class="divider divider-start text-4xl font-bold">Featured</div>
			<div class="flex flex-col gap-2">
				{#each [1, 2, 3, 4] as seller}
					<div
						class="flex items-center justify-between border-neutral border-b last:border-0 pb-2 last:pb-0"
					>
						<UserInfo />
						<div class="badge badge-neutral gap-1 p-4 font-bold">
							<TagsLine />
							<span class="font-bold">3</span>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="divider divider-start text-4xl font-bold">Latest Listings</div>
	<div class="flex flex-wrap justify-center gap-8">
		{#each data.listings as listing}
			<ListingCard {listing} />
		{/each}
	</div>
	<a href="/listings" class="btn btn-neutral rounded-full">
		<TagsLine />
		See all listings
	</a>
</div>
