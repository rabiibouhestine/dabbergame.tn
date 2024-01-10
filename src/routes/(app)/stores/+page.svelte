<script>
	import UserCard from '$lib/components/UserCard.svelte';
</script>

<div class="flex flex-col gap-y-10">
	<div class="divider divider-start text-4xl font-bold">Stores</div>
	<div class="flex flex-col gap-y-8">
		{#each [1, 2, 3, 4, 5, 6] as listing}
			<UserCard profile={{}} />
		{/each}
	</div>
</div>
