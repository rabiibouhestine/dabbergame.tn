<script>
	import SearchBar from '$lib/components/SearchBar.svelte';
	import { getGameCover } from '$lib/utils/igdbUtils';

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

<div class="flex flex-col gap-8">
	<SearchBar />
	<h2 class="text-4xl font-bold">Suggestions</h2>
	<div class="w-full flex flex-col gap-8 rounded-container">
		<div class="h-full flex flex-wrap justify-center items-center gap-6">
			{#each popular as game}
				<a href="/listings/1">
					<img src={getGameCover(game.image_id)} alt="game" class="rounded-xl w-32" />
				</a>
			{/each}
		</div>
	</div>
</div>
