<script>
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
		<div class="avatar placeholder">
			<div
				class="bg-neutral text-neutral-content rounded-full w-16 outline outline-8 outline-base-100"
			>
				<span class="text-3xl font-bold">{firstName[0] + lastName[0]}</span>
			</div>
		</div>
		<div class="text-center">
			<h2 class="text-xl font-bold">{firstName + ' ' + lastName}</h2>
			<p class="text-sm text-slate-300">{state + ', ' + city}</p>
		</div>
	</div>
</div>
