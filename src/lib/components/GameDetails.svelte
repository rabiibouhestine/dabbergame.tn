<script>
	import Launch from '~icons/mdi/launch';
	import Wikipedia from '~icons/mdi/wikipedia';
	import Youtube from '~icons/mdi/youtube';
	import Steam from '~icons/mdi/steam';
	import Epicgames from '~icons/simple-icons/epicgames';

	export let summary;
	export let release_date;
	export let genres;
	export let platforms;
	export let website;
	export let wikipedia;
	export let youtube;
	export let steam;
	export let epicgames;
	export let rating;
</script>

<div class="flex flex-col gap-4">
	<p class="line-clamp-4">
		{summary}
	</p>
	<p>
		<span class="font-bold">Release Date: </span>
		{release_date}
	</p>
	<p>
		<span class="font-bold">Genres: </span>
		{genres.map((genre) => genre.name).join(', ')}
	</p>
	<p>
		<span class="font-bold">Platforms: </span>
		{platforms.map((platform) => platform.name).join(', ')}
	</p>
</div>
<div class="flex flex-wrap justify-between items-end">
	<div class="flex flex-wrap gap-3">
		{#if website}
			<a href={website} target="_blank" class="btn btn-neutral btn-circle">
				<Launch class="text-xl" />
			</a>
		{/if}
		{#if wikipedia}
			<a href={wikipedia} target="_blank" class="btn btn-neutral btn-circle">
				<Wikipedia class="text-xl" />
			</a>
		{/if}
		{#if youtube}
			<a href={youtube} target="_blank" class="btn btn-neutral btn-circle">
				<Youtube class="text-xl" />
			</a>
		{/if}
		{#if steam}
			<a href={steam} target="_blank" class="btn btn-neutral btn-circle">
				<Steam class="text-xl" />
			</a>
		{/if}
		{#if epicgames}
			<a href={epicgames} target="_blank" class="btn btn-neutral btn-circle">
				<Epicgames class="text-xl" />
			</a>
		{/if}
	</div>
	<div class="badge badge-neutral p-4 font-bold">
		Rating: {Math.round(rating)}
	</div>
</div>
