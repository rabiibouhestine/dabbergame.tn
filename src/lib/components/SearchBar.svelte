<script>
	let search = '';
	let games = [];
	let timeout;
	let searching = false;

	function handle_search() {
		searching = true;
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(get_games, 300);
	}

	async function get_games() {
		if (!search) {
			reset();
			return;
		}

		const response = await fetch('/api/games?search=' + search);
		const data = await response.json();

		games = data ? data : [];
		searching = false;
	}

	function handleError(e) {
		alert('Something went wrong.' + e);
		reset();
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
		on:input={handle_search}
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
					<a on:click={reset} href={'/listings/' + game.id} class="flex gap-3">
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
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
