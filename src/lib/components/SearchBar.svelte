<script>
	import { createEventDispatcher } from 'svelte';

	let search = '';
	let games = [];
	let timeout;
	let searching = false;

	const dispatch = createEventDispatcher();

	function handleSearch() {
		searching = true;
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(getGames, 600);
	}

	async function getGames() {
		if (!search) {
			reset();
			return;
		}

		const response = await fetch('/games?search=' + search);
		const data = await response.json();

		games = data ? data : [];
		searching = false;
	}

	function handleError(e) {
		reset();
		alert('Something went wrong.' + e);
	}

	function reset() {
		search = '';
		games = [];
		searching = false;
	}
</script>

<div class="w-full relative">
	<input
		bind:value={search}
		on:input={handleSearch}
		type="text"
		placeholder="Enter game title..."
		class="input input-bordered rounded-full w-full"
	/>
	{#if searching}
		<ul class="absolute w-full mt-2 z-[1] menu p-2 shadow bg-base-100 rounded-box">
			<li>
				<div>Searching...</div>
			</li>
		</ul>
	{/if}
	{#if games.length}
		<ul
			class="absolute w-full mt-2 z-[1] p-4 shadow bg-base-100 rounded-box max-h-80 flex flex-col gap-4 overflow-y-scroll"
		>
			{#each games as game}
				<li>
					<button
						on:click={() => {
							reset();
							dispatch('click', game);
						}}
						class="flex gap-3"
					>
						{#if game.cover}
							<img
								src="https://images.igdb.com/igdb/image/upload/t_cover_small/{game.cover
									.image_id}.jpg"
								alt="game"
								class="rounded-md max-w-12"
							/>
						{:else}
							<img src="https://placehold.co/90x120" alt="game" class="rounded-md max-w-12" />
						{/if}
						<div class="flex flex-col items-start">
							<h2 class="text-xl font-bold">
								{game.name}
								{#if game.first_release_date}
									({new Date(game.first_release_date * 1000).getFullYear()})
								{/if}
							</h2>
							{#if game.platforms}
								<p class="line-clamp-1">
									{game.platforms.map((platform) => platform.name).join(', ')}
								</p>
							{/if}
						</div>
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>
