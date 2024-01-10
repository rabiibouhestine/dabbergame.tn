<script>
	import SearchBar from '$lib/components/SearchBar.svelte';
	import { getGameCover } from '$lib/utils/igdbUtils';

	let gameSelected = false;
	let game_id = '';

	function handleGameSelection(event) {
		gameSelected = true;
		game_id = event.detail;
	}

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

<div class="flex flex-col gap-8 max-w-2xl mx-auto">
	<div class="divider divider-start text-4xl font-bold">Create Listing</div>
	<SearchBar on:click={handleGameSelection} />
	{#if !gameSelected}
		<div class="w-full flex flex-col gap-8 rounded-container">
			<div class="divider divider-start text-4xl font-bold">Popular Games</div>
			<div class="h-full flex flex-wrap justify-center items-center gap-6">
				{#each popular as game}
					<a href="/listings/1">
						<img src={getGameCover(game.image_id)} alt="game" class="rounded-xl w-32" />
					</a>
				{/each}
			</div>
		</div>
	{:else}
		<h2>{game_id}</h2>
	{/if}
</div>
