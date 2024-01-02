<script>
	import ListingCard from '$lib/components/ListingCard.svelte';

	let listings = Array.from({ length: 10 }, (_, index) => index + 1);
</script>

<div class="h-72 bg-neutral py-6">
	<div
		class="flex flex-col sm:flex-row gap-6 sm:justify-between items-center h-full w-full max-w-5xl mx-auto px-4"
	>
		<div class="flex gap-2 items-center">
			<div class="avatar placeholder">
				<div class="bg-base-200 text-neutral-content rounded-full w-24 h-24">
					<span class="text-xs">Ls</span>
				</div>
			</div>
			<div>
				<h2 class="text-3xl font-bold">Foulen Ben Falten</h2>
				<p class="text-lg font-bold">Ben Arous, El Mourouj</p>
				<p class="text-lg">Last seen 1 month ago</p>
			</div>
		</div>
		<div class="text-4xl">Rating: 4/5</div>
	</div>
</div>
<div class="flex justify-between w-full max-w-5xl mx-auto px-4 -mt-4">
	<div>
		<span class="bg-base-300 rounded-full px-6 py-4 text-2xl font-bold">Listings</span>
	</div>
	<div>
		<span class="bg-base-300 rounded-full px-6 py-4 text-2xl font-bold">Ph</span>
		<span class="bg-base-300 rounded-full px-6 py-4 text-2xl font-bold">Fb</span>
	</div>
</div>
<div class="w-full max-w-5xl mx-auto px-4 my-16">
	<div class="flex flex-wrap justify-center gap-8">
		{#each listings as listing}
			<ListingCard />
		{/each}
	</div>
</div>
