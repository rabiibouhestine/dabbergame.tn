<script>
	import ListingCard from '$lib/components/ListingCard.svelte';

	let listings = Array.from({ length: 15 }, (_, index) => index + 1);
</script>

<div class="flex flex-col gap-y-10 w-full max-w-5xl mx-auto my-10 px-4">
	<div class="flex flex-wrap justify-center gap-8">
		{#each listings as listing}
			<ListingCard />
		{/each}
	</div>
</div>
