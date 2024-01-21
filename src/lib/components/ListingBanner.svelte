<script>
	import StoreIcon from '~icons/mdi/store';

	export let firstName = 'John';
	export let lastName = 'Doe';
	export let state = 'Tunis';
	export let city = 'Tunis';

	export let isStore = true;
</script>

<a
	href="/listing/1"
	class="flex flex-col lg:flex-row justify-between items-center gap-6 rounded-container"
>
	<div class="flex gap-2 items-center">
		<div class="avatar placeholder" class:indicator={isStore}>
			{#if isStore}
				<span
					class="indicator-item indicator-bottom indicator-center badge badge-secondary text-base-100 p-0.5 py-2"
				>
					<StoreIcon />
				</span>
			{/if}
			<div class="bg-neutral text-neutral-content rounded-full w-14">
				<span class="font-bold text-sm">{firstName[0] + lastName[0]}</span>
			</div>
		</div>
		<div>
			<h2 class="line-clamp-1 font-bold text-lg">{firstName + ' ' + lastName}</h2>
			<p class="line-clamp-1 text-neutral-content">
				{state + ', ' + city}
			</p>
		</div>
	</div>
	<div class="flex flex-wrap justify-center items-center gap-3">
		<div class="badge badge-neutral p-4 font-bold">Condition: New</div>
		<div class="badge badge-neutral p-4 font-bold">Delivery</div>
		<div class="badge badge-neutral p-4 font-bold">Trade</div>
		<div class="badge bg-playstation p-4 font-bold">Playstation 5</div>
		<div class="badge badge-secondary p-4 font-bold">200 DT</div>
	</div>
</a>
