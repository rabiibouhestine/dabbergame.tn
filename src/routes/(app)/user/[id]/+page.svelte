<script>
	import ProfileCard from '$lib/components/ProfileCard.svelte';
	import ListingCard from '$lib/components/ListingCard.svelte';

	import SortIcon from '~icons/mdi/sort';
	import ListingsIcon from '~icons/mdi/tag-multiple';

	export let data;
	$: profile = data.profile;
</script>

<div class="flex flex-col gap-10">
	<ProfileCard
		isStore={profile.is_store}
		firstName={profile.first_name}
		lastName={profile.last_name}
		state={profile.cities.state}
		city={profile?.cities.city}
		showSettingsButton={data.session && data.session.user.id === data.profile.id}
	/>
	<div
		class="w-full flex gap-4 flex-col sm:flex-row justify-between sm:items-end pb-3 border-b border-neutral"
	>
		<div>
			<h2 class="flex gap-2 text-4xl font-bold"><ListingsIcon />Listings</h2>
			<p class="mt-2 text-neutral-content text-xs sm:text-sm">
				{'All Platforms' + ', ' + 'getSortLabel(sort)'}
			</p>
		</div>
		<button
			class="btn btn-outline rounded-full"
			on:click={() => {
				'filtersModal.showModal();';
			}}
		>
			<SortIcon />
			Sort & Filter
		</button>
	</div>
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
		{#each data.listings as listing (listing.id)}
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
