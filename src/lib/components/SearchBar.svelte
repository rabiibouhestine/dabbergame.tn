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
		<ul class="absolute w-full mt-2 z-[1] menu p-2 shadow bg-base-100 rounded-box">
			{#each games as game}
				<li>
					<a on:click={reset} href={'/listings/' + game.id}>
						{game.name} ({new Date(game.first_release_date * 1000).getFullYear()})
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
