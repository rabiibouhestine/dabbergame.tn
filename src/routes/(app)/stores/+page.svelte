<script>
	import StoreCard from '$lib/components/StoreCard.svelte';
	import InfoIcon from '~icons/mdi/information-slab-circle-outline';
</script>

<div class="flex flex-col gap-y-10">
	<div class="divider divider-start text-4xl font-bold">Stores</div>
	<div class="flex flex-col gap-y-8">
		{#each [1, 2, 3, 4, 5, 6] as listing}
			<StoreCard />
		{/each}
	</div>
	<div role="alert" class="alert">
		<InfoIcon />
		<span>
			Upgrade to a <a href="/" class="link link-primary">Store Account</a> for free (forever) and benefit
			from an elevated experience filled with premium features tailored for professionals.
		</span>
	</div>
</div>
