<script>
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

<div class="flex flex-col gap-y-10 max-w-5xl mx-auto my-10 px-4">
	<div class="divider text-3xl font-bold">Dernieres annonces</div>
	<div class="flex flex-wrap justify-center gap-8">
		{#each games as game}
			<div>
				<div class="w-40 rounded-lg overflow-hidden">
					<div class="bg-blue-600 px-3 py-1 text-white text-md font-bold">PS5</div>
					<img
						class="w-full h-48"
						src="https://images.igdb.com/igdb/image/upload/t_cover_big/co7as5.jpg"
						alt="cover"
					/>
				</div>
				<div class="flex justify-between py-2 items-center">
					<div class="avatar placeholder">
						<div class="bg-neutral text-neutral-content rounded-full w-8 h-8">
							<span class="text-xs">Ls</span>
						</div>
					</div>
					<div class="text-2xl font-bold">200 DT</div>
				</div>
			</div>
		{/each}
	</div>
	<div class="self-center rounded-xl bg-base-300 px-4 py-2 text-xl">Voir toutes les annonces</div>
</div>
