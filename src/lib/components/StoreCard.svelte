<script>
	import Facebook from '~icons/mdi/facebook';
	import Instagram from '~icons/mdi/instagram';
	import Phone from '~icons/mdi/phone';
	import Store from '~icons/mdi/store';

	export let profile;
</script>

<div class="rounded-container flex flex-col justify-between items-center gap-8">
	<div class="flex flex-col gap-4 items-center">
		<div class="avatar placeholder">
			<div class="bg-neutral text-neutral-content rounded-full w-24">
				<span class="font-bold">{profile?.first_name[0] + profile?.last_name[0]}</span>
			</div>
		</div>
		<div class="text-center">
			<h2 class="text-3xl font-bold">{profile?.first_name + ' ' + profile?.last_name}</h2>
			<p class="text-lg text-neutral-content">
				{profile?.cities.state + ', ' + profile?.cities.city}
			</p>
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
