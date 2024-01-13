<script>
	import GameDetails from '$lib/components/GameDetails.svelte';
	import ListingBanner from '$lib/components/ListingBanner.svelte';

	import Launch from '~icons/mdi/launch';
	import Wikipedia from '~icons/mdi/wikipedia';
	import Youtube from '~icons/mdi/youtube';
	import Steam from '~icons/mdi/steam';
	import Epicgames from '~icons/simple-icons/epicgames';

	export let data;
	let game = data.game;

	let listings = Array.from({ length: 15 }, (_, index) => index + 1);
</script>

<div class="flex flex-col gap-y-8">
	<div class="rounded-container grid grid-cols-1 sm:grid-cols-4 gap-10 mb-8">
		<div class="col-span-1 flex flex-col justify-center md:justify-start items-center gap-4">
			<img
				src="https://images.igdb.com/igdb/image/upload/t_cover_big/{game.cover.image_id}.jpg"
				alt="game"
				class="rounded-xl w-full"
			/>
		</div>
		<div class="col-span-3 flex flex-col gap-6">
			<h2 class="text-5xl font-bold">
				{game.name}
			</h2>
			<GameDetails
				summary={game.summary}
				release_date={new Date(game.first_release_date * 1000).toISOString().split('T')[0]}
				genres={game.genres}
				platforms={game.platforms}
				website={game.websites.find((site) => site.category === 1)?.url}
				wikipedia={game.websites.find((site) => site.category === 3)?.url}
				youtube={game.websites.find((site) => site.category === 9)?.url}
				steam={game.websites.find((site) => site.category === 13)?.url}
				epicgames={game.websites.find((site) => site.category === 16)?.url}
				rating={Math.round(game.aggregated_rating)}
			/>
		</div>
	</div>
	<div class="flex flex-wrap gap-3 justify-between">
		<div class="flex flex-wrap items-center gap-3">
			<select class="select select-bordered rounded-full">
				<option disabled selected>All States</option>
				<option>Tunis</option>
				<option>Sousse</option>
			</select>
			<select class="select select-bordered rounded-full">
				<option disabled selected>All Platforms</option>
				<option>PS5</option>
				<option>XBSX</option>
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
	<div class="divider divider-start text-4xl font-bold">Listings</div>
	<div class="flex flex-col justify-center gap-4">
		{#each listings as listing}
			<ListingBanner />
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
