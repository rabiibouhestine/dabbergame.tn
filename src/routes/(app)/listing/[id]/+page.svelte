<script>
	import GameCover from '$lib/components/GameCover.svelte';
	import UserCard from '$lib/components/UserCard.svelte';
	import GameDetails from '$lib/components/GameDetails.svelte';

	import { getGameCover } from '$lib/utils/igdbUtils';

	import CheckCircleOutlineRounded from '~icons/material-symbols/check-circle-outline-rounded';
	import CancelOutlineRounded from '~icons/material-symbols/cancel-outline-rounded';
	import ListingDeleteIcon from '~icons/mdi/tag-minus-outline';
	import PhoneIcon from '~icons/mdi/phone';
	import AccountArrowRight from '~icons/mdi/account-arrow-right';
	import AccountPlus from '~icons/mdi/account-plus';

	export let data;
	$: listing = data.listing;

	let deleteModal;
	let phoneModal;
</script>

<div class="flex flex-col md:flex-row items-center md:items-start gap-10">
	<div class="w-52 min-w-52 flex flex-col gap-3 items-center">
		<a
			href="/listings?gameId={listing.game_id}&gameName={listing.game_name}&platform={listing.listing_platform}"
			class="flex flex-col gap-3 group"
		>
			<div class="transition ease-in-out group-hover:scale-105">
				<GameCover
					platform={listing.listing_platform}
					platformFamily={listing.listing_platform_family}
					coverImageId={listing.game_cover}
				/>
			</div>
			<span
				class="w-full badge badge-secondary rounded-full text-lg font-bold h-12 transition ease-in-out group-hover:-translate-y-4"
			>
				{listing.listing_price} DT
			</span>
		</a>
		<button
			on:click={() => {
				phoneModal.showModal();
			}}
			class="w-full btn btn-outline btn-secondary rounded-full text-lg font-bold"
		>
			<PhoneIcon /> Phone
		</button>
		{#if data.session && data.session.user.id === listing.profiles.id}
			<button
				on:click={() => {
					deleteModal.showModal();
				}}
				class="w-full btn btn-outline btn-warning rounded-full text-lg font-bold"
			>
				<ListingDeleteIcon /> Delete
			</button>
		{/if}
	</div>
	<div class="flex flex-col gap-6 flex-grow">
		<div
			class="rounded-container flex flex-col gap-6"
			class:h-full={!JSON.parse(listing.listing_trade).length}
		>
			<a
				href="/listings?gameId={listing.game_id}&gameName={listing.game_name}"
				class="w-fit text-4xl font-bold hover:link hover:text-primary"
			>
				{listing.game_name}
			</a>
			<div class="flex flex-wrap gap-3">
				<div class="badge badge-neutral p-4 font-bold">
					Condition: {listing.listing_condition}
				</div>
				<div class="badge badge-neutral gap-1 p-4 font-bold">
					{#if listing.listing_delivery}
						<CheckCircleOutlineRounded class="text-success" />
					{:else}
						<CancelOutlineRounded class="text-error" />
					{/if}
					Delivery
				</div>
				<div class="badge badge-neutral gap-1 p-4 font-bold">
					{#if JSON.parse(listing.listing_trade).length}
						<CheckCircleOutlineRounded class="text-success" />
					{:else}
						<CancelOutlineRounded class="text-error" />
					{/if}
					Trade
				</div>
			</div>
			<GameDetails
				summary={listing.game_description}
				release_date={listing.game_release_date?.split('T')[0]}
				genres={listing.game_genres}
				platforms={listing.game_platforms}
				website={listing.game_website}
				wikipedia={listing.game_wikipedia}
				youtube={listing.game_youtube}
				steam={listing.game_steam}
				epicgames={listing.game_epicgames}
			/>
		</div>
		{#if JSON.parse(listing.listing_trade).length}
			<div class="w-full flex flex-col gap-6 rounded-container">
				<h2 class="text-4xl font-bold">Trade Games</h2>
				<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
					{#each JSON.parse(listing.listing_trade) as game}
						<a href="/listings/{game.id}" class="transition ease-in-out hover:scale-105">
							<img src={getGameCover(game.cover.image_id)} alt="game" class="rounded-lg" />
						</a>
					{/each}
				</div>
			</div>
		{/if}
		<UserCard
			id={listing.profiles.id}
			firstName={listing.profiles.first_name}
			lastName={listing.profiles.last_name}
			state={listing.profiles.cities.state}
			city={listing.profiles.cities.city}
		/>
	</div>
</div>

<dialog bind:this={deleteModal} class="modal">
	<div class="modal-box">
		<h3 class="font-bold text-lg">Deleting Listing!</h3>
		<p class="py-4">Are you sure you want to delete your listing?</p>
		<div class="modal-action">
			<form method="POST" action="?/delete">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn rounded-full btn-accent">Delete</button>
			</form>
			<button
				on:click={() => {
					deleteModal.close();
				}}
				class="btn rounded-full">Cancel</button
			>
		</div>
	</div>
</dialog>

<dialog bind:this={phoneModal} class="modal">
	<div class="modal-box">
		{#if data.session}
			<h3 class="font-bold text-lg text-center">+216 {listing.profiles.phone}</h3>
		{:else}
			<h3 class="font-bold text-lg">Sign in to see the phone number</h3>
			<div class="modal-action">
				<div class="flex">
					<a href="/login" class="btn rounded-l-full px-3">
						<AccountArrowRight class="text-xl" />Sign in
					</a>
					<a href="/register" class="btn rounded-r-full btn-neutral px-3">
						<AccountPlus class="text-xl" />
					</a>
				</div>
			</div>
		{/if}
	</div>

	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
