<script>
	import ListingCard from '$lib/components/ListingCard.svelte';

	let listings = Array.from({ length: 15 }, (_, index) => index + 1);
</script>

<div class="flex flex-wrap justify-center gap-8">
	{#each listings as listing}
		<ListingCard />
	{/each}
</div>
