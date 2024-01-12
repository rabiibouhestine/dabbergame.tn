<script>
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
			<p class="text-2xl font-medium">Best place to trade video games in Tunisia!</p>
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
			<div class="flex flex-col gap-3">
				{#each [1, 2, 3, 4] as seller}
					<div class="flex items-center justify-between">
						<UserInfo />
						<div class="flex justify-center items-center gap-1 bg-base-100 rounded-full px-4 h-10">
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
	<a href="/listings" class="btn btn-lg btn-neutral rounded-full">
		<TagsLine />
		See all listings
	</a>
</div>
