<script>
	import ListingCard from '$lib/components/ListingCard.svelte';
	import Steam from '~icons/mdi/steam';
	import Twitch from '~icons/mdi/twitch';
	import Reddit from '~icons/mdi/reddit';

	export let data;
	console.log(data);
	let listings = Array.from({ length: 15 }, (_, index) => index + 1);
</script>

<div class="flex flex-col gap-y-8 w-full max-w-5xl mx-auto my-10 px-4">
	<div class="bg-neutral rounded-3xl grid grid-cols-1 sm:grid-cols-4 gap-10 p-6 mb-8">
		<div class="col-span-1 flex flex-col justify-center md:justify-start items-center gap-4">
			<img
				src="https://images.igdb.com/igdb/image/upload/t_cover_big/{data.game[1].result[0]
					.image_id}.jpg"
				alt="game"
				class="bg-red-600 rounded-xl w-full"
			/>
		</div>
		<div class="col-span-3 flex flex-col gap-6">
			<h2 class="text-5xl font-bold line-clamp-1 leading-tight">
				{data.game[0].result[0].name}
			</h2>
			<div class="flex flex-col gap-4">
				<p class="line-clamp-4">{data.game[0].result[0].summary}</p>
				<p>Genre: {data.game[0].result[0].genres}</p>
				<p>Platforms: {data.game[0].result[0].platforms}</p>
			</div>
			<div class="flex justify-between">
				<div class="flex gap-3">
					<a
						href="/listings"
						class="flex justify-center items-center bg-base-200 text-neutral-content rounded-full w-10 h-10"
					>
						<Steam />
					</a>
					<a
						href="/listings"
						class="flex justify-center items-center bg-base-200 text-neutral-content rounded-full w-10 h-10"
					>
						<Twitch />
					</a>
					<a
						href="/listings"
						class="flex justify-center items-center bg-base-200 text-neutral-content rounded-full w-10 h-10"
					>
						<Reddit />
					</a>
				</div>
				<div class="flex gap-3">
					<a
						href="/listings"
						class="flex justify-center items-center bg-base-200 text-neutral-content rounded-full w-10 h-10"
					>
						<span class="text-md">{Math.round(data.game[0].result[0].aggregated_rating)}</span>
					</a>
					<a
						href="/listings"
						class="flex justify-center items-center bg-base-200 text-neutral-content rounded-full w-10 h-10"
					>
						<span class="text-md">{Math.round(data.game[0].result[0].rating)}</span>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="flex justify-between">
		<div class="flex items-center gap-3">
			<select class="select select-bordered rounded-full">
				<option disabled selected>All States</option>
				<option>Tunis</option>
				<option>Sousse</option>
			</select>
			<select class="select select-bordered rounded-full">
				<option disabled selected>All Platforms</option>
				<option>PS5</option>
				<option>XBSX</option>
			</select>
			<select class="select select-bordered rounded-full">
				<option disabled selected>All Sellers</option>
				<option>People</option>
				<option>Stores</option>
			</select>
		</div>
		<select class="select select-bordered rounded-full">
			<option disabled selected>Sort by date</option>
			<option>Sort by price</option>
			<option>Sort by date</option>
		</select>
	</div>
	<div class="divider divider-start text-4xl font-bold">Listings</div>
	<div class="flex flex-wrap justify-center gap-8">
		{#each listings as listing}
			<ListingCard />
		{/each}
	</div>
	<div class="join flex mt-8">
		<button class="join-item btn">«</button>
		<div class="flex flex-1 justify-center bg-neutral rounded-none">
			<button class="join-item btn">1</button>
			<button class="join-item btn">2</button>
			<button class="join-item btn btn-disabled">...</button>
			<button class="join-item btn">99</button>
			<button class="join-item btn">100</button>
		</div>
		<button class="join-item btn">»</button>
	</div>
</div>
