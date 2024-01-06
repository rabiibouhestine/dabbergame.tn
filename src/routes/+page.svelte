<script>
	import ListingCard from '$lib/components/ListingCard.svelte';
	import TagsLine from '~icons/clarity/tags-line';
	import SearchBar from '$lib/components/SearchBar.svelte';

	const games = [
		{
			name: 'REGICIDE SOLITAIRE',
			href: '/regicide-solitaire',
			time: 8,
			weight: 1.94
		},
		{
			name: 'SCOUNDREL',
			href: '/scoundrel',
			time: 5,
			weight: 1.0
		},
		{
			name: 'CLEAR THE DUNGEON',
			href: '/clear-the-dungeon',
			time: 3,
			weight: 1.0
		},
		{
			name: 'MERCHANT SOLITAIRE',
			href: '/merchant-solitaire',
			time: 5,
			weight: 1.0
		},
		{
			name: 'CARD CAPTURE',
			href: '/card-capture',
			time: 5,
			weight: 1.4
		},
		{
			name: 'AREA 52',
			href: '/area-52',
			time: 5,
			weight: 1.3
		},
		{
			name: 'REGICIDE SOLITAIRE',
			href: '/regicide-solitaire',
			time: 8,
			weight: 1.94
		},
		{
			name: 'SCOUNDREL',
			href: '/scoundrel',
			time: 5,
			weight: 1.0
		},
		{
			name: 'CLEAR THE DUNGEON',
			href: '/clear-the-dungeon',
			time: 3,
			weight: 1.0
		},
		{
			name: 'MERCHANT SOLITAIRE',
			href: '/merchant-solitaire',
			time: 5,
			weight: 1.0
		},
		{
			name: 'CARD CAPTURE',
			href: '/card-capture',
			time: 5,
			weight: 1.4
		},
		{
			name: 'AREA 52',
			href: '/area-52',
			time: 5,
			weight: 1.3
		},
		{
			name: 'MERCHANT SOLITAIRE',
			href: '/merchant-solitaire',
			time: 5,
			weight: 1.0
		},
		{
			name: 'CARD CAPTURE',
			href: '/card-capture',
			time: 5,
			weight: 1.4
		},
		{
			name: 'AREA 52',
			href: '/area-52',
			time: 5,
			weight: 1.3
		}
	];
</script>

<div class="flex flex-col gap-y-10">
	<div class="min-h-64 flex flex-col justify-center gap-10 items-center">
		<div class="text-center">
			<h2 class="text-7xl font-bold">Dabber Game</h2>
			<p class="text-2xl font-medium">Best place to trade video games in Tunisia!</p>
		</div>
		<div class="w-full max-w-[32rem]">
			<SearchBar />
		</div>
	</div>
	<div class="flex flex-col lg:flex-row gap-4">
		<div class="w-full flex flex-col gap-8 items-center bg-neutral p-6 rounded-3xl">
			<div class="divider divider-start text-4xl font-bold">Popular Games</div>
			<div class="flex gap-6">
				<a href="/listings/1">
					<img
						src="https://images.igdb.com/igdb/image/upload/t_cover_big/co7as5.jpg"
						alt="game"
						class="bg-red-600 rounded-xl w-36"
					/>
				</a>
				<a href="/listings/1">
					<img
						src="https://images.igdb.com/igdb/image/upload/t_cover_big/co7ctx.jpg"
						alt="game"
						class="bg-red-600 rounded-xl w-36"
					/>
				</a>
				<a href="/listings/1">
					<img
						src="https://images.igdb.com/igdb/image/upload/t_cover_big/co6lz0.jpg"
						alt="game"
						class="bg-red-600 rounded-xl w-36"
					/>
				</a>
				<a href="/listings/1">
					<img
						src="https://images.igdb.com/igdb/image/upload/t_cover_big/co6jar.jpg"
						alt="game"
						class="bg-red-600 rounded-xl w-36"
					/>
				</a>
			</div>
		</div>
		<div class="min-w-80 flex flex-col gap-8 bg-neutral p-6 rounded-3xl">
			<div class="divider divider-start text-4xl font-bold">Featured</div>
			<div class="flex flex-col gap-3">
				{#each [1, 2, 3, 4] as seller}
					<div class="flex items-center justify-between">
						<div class="flex gap-2 items-center">
							<div class="avatar placeholder">
								<div class="bg-base-200 text-neutral-content rounded-full w-10 h-10">
									<span class="text-xs">Ls</span>
								</div>
							</div>
							<div>
								<h2>Foulen Ben Falten</h2>
								<p class="text-xs">Ben Arous, El Mourouj</p>
							</div>
						</div>
						<div
							class="bg-base-200 text-neutral-content rounded-full px-4 h-10 flex justify-center items-center gap-1"
						>
							<span class="text-md">3</span>
							<TagsLine />
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="divider divider-start text-4xl font-bold">Latest Listings</div>
	<div class="flex flex-wrap justify-center gap-8">
		{#each games as game}
			<ListingCard />
		{/each}
	</div>
	<a
		href="/listings"
		class="self-center rounded-full bg-base-300 px-4 py-2 text-xl flex gap-2 items-center"
	>
		<TagsLine />
		See all listings
	</a>
</div>
