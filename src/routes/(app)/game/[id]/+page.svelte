<script>
	import GameDetails from '$lib/components/GameDetails.svelte';
	import ListingBanner from '$lib/components/ListingBanner.svelte';

	import SortIcon from '~icons/mdi/sort';
	import ListingsIcon from '~icons/mdi/tag-multiple';

	export let data;
	$: game = data.game;

	let listings = Array.from({ length: 15 }, (_, index) => index + 1);
</script>

<div class="flex flex-col gap-y-8">
	<div class="rounded-container grid grid-cols-1 sm:grid-cols-4 gap-10">
		<div class="col-span-1 flex flex-col justify-center md:justify-start items-center gap-4">
			<img
				src="https://images.igdb.com/igdb/image/upload/t_cover_big/{game.cover.image_id}.jpg"
				alt="game"
				class="rounded-xl w-full"
			/>
		</div>
		<div class="col-span-3 flex flex-col gap-6">
			<h2 class="text-4xl font-bold">
				{game.name}
			</h2>
			<GameDetails
				summary={game.summary}
				release_date={new Date(game.first_release_date * 1000).toISOString().split('T')[0]}
				genres={game.genres}
				platforms={game.platforms}
				website={game.websites?.find((site) => site.category === 1)?.url}
				wikipedia={game.websites?.find((site) => site.category === 3)?.url}
				youtube={game.websites?.find((site) => site.category === 9)?.url}
				steam={game.websites?.find((site) => site.category === 13)?.url}
				epicgames={game.websites?.find((site) => site.category === 16)?.url}
			/>
		</div>
	</div>
	<div
		class="w-full flex gap-4 flex-col sm:flex-row justify-between sm:items-end pb-3 border-b border-neutral"
	>
		<div>
			<h2 class="flex gap-2 text-4xl font-bold"><ListingsIcon />Listings</h2>
			<p class="mt-2 text-neutral-content text-xs sm:text-sm">
				{'state' +
					', ' +
					'city' +
					', ' +
					'platform' +
					', ' +
					'sellers' +
					', ' +
					'getSortLabel(sort)'}
			</p>
		</div>
		<button
			class="btn btn-outline rounded-full"
			on:click={() => {
				'filtersModal.showModal();';
			}}
		>
			<SortIcon />
			Sort & Filter
		</button>
	</div>
	<div class="flex flex-col justify-center gap-4">
		{#each listings as listing}
			<ListingBanner />
		{/each}
	</div>
	<!-- <div class="join flex mt-8">
		<a href="/listings/?{paramString}&page=1" class="join-item btn btn-neutral w-16">
			<FirstPageIcon />
		</a>
		<a
			href="/listings/?{paramString}&page={currentPage - 1}"
			class="join-item btn btn-neutral w-16"
			class:btn-disabled={currentPage <= 1}
		>
			<PreviousPageIcon />
		</a>
		<div
			class="flex flex-1 justify-center items-center text-sm text-neutral-content bg-base-100 rounded-none"
		>
			Page {currentPage + ' / ' + data.totalPages}
		</div>
		<a
			href="/listings/?{paramString}&page={currentPage + 1}"
			class="join-item btn btn-neutral w-16"
			class:btn-disabled={currentPage >= data.totalPages}
		>
			<NextPAgeIcon />
		</a>
		<a
			href="/listings/?{paramString}&page={data.totalPages}"
			class="join-item btn btn-neutral w-16"
		>
			<LastPageIcon />
		</a>
	</div> -->
</div>
