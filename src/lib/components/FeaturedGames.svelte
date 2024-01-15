<script>
	import { getGameCover } from '$lib/utils/igdbUtils';

	let featuredGames = [
		{
			id: 119171,
			cover: 'co670h',
			rating: 95
		},
		{
			id: 127044,
			cover: 'co79vq',
			rating: 92
		},
		{
			id: 119388,
			cover: 'co5vmg',
			rating: 95
		},
		{
			id: 185246,
			cover: 'co6jar',
			rating: 91
		}
	];
</script>

<div class="flex flex-col gap-6 rounded-container justify-between">
	<h2 class="text-4xl font-bold">Featured Games</h2>
	<div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
		{#each featuredGames as game}
			<a href="/listings/{game.id}" class="relative flex justify-center items-end group">
				<img
					src={getGameCover(game.cover)}
					alt="game"
					class="rounded-lg transition ease-in-out group-hover:scale-105"
				/>
				<div
					class="absolute -mb-4 badge badge-neutral gap-1 p-4 font-bold transition ease-in-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-4"
				>
					Rating: {game.rating}
				</div>
			</a>
		{/each}
	</div>
</div>
