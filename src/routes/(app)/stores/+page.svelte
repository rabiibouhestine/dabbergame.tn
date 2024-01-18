<script>
	import StoreCard from '$lib/components/StoreCard.svelte';

	import InfoIcon from '~icons/mdi/information-slab-circle-outline';
	import StoreIcon from '~icons/mdi/store';
</script>

<div class="flex flex-col gap-y-10">
	<h2 class="flex gap-2 text-4xl font-bold pb-1 border-b border-neutral"><StoreIcon />Stores</h2>
	<div class="flex flex-col gap-y-8">
		{#each [1, 2, 3, 4, 5, 6] as listing}
			<StoreCard />
		{/each}
	</div>
	<div role="alert" class="alert bg-base-100">
		<InfoIcon />
		<span>
			Upgrade to a <a href="/" class="link link-primary">Store Account</a> for free (forever) and benefit
			from an elevated experience filled with premium features tailored for professionals.
		</span>
	</div>
</div>
