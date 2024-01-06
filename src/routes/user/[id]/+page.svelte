<script>
	import ListingCard from '$lib/components/ListingCard.svelte';
	import UserCard from '$lib/components/UserCard.svelte';

	let listings = Array.from({ length: 5 }, (_, index) => index + 1);
</script>

<div class="flex flex-col gap-8">
	<UserCard />
	<div class="divider divider-start text-4xl font-bold">Listings</div>
	<div class="flex flex-wrap justify-center gap-8">
		{#each listings as listing}
			<ListingCard />
		{/each}
	</div>
</div>
