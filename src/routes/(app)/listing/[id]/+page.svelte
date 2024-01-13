<script>
	import ListingCard from '$lib/components/ListingCard.svelte';
	import GameDetails from '$lib/components/GameDetails.svelte';

	import { getGameCover } from '$lib/utils/igdbUtils';

	import CheckCircleOutlineRounded from '~icons/material-symbols/check-circle-outline-rounded';
	import CancelOutlineRounded from '~icons/material-symbols/cancel-outline-rounded';

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
			<span class="btn btn-outline btn-primary rounded-full text-lg font-bold"> Phone </span>
			<span class="btn btn-outline btn-secondary rounded-full text-lg font-bold"> Buy Now </span>
		</div>
	</div>
	<div class="flex flex-col gap-6">
		<div class="rounded-container flex flex-col justify-between gap-6 h-full">
			<h2 class="text-4xl font-bold">{data.listing.game_name}</h2>
			<div class="flex flex-wrap gap-3 justify-between">
				<div class="flex flex-wrap gap-3">
					<div class="badge badge-neutral p-4 font-bold">
						Condition: {data.listing.listing_condition}
					</div>
					<div class="badge badge-neutral gap-1 p-4 font-bold">
						{#if data.listing.listing_delivery}
							<CheckCircleOutlineRounded />
						{:else}
							<CancelOutlineRounded />
						{/if}
						Delivery
					</div>
					<div class="badge badge-neutral gap-1 p-4 font-bold">
						{#if data.listing.listing_trade.length}
							<CheckCircleOutlineRounded />
						{:else}
							<CancelOutlineRounded />
						{/if}
						Trade
					</div>
				</div>
				<div class="badge badge-neutral p-4 font-bold">
					{data.listing.listing_price} DT
				</div>
			</div>
			<GameDetails
				summary={data.listing.game_description}
				release_date={data.listing.game_release_date?.split('T')[0]}
				genres={data.listing.game_genres}
				platforms={data.listing.game_platforms}
				website={data.listing.game_website}
				wikipedia={data.listing.game_wikipedia}
				youtube={data.listing.game_youtube}
				steam={data.listing.game_steam}
				epicgames={data.listing.game_epicgames}
				rating={Math.round(data.listing.game_rating)}
			/>
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
