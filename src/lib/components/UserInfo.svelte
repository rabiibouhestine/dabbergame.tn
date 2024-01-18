<script>
	import StoreIcon from '~icons/mdi/store';

	export let firstName = 'John';
	export let lastName = 'Doe';
	export let state = 'Tunis';
	export let city = 'Tunis';

	export let isStore = false;
</script>

<div class="flex gap-2 items-center">
	<div class="avatar placeholder" class:indicator={isStore}>
		{#if isStore}
			<span
				class="indicator-item indicator-bottom indicator-center badge badge-secondary text-xs badge-xs text-base-100 p-0.5 py-2"
			>
				<StoreIcon />
			</span>
		{/if}
		<div class="bg-neutral text-neutral-content rounded-full w-8">
			<span class="font-bold text-sm">{firstName[0] + lastName[0]}</span>
		</div>
	</div>
	<div>
		<h2 class="line-clamp-1 font-bold text-sm">{firstName + ' ' + lastName}</h2>
		<p class="line-clamp-1 text-xs text-neutral-content">
			{state + ', ' + city}
		</p>
	</div>
</div>
