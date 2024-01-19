<script>
	import StoreIcon from '~icons/mdi/store';

	export let firstName = 'John';
	export let lastName = 'Doe';
	export let state = 'State';
	export let city = 'City';

	export let isStore = false;
</script>

<div class="bg-base-100 rounded-xl overflow-hidden">
	<div class="w-full h-[80px] relative bg-gradient-to-tr from-accent via-primary to-secondary">
		{#if isStore}
			<img
				src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
				alt="profile"
				class="w-full h-full object-cover"
			/>
		{/if}
	</div>
	<div class="flex flex-col gap-2 items-center pb-4 -mt-8">
		<div class="avatar placeholder" class:indicator={isStore}>
			{#if isStore}
				<span
					class="indicator-item indicator-bottom indicator-center badge badge-xs badge-secondary font-bold text-base-100 py-2"
				>
					<StoreIcon /> Store
				</span>
			{/if}
			<div
				class="bg-neutral text-neutral-content rounded-full w-16 outline outline-8 outline-base-100"
			>
				{#if isStore}
					<img
						src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
						alt="profile"
						class="w-full h-full object-cover"
					/>
				{:else}
					<span class="text-2xl font-bold">{firstName[0] + lastName[0]}</span>
				{/if}
			</div>
		</div>
		<div class="text-center">
			<h2 class="text-xl font-bold">{firstName + ' ' + lastName}</h2>
			<p class="text-sm text-slate-300">{state + ', ' + city}</p>
		</div>
	</div>
</div>
