<script>
	import StoreIcon from '~icons/mdi/store';
	import Facebook from '~icons/mdi/facebook';
	import Phone from '~icons/mdi/phone';
	import Cog from '~icons/mdi/cog';

	export let isStore = false;
	export let firstName = 'John';
	export let lastName = 'Doe';
	export let state = 'State';
	export let city = 'City';

	export let showSettingsButton = false;
</script>

<div class="bg-base-100 rounded-3xl overflow-hidden">
	<div class="w-full h-[250px] relative bg-gradient-to-tr from-accent via-primary to-secondary">
		{#if showSettingsButton}
			<a href="/user-settings" class="absolute right-4 top-4 btn btn-neutral btn-circle">
				<Cog class="text-xl" />
			</a>
		{/if}
		{#if isStore}
			<img
				src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
				alt="profile"
				class="w-full h-full object-cover"
			/>
		{/if}
	</div>
	<div class="flex flex-col justify-between items-center gap-4 pb-8 -mt-20">
		<div class="avatar placeholder" class:indicator={isStore}>
			{#if isStore}
				<span
					class="indicator-item indicator-top indicator-start rounded-full bg-secondary text-base-100 text-4xl p-3 m-4"
				>
					<StoreIcon />
				</span>
			{/if}
			<div
				class="bg-neutral text-neutral-content rounded-full w-40 outline outline-8 outline-base-100"
			>
				<span class="text-6xl font-bold">{firstName[0] + lastName[0]}</span>
			</div>
		</div>
		<div class="text-center">
			<h2 class="text-4xl font-bold">{firstName + ' ' + lastName}</h2>
			<p class="text-slate-300">{state + ', ' + city}</p>
			{#if !isStore}
				<p class="text-sm text-slate-400">Joined 1 month ago</p>
			{/if}
		</div>
		<div class="flex justify-center gap-3">
			<a href="/listings" class="btn btn-neutral btn-circle">
				<Phone class="text-xl" />
			</a>
			<a href="/listings" class="btn btn-neutral btn-circle">
				<Facebook class="text-xl" />
			</a>
		</div>
	</div>
</div>
