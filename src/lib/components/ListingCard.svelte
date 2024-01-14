<script>
	import GameCover from '$lib/components/GameCover.svelte';
	import UserInfo from '$lib/components/UserInfo.svelte';

	export let showPrice = true;
	export let showUserInfo = true;
	export let listing = {};
</script>

<div class="flex flex-col gap-3">
	<a
		href="/listing/{listing.id}"
		class="flex flex-col gap-3 group transition ease-in-out hover:scale-110"
	>
		<GameCover platform={listing.listing_platform} coverImageId={listing.game_cover} />
		{#if showPrice}
			<div
				class="badge badge-neutral p-4 w-full text-2xl font-bold transition ease-in-out group-hover:badge-secondary group-hover:-translate-y-8"
			>
				{listing.listing_price} DT
			</div>
		{/if}
	</a>
	<a href="/" class="transition ease-in-out hover:scale-105 hover:text-secondary">
		{#if showUserInfo}
			<UserInfo user={listing.profiles} />
		{/if}
	</a>
</div>
