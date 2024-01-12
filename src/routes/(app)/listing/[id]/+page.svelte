<script>
	import ListingCard from '$lib/components/ListingCard.svelte';
	import Launch from '~icons/mdi/launch';
	import Wikipedia from '~icons/mdi/wikipedia';
	import Youtube from '~icons/mdi/youtube';
	import Steam from '~icons/mdi/steam';
	import Epicgames from '~icons/simple-icons/epicgames';
	import CheckCircleOutlineRounded from '~icons/material-symbols/check-circle-outline-rounded';
	import CancelOutlineRounded from '~icons/material-symbols/cancel-outline-rounded';
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

<div class="flex items-center md:items-start flex-col md:flex-row gap-10">
	<div class="min-w-52 flex flex-col justify-center items-center gap-4">
		<ListingCard showPrice={false} listing={data.listing} />
		<div class="w-full flex flex-col gap-3">
			<span class="bg-base-300 rounded-full px-4 py-2 text-lg text-center font-bold">Phone</span>
			<span class="bg-base-300 rounded-full px-4 py-2 text-lg text-center font-bold">Buy Now</span>
		</div>
	</div>
	<div class="flex flex-col gap-6">
		<div class="rounded-container flex flex-col justify-between gap-6 h-full">
			<div class="flex flex-col gap-6">
				<h2 class="text-4xl font-bold">{data.listing.game_name}</h2>
				<div class="flex flex-wrap gap-3 justify-between">
					<div class="flex flex-wrap gap-3">
						<div class="flex items-center bg-base-200 rounded-full px-4 py-2 text-center font-bold">
							Condition: {data.listing.listing_condition}
						</div>
						<div
							class="flex items-center gap-1 bg-base-200 rounded-full px-4 py-2 text-center font-bold"
						>
							{#if data.listing.listing_delivery}
								<CheckCircleOutlineRounded />
							{:else}
								<CancelOutlineRounded />
							{/if}
							Delivery
						</div>
						<div
							class="flex items-center gap-1 bg-base-200 rounded-full px-4 py-2 text-center font-bold"
						>
							{#if data.listing.listing_trade.length}
								<CheckCircleOutlineRounded />
							{:else}
								<CancelOutlineRounded />
							{/if}
							Trade
						</div>
					</div>
					<div class="flex items-center bg-base-200 rounded-full px-4 py-2 text-center font-bold">
						{data.listing.listing_price} DT
					</div>
				</div>
				<div class="flex flex-col gap-4">
					<p>
						{data.listing.game_description}
					</p>
					<p>
						Release Date: {data.listing.game_release_date}
					</p>
					<p>
						Genre: {data.listing.game_genres.map((genre) => genre.name).join(', ')}
					</p>
					<p>
						Platforms: {data.listing.game_platforms.map((platform) => platform.name).join(', ')}
					</p>
				</div>
			</div>
			<div class="flex flex-wrap justify-between">
				<div class="flex flex-wrap gap-3">
					{#if data.listing.game_website}
						<a href={data.listing.game_website} target="_blank" class="btn btn-circle">
							<Launch class="text-xl" />
						</a>
					{/if}
					{#if data.listing.game_wikipedia}
						<a href={data.listing.game_wikipedia} target="_blank" class="btn btn-circle">
							<Wikipedia class="text-xl" />
						</a>
					{/if}
					{#if data.listing.game_youtube}
						<a href={data.listing.game_youtube} target="_blank" class="btn btn-circle">
							<Youtube class="text-xl" />
						</a>
					{/if}
					{#if data.listing.game_steam}
						<a href={data.listing.game_steam} target="_blank" class="btn btn-circle">
							<Steam class="text-xl" />
						</a>
					{/if}
					{#if data.listing.game_epicgames}
						<a href={data.listing.game_epicgames} target="_blank" class="btn btn-circle">
							<Epicgames class="text-xl" />
						</a>
					{/if}
				</div>
				<div class="flex items-center bg-base-200 rounded-full px-4 py-2 text-center font-bold">
					Rating: {Math.round(data.listing.game_rating)}
				</div>
			</div>
		</div>
		<div class="w-full flex flex-col gap-8 rounded-container">
			<div class="divider divider-start text-4xl font-bold">Trade Games</div>
			<div class="h-full flex flex-wrap justify-center items-center gap-6">
				{#each popular as game}
					<a href="/listings/1">
						<img src={getGameCover(game.image_id)} alt="game" class="rounded-xl w-32" />
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
