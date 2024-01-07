<script>
	import Launch from '~icons/mdi/launch';
	import Wikipedia from '~icons/mdi/wikipedia';
	import Youtube from '~icons/mdi/youtube';
	import Steam from '~icons/mdi/steam';
	import Epicgames from '~icons/simple-icons/epicgames';

	export let game;
</script>

<div class="rounded-container grid grid-cols-1 sm:grid-cols-4 gap-10 mb-8">
	<div class="col-span-1 flex flex-col justify-center md:justify-start items-center gap-4">
		<img
			src="https://images.igdb.com/igdb/image/upload/t_cover_big/{game.cover.image_id}.jpg"
			alt="game"
			class="rounded-xl w-full"
		/>
	</div>
	<div class="col-span-3 flex flex-col gap-6">
		<h2 class="text-5xl font-bold">
			{game.name}
		</h2>
		<div class="flex flex-col gap-4">
			<p class="line-clamp-4">{game.summary}</p>
			<p>Genres: {game.genres.map((genre) => genre.name).join(', ')}</p>
			<p>Platforms: {game.platforms.map((platform) => platform.name).join(', ')}</p>
		</div>
		<div class="flex flex-wrap gap-3 justify-between">
			{#if game.websites}
				<div class="flex gap-3">
					{#if game.websites.find((site) => site.category === 1)}
						<a
							href={game.websites.find((site) => site.category === 1).url}
							target="_blank"
							class="btn btn-circle"
						>
							<Launch />
						</a>
					{/if}
					{#if game.websites.find((site) => site.category === 3)}
						<a
							href={game.websites.find((site) => site.category === 3).url}
							target="_blank"
							class="btn btn-circle"
						>
							<Wikipedia />
						</a>
					{/if}
					{#if game.websites.find((site) => site.category === 9)}
						<a
							href={game.websites.find((site) => site.category === 9).url}
							target="_blank"
							class="btn btn-circle"
						>
							<Youtube />
						</a>
					{/if}
					{#if game.websites.find((site) => site.category === 13)}
						<a
							href={game.websites.find((site) => site.category === 13).url}
							target="_blank"
							class="btn btn-circle"
						>
							<Steam />
						</a>
					{/if}
					{#if game.websites.find((site) => site.category === 16)}
						<a
							href={game.websites.find((site) => site.category === 16).url}
							target="_blank"
							class="btn btn-circle"
						>
							<Epicgames />
						</a>
					{/if}
				</div>
			{/if}
			{#if game.aggregated_rating}
				<div class="flex items-center bg-base-100 rounded-full px-4 py-2 text-center font-bold">
					Rating: {Math.round(game.aggregated_rating)}
				</div>
			{/if}
		</div>
	</div>
</div>
