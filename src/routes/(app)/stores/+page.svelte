<script>
	import StoreCard from '$lib/components/StoreCard.svelte';

	import InfoIcon from '~icons/mdi/information-slab-circle-outline';
	import StoreIcon from '~icons/mdi/store';
</script>

<div class="flex flex-col gap-y-8">
	<h2 class="flex gap-2 text-4xl font-bold pb-3 border-b border-neutral"><StoreIcon />Stores</h2>
	<div role="alert" class="alert bg-base-100 text-neutral-content">
		<InfoIcon />
		<span>
			Upgrade to a <a href="/" class="link link-secondary">Store Account</a> for free (forever) and benefit
			from an elevated experience filled with premium features tailored for professionals.
		</span>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
		{#each [1, 2, 3, 4] as listing}
			<div class="bg-base-100 rounded-xl overflow-hidden">
				<div
					class="w-full h-[80px] relative bg-gradient-to-tr from-accent via-primary to-secondary"
				>
					<!-- <img
					src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
					alt="profile"
					class="w-full h-full object-cover"
				/> -->
				</div>
				<div class="flex flex-col gap-2 items-center pb-4 -mt-8">
					<div class="avatar placeholder">
						<div
							class="bg-neutral text-neutral-content rounded-full w-16 outline outline-8 outline-base-100"
						>
							<span class="text-3xl font-bold">{'firstName'[0] + 'lastName'[0]}</span>
						</div>
					</div>
					<div class="text-center">
						<h2 class="text-xl font-bold">{'Rabii' + ' ' + 'Bouhestine'}</h2>
						<p class="text-sm text-slate-300">{'Ben Arous' + ', ' + 'El Mourouj'}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
