<script>
	import GameCover from '$lib/components/GameCover.svelte';
	import UserInfo from '$lib/components/UserInfo.svelte';
	import GameDetails from '$lib/components/GameDetails.svelte';

	import { getGameCover } from '$lib/utils/igdbUtils';

	import CheckCircleOutlineRounded from '~icons/material-symbols/check-circle-outline-rounded';
	import CancelOutlineRounded from '~icons/material-symbols/cancel-outline-rounded';

	export let data;
	$: listing = data.listing;
</script>

<div class="flex items-center md:items-start flex-col md:flex-row gap-10">
	<div class="w-52 min-w-52 flex flex-col justify-center items-center gap-4">
		<div class="flex flex-col gap-3">
			<a href="/listings" class="transition ease-in-out hover:scale-105">
				<GameCover
					platform={listing.listing_platform}
					platformFamily={listing.listing_platform_family}
					coverImageId={listing.game_cover}
				/>
			</a>
			<a href="/listings" class="transition ease-in-out hover:scale-105">
				<div class="bg-base-100 rounded-xl overflow-hidden">
					<div
						class="w-full h-[80px] relative bg-gradient-to-tr from-accent via-primary to-secondary"
					>
						<!-- <img
							src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
							alt="profile"
							class="w-full h-full object-cover"
						/> -->
					</div>
					<div class="flex flex-col gap-2 items-center pb-4 -mt-8">
						<div class="avatar placeholder">
							<div
								class="bg-neutral text-neutral-content rounded-full w-16 outline outline-8 outline-base-100"
							>
								<span class="text-3xl font-bold">{'firstName'[0] + 'lastName'[0]}</span>
							</div>
						</div>
						<div class="text-center">
							<h2 class="text-xl font-bold">{'Rabii' + ' ' + 'Bouhestine'}</h2>
							<p class="text-sm text-slate-300">{'Ben Arous' + ', ' + 'El Mourouj'}</p>
						</div>
					</div>
				</div>
			</a>
			<!-- <a href="/user/{listing.profiles.id}" class="transition ease-in-out hover:scale-105">
				<UserInfo
					firstName={listing.profiles.first_name}
					lastName={listing.profiles.last_name}
					state={listing.profiles.cities.state}
					city={listing.profiles.cities.city}
				/>
			</a> -->
		</div>
		<div class="w-full flex flex-col gap-3">
			<span class="btn btn-outline btn-secondary rounded-full text-lg font-bold"> Phone </span>
			<span class="btn btn-outline btn-primary rounded-full text-lg font-bold"> Buy Now </span>
		</div>
	</div>
	<div class="flex flex-col gap-6 flex-grow">
		<div class="rounded-container flex flex-col justify-between gap-6">
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
						{#if JSON.parse(listing.listing_trade).length}
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
		{#if JSON.parse(listing.listing_trade).length}
			<div class="w-full flex flex-col gap-6 rounded-container">
				<h2 class="text-4xl font-bold">Trade Games</h2>
				<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
					{#each JSON.parse(listing.listing_trade) as game}
						<a href="/listings/{game.id}" class="transition ease-in-out hover:scale-105">
							<img src={getGameCover(game.cover.image_id)} alt="game" class="rounded-lg" />
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>
