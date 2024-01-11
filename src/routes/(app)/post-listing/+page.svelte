<script>
	import SearchBar from '$lib/components/SearchBar.svelte';
	import { getGameCover } from '$lib/utils/igdbUtils';

	let gameSelected = false;
	let selectedGameDetails = {};
	let tradeGames = [];

	function handleGameSelection(event) {
		gameSelected = true;
		selectedGameDetails = event.detail;
	}

	function handleGameTrade(event) {
		tradeGames = [...tradeGames, event.detail];
	}

	function removeGameTrade(id) {
		tradeGames = tradeGames.filter((game) => game.id !== id);
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
		<form class="flex flex-col gap-4" method="POST" action="/post-listing">
			<div class="flex flex-col gap-6 rounded-container">
				<h2 class="text-3xl font-bold">
					{selectedGameDetails.name}
					{#if selectedGameDetails.first_release_date}
						({new Date(selectedGameDetails.first_release_date * 1000).getFullYear()})
					{/if}
				</h2>
				<div class="flex flex-col sm:flex-row gap-3">
					<div class="flex-1">
						{#if selectedGameDetails.cover}
							<img
								src="https://images.igdb.com/igdb/image/upload/t_cover_big/{selectedGameDetails
									.cover.image_id}.jpg"
								alt="game"
								class="rounded-md w-full"
							/>
						{:else}
							<img src="https://placehold.co/90x120" alt="game" class="rounded-md" />
						{/if}
					</div>
					<div class="flex-1 flex flex-col gap-4">
						<label class="form-control w-full">
							<div class="label">
								<span class="label-text">Platform</span>
							</div>
							<select class="select select-bordered" name="platform">
								{#each selectedGameDetails.platforms as platform}
									<option>{platform.name}</option>
								{/each}
							</select>
						</label>
						<label class="form-control w-full">
							<div class="label">
								<span class="label-text">Condition</span>
							</div>
							<select class="select select-bordered" name="condition">
								<option selected value={0}>New</option>
								<option value={1}>Open</option>
								<option value={2}>Used</option>
							</select>
						</label>
						<label class="form-control w-full">
							<div class="label">
								<span class="label-text">Delivery</span>
							</div>
							<select class="select select-bordered" name="delivery">
								<option selected value={true}>Yes</option>
								<option value={false}>No</option>
							</select>
						</label>
						<label class="form-control w-full">
							<div class="label">
								<span class="label-text">Price</span>
							</div>
							<input
								name="price"
								type="text"
								placeholder="100 DT"
								class="input input-bordered w-full"
								value={0}
							/>
						</label>
					</div>
				</div>
				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">Store Link</span>
					</div>
					<input name="store_link" type="text" placeholder="" class="input input-bordered w-full" />
				</label>
			</div>
			<div class="w-full flex flex-col gap-8 rounded-container">
				<div class="divider divider-start text-4xl font-bold">Trade</div>
				<SearchBar on:click={handleGameTrade} />
				<div class="h-full flex flex-wrap justify-center items-center gap-6">
					{#each tradeGames as game}
						<div class="flex flex-col gap-2">
							<img src={getGameCover(game.cover.image_id)} alt="game" class="rounded-xl w-32" />
							<button
								on:click={() => {
									removeGameTrade(game.id);
								}}
								type="button"
								class="btn rounded-full">Remove</button
							>
						</div>
					{/each}
				</div>
			</div>
			<input name="game_id" type="text" class="hidden" bind:value={selectedGameDetails.id} />
			<input name="trade" type="text" class="hidden" value={JSON.stringify(tradeGames)} />
			<button type="submit" class="btn btn-neutral rounded-full">Publish Listing</button>
		</form>
	{/if}
</div>
