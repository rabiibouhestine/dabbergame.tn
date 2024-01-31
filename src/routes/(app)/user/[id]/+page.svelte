<script>
	import ProfileCard from '$lib/components/ProfileCard.svelte';
	import ListingCard from '$lib/components/ListingCard.svelte';

	import ListingsIcon from '~icons/mdi/tag-multiple';
	import ListingEditIcon from '~icons/mdi/tag-edit-outline';
	import ListingDeleteIcon from '~icons/mdi/tag-minus-outline';

	export let data;
	$: profile = data.profile;
	$: listings = data.listings;

	let selectedPlatform = 'All Platforms';

	$: if (selectedPlatform === 'All Platforms') {
		listings = data.listings;
	} else {
		listings = data.listings.filter((listing) => listing.listing_platform === selectedPlatform);
	}
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
		<h2 class="flex gap-2 text-4xl font-bold"><ListingsIcon />Listings</h2>
		<select class="select select-bordered rounded-full" bind:value={selectedPlatform}>
			<option selected>All Platforms</option>
			<option>PlayStation 5</option>
			<option>Xbox Series X|S</option>
		</select>
	</div>
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
		{#each listings as listing (listing.id)}
			<div class="flex flex-col">
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
				<div class="flex flex-col gap-2">
					<button class="w-full btn btn-sm btn-outline btn-info rounded-full font-bold">
						<ListingEditIcon /> Edit
					</button>
					<button class="w-full btn btn-sm btn-outline btn-warning rounded-full font-bold">
						<ListingDeleteIcon /> Delete
					</button>
				</div>
			</div>
		{/each}
	</div>
</div>
