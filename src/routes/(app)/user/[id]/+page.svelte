<script>
	import ListingCard from '$lib/components/ListingCard.svelte';
	import UserCard from '$lib/components/UserCard.svelte';

	export let data;
</script>

<div class="flex flex-col gap-8">
	<UserCard profile={data.profile} />
	<div class="divider divider-start text-4xl font-bold">Listings</div>
	<div class="flex flex-wrap justify-center gap-8">
		{#each data.listings as listing}
			<ListingCard />
		{/each}
	</div>
</div>
