<script>
	import ListingCard from '$lib/components/ListingCard.svelte';

	import SortIcon from '~icons/mdi/sort';
	import ListingsIcon from '~icons/mdi/tag-multiple';
	import Facebook from '~icons/mdi/facebook';
	import Phone from '~icons/mdi/phone';
	import Cog from '~icons/mdi/cog';

	export let data;
	$: profile = data.profile;
</script>

<div class="flex flex-col gap-8">
	<div class="rounded-container flex flex-col justify-between gap-8">
		<div class="flex flex-col gap-4 items-center">
			<div class="avatar placeholder">
				<div class="bg-neutral text-neutral-content rounded-full w-24">
					<span class="text-3xl font-bold">{profile?.first_name[0] + profile?.last_name[0]}</span>
				</div>
			</div>
			<div class="text-center">
				<h2 class="text-4xl font-bold">{profile?.first_name + ' ' + profile?.last_name}</h2>
				<p class="text-lg">{profile?.cities.state + ', ' + profile?.cities.city}</p>
				<p class="text-lg text-neutral-content">Joined 1 month ago</p>
			</div>
		</div>
		<div class="flex justify-center gap-3">
			<a href="/listings" class="btn btn-neutral btn-circle">
				<Phone class="text-xl" />
			</a>
			<a href="/listings" class="btn btn-neutral btn-circle">
				<Facebook class="text-xl" />
			</a>
			<a href="/user-settings" class="btn btn-outline btn-accent btn-circle">
				<Cog class="text-xl" />
			</a>
		</div>
	</div>
	<div
		class="w-full flex gap-4 flex-col sm:flex-row justify-between sm:items-end pb-4 border-b border-neutral"
	>
		<div>
			<h2 class="flex gap-2 text-4xl font-bold"><ListingsIcon />Listings</h2>
			<p class="mt-2 text-neutral-content text-xs sm:text-sm">
				{'state' + ', ' + 'city' + ', ' + 'platform' + ', ' + 'sellers' + ', ' + 'sort'}
			</p>
		</div>
		<button class="btn btn-outline rounded-full">
			<SortIcon />
			Sort & Filter
		</button>
	</div>
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
		{#each data.listings as listing}
			<ListingCard
				showUserInfo={false}
				id={listing.id}
				platform={listing.listing_platform}
				platformFamily={listing.listing_platform_family}
				coverImageId={listing.game_cover}
				price={listing.listing_price}
				userId={listing?.profiles?.id}
				userFirstName={listing?.profiles?.first_name}
				userLastName={listing?.profiles?.last_name}
				userState={listing?.profiles?.cities?.state}
				userCity={listing?.profiles?.cities?.city}
			/>
		{/each}
	</div>
</div>
