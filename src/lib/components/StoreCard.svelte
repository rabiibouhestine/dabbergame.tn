<script>
	import Facebook from '~icons/mdi/facebook';
	import Instagram from '~icons/mdi/instagram';
	import Phone from '~icons/mdi/phone';
	import Store from '~icons/mdi/store';

	export let profile;
</script>

<div class="rounded-container flex flex-col md:flex-row justify-between items-center gap-8">
	<div class="flex flex-col md:flex-row gap-4 items-center">
		<div class="avatar placeholder">
			<div class="bg-neutral text-neutral-content rounded-full w-12">
				<span class="font-bold">{profile?.first_name[0] + profile?.last_name[0]}</span>
			</div>
		</div>
		<div class="text-center md:text-start">
			<h2 class="text-xl font-bold">{profile?.first_name + ' ' + profile?.last_name}</h2>
			<p class="text-lg font-bold">{profile?.cities.state + ', ' + profile?.cities.city}</p>
		</div>
	</div>
	<div class="flex justify-center gap-3">
		<a href="/listings" class="btn btn-neutral btn-circle">
			<Phone class="text-xl" />
		</a>
		<a href="/listings" class="btn btn-neutral btn-circle">
			<Facebook class="text-xl" />
		</a>
		<a href="/user-settings" class="btn btn-neutral btn-circle">
			<Instagram class="text-xl" />
		</a>
		<a href="/user-settings" class="btn btn-neutral btn-circle">
			<Store class="text-xl" />
		</a>
	</div>
</div>
