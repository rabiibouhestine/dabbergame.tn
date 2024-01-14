<script>
	import GameCover from '$lib/components/GameCover.svelte';
	import UserInfo from '$lib/components/UserInfo.svelte';

	export let showPrice = true;
	export let showUserInfo = true;
	export let listing = {};
</script>

<div class="flex flex-col gap-3">
	<a href="/listing/{listing.id}" class="flex flex-col gap-3 group">
		<div class="transition ease-in-out group-hover:scale-110">
			<GameCover platform={listing.listing_platform} coverImageId={listing.game_cover} />
		</div>
		{#if showPrice}
			<div
				class="badge badge-neutral p-4 w-full text-xl font-bold transition ease-in-out group-hover:badge-secondary group-hover:-translate-y-4"
			>
				{listing.listing_price} DT
			</div>
		{/if}
	</a>
	<a href="/" class="transition ease-in-out hover:scale-105">
		{#if showUserInfo}
			<UserInfo user={listing.profiles} />
		{/if}
	</a>
</div>
