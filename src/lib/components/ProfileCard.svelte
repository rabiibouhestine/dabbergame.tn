<script>
	import StoreIcon from '~icons/mdi/store';
	import FacebookIcon from '~icons/mdi/facebook';
	import PhoneIcon from '~icons/mdi/phone';
	import CogIcon from '~icons/mdi/cog';
	import Instagram from '~icons/mdi/instagram';

	export let isStore = false;
	export let firstName = 'John';
	export let lastName = 'Doe';
	export let state = 'State';
	export let city = 'City';

	export let facebookLink;
	export let instagramLink;
	export let storeLink;

	export let showSettingsButton = false;
</script>

<div class="bg-base-100 rounded-3xl overflow-hidden">
	<div class="w-full h-[250px] relative bg-gradient-to-tr from-accent via-primary to-secondary">
		{#if showSettingsButton}
			<a href="/user-settings" class="absolute right-4 top-4 btn btn-neutral btn-circle">
				<CogIcon class="text-xl" />
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
					class="indicator-item indicator-bottom indicator-center badge badge-secondary font-bold py-4"
				>
					<StoreIcon /> Store
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
			<a href="/" class="btn btn-neutral btn-circle">
				<PhoneIcon class="text-xl" />
			</a>
			{#if isStore}
				{#if facebookLink}
					<a href="/" class="btn btn-neutral btn-circle">
						<FacebookIcon class="text-xl" />
					</a>
				{/if}
				{#if instagramLink}
					<a href="/" class="btn btn-neutral btn-circle">
						<Instagram class="text-xl" />
					</a>
				{/if}
				{#if storeLink}
					<a href="/" class="btn btn-neutral btn-circle">
						<StoreIcon class="text-xl" />
					</a>
				{/if}
			{/if}
		</div>
	</div>
</div>
