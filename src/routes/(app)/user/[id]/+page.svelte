<script>
	import ListingCard from '$lib/components/ListingCard.svelte';

	import SortIcon from '~icons/mdi/sort';
	import ListingsIcon from '~icons/mdi/tag-multiple';
	import Facebook from '~icons/mdi/facebook';
	import Phone from '~icons/mdi/phone';
	import Cog from '~icons/mdi/cog';

	export let data;
	$: profile = data.profile;
	$: console.log(data.profile);
</script>

<div class="flex flex-col gap-10">
	<div class="bg-base-100 rounded-3xl overflow-hidden">
		<div class="w-full h-[250px] relative bg-base-200">
			<a href="/user-settings" class="absolute right-4 top-4 btn btn-neutral btn-circle">
				<Cog class="text-xl" />
			</a>
			{#if profile.is_store}
				<img
					src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
					alt="profile"
					class="w-full h-full object-cover"
				/>
			{/if}
		</div>
		<div class="flex flex-col justify-between items-center gap-4 pb-8 -mt-20">
			<div class="avatar placeholder">
				<div
					class="bg-neutral text-neutral-content rounded-full w-40 outline outline-8 outline-base-100"
				>
					<span class="text-6xl font-bold">{profile?.first_name[0] + profile?.last_name[0]}</span>
				</div>
			</div>
			<div class="text-center">
				<h2 class="text-4xl font-bold">{profile?.first_name + ' ' + profile?.last_name}</h2>
				<p class="text-slate-300">{profile?.cities.state + ', ' + profile?.cities.city}</p>
				<p class="text-sm text-slate-400">Joined 1 month ago</p>
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
	<h2 class="flex gap-2 text-4xl font-bold pb-3 border-b border-neutral">
		<ListingsIcon />Listings
	</h2>
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
