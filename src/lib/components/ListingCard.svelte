<script>
	import UserInfo from '$lib/components/UserInfo.svelte';
	export let showPrice = true;
	export let showUserInfo = true;
	export let listing = {};
</script>

<a href="/listing/{listing.id}" class="flex flex-col gap-3 min-w-40 max-w-52 flex-1">
	<div class="w-full aspect-[5/7] rounded-lg overflow-hidden">
		<div class="w-full h-[15%] flex items-center bg-blue-600 px-3 py-1 text-white font-bold">
			{listing.listing_platform}
		</div>
		<img
			class="w-full"
			src="https://images.igdb.com/igdb/image/upload/t_cover_big/{listing.game_cover}.jpg"
			alt="cover"
		/>
	</div>
	{#if showPrice}
		<div class="bg-neutral py-1 px-4 rounded-full w-full text-center text-2xl font-bold">
			{listing.listing_price} DT
		</div>
	{/if}
	{#if showUserInfo}
		<UserInfo user={listing.profiles} />
	{/if}
</a>
