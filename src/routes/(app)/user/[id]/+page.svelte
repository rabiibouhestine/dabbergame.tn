<script>
	import ListingCard from '$lib/components/ListingCard.svelte';

	import Facebook from '~icons/mdi/facebook';
	import Phone from '~icons/mdi/phone';
	import Cog from '~icons/mdi/cog';

	export let data;
	const profile = data.profile;
</script>

<div class="flex flex-col gap-8">
	<div class="rounded-container flex flex-col md:flex-row justify-between gap-8">
		<div class="flex flex-col md:flex-row gap-4 items-center">
			<div class="avatar placeholder">
				<div class="bg-neutral text-neutral-content rounded-full w-24">
					<span class="text-3xl font-bold">{profile?.first_name[0] + profile?.last_name[0]}</span>
				</div>
			</div>
			<div class="text-center md:text-start">
				<h2 class="text-4xl font-bold">{profile?.first_name + ' ' + profile?.last_name}</h2>
				<p class="text-lg font-bold">{profile?.cities.state + ', ' + profile?.cities.city}</p>
				<p class="text-lg">Joined 1 month ago</p>
			</div>
		</div>
		<div class="flex justify-center gap-3">
			<a href="/listings" class="btn btn-circle">
				<Phone class="text-xl" />
			</a>
			<a href="/listings" class="btn btn-circle">
				<Facebook class="text-xl" />
			</a>
			<a href="/user-settings" class="btn btn-circle">
				<Cog class="text-xl" />
			</a>
		</div>
	</div>
	<div class="divider divider-start text-4xl font-bold">Listings</div>
	<div class="flex flex-wrap justify-center gap-8">
		{#each data.listings as listing}
			<ListingCard {listing} showUserInfo={false} />
		{/each}
	</div>
</div>
