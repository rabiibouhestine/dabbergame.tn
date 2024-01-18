<script>
	import StoreIcon from '~icons/mdi/store';
	import FacebookIcon from '~icons/mdi/facebook';
	import PhoneIcon from '~icons/mdi/phone';
	import Instagram from '~icons/mdi/instagram';

	export let id = '';
	export let firstName = 'John';
	export let lastName = 'Doe';
	export let state = 'State';
	export let city = 'City';

	export let facebookLink;
	export let instagramLink;
	export let storeLink;
</script>

<div class="bg-base-100 rounded-3xl overflow-hidden">
	<div class="w-full h-[150px] relative bg-gradient-to-tr from-accent via-primary to-secondary">
		<img
			src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
			alt="profile"
			class="w-full h-full object-cover"
		/>
	</div>
	<div class="flex flex-col justify-between items-center gap-4 pb-4 -mt-14">
		<a
			href="/user/{id}"
			class="flex flex-col gap-2 items-center transition ease-in-out hover:scale-105"
		>
			<div class="avatar placeholder">
				<div
					class="bg-neutral text-neutral-content rounded-full w-28 outline outline-8 outline-base-100"
				>
					<span class="text-5xl font-bold">{firstName[0] + lastName[0]}</span>
				</div>
			</div>
			<div class="text-center">
				<h2 class="text-4xl font-bold">{firstName + ' ' + lastName}</h2>
				<p class="text-slate-300">{state + ', ' + city}</p>
			</div>
		</a>
		<div class="flex justify-center gap-3">
			<a href="/" class="btn btn-neutral btn-circle">
				<PhoneIcon class="text-xl" />
			</a>
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
		</div>
	</div>
</div>
