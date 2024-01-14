<script>
	import ListingCard from '$lib/components/ListingCard.svelte';
	import GameCover from '$lib/components/GameCover.svelte';
	import UserInfo from '$lib/components/UserInfo.svelte';
	import GameDetails from '$lib/components/GameDetails.svelte';

	import { getGameCover } from '$lib/utils/igdbUtils';

	import CheckCircleOutlineRounded from '~icons/material-symbols/check-circle-outline-rounded';
	import CancelOutlineRounded from '~icons/material-symbols/cancel-outline-rounded';

	export let data;
	$: listing = data.listing;

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
		<div class="flex flex-col gap-3">
			<a href="/listing/{listing.id}" class="transition ease-in-out hover:scale-105">
				<GameCover platform={listing.listing_platform} coverImageId={listing.game_cover} />
			</a>
			<a href="/" class="transition ease-in-out hover:scale-105">
				<UserInfo user={listing.profiles} />
			</a>
		</div>
		<div class="w-full flex flex-col gap-3">
			<span class="btn btn-outline btn-secondary rounded-full text-lg font-bold"> Phone </span>
			<span class="btn btn-outline btn-primary rounded-full text-lg font-bold"> Buy Now </span>
		</div>
	</div>
	<div class="flex flex-col gap-6">
		<div class="rounded-container flex flex-col justify-between gap-6 h-full">
			<h2 class="text-4xl font-bold">{listing.game_name}</h2>
			<div class="flex flex-wrap gap-3 justify-between">
				<div class="flex flex-wrap gap-3">
					<div class="badge badge-neutral p-4 font-bold">
						Condition: {listing.listing_condition}
					</div>
					<div class="badge badge-neutral gap-1 p-4 font-bold">
						{#if listing.listing_delivery}
							<CheckCircleOutlineRounded />
						{:else}
							<CancelOutlineRounded />
						{/if}
						Delivery
					</div>
					<div class="badge badge-neutral gap-1 p-4 font-bold">
						{#if listing.listing_trade.length}
							<CheckCircleOutlineRounded />
						{:else}
							<CancelOutlineRounded />
						{/if}
						Trade
					</div>
				</div>
				<div class="badge badge-neutral p-4 font-bold">
					{listing.listing_price} DT
				</div>
			</div>
			<GameDetails
				summary={listing.game_description}
				release_date={listing.game_release_date?.split('T')[0]}
				genres={listing.game_genres}
				platforms={listing.game_platforms}
				website={listing.game_website}
				wikipedia={listing.game_wikipedia}
				youtube={listing.game_youtube}
				steam={listing.game_steam}
				epicgames={listing.game_epicgames}
				rating={Math.round(listing.game_rating)}
			/>
		</div>
		<div class="w-full flex flex-col gap-6 rounded-container">
			<h2 class="text-4xl font-bold">Trade Games</h2>
			<div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
				{#each popular as game}
					<a href="/listings/1" class="transition ease-in-out hover:scale-105">
						<img src={getGameCover(game.image_id)} alt="game" class="rounded-lg" />
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
