<script>
	import UserInfo from '$lib/components/UserInfo.svelte';
	export let showPrice = true;
	export let showUserInfo = true;
	export let listing = {};
</script>

<a href="/listing/{listing.id}" class="flex flex-col gap-3">
	<div class="aspect-[5/7] rounded-lg overflow-hidden">
		<div class="h-[15%] flex items-center bg-playstation px-3 py-1">
			<p class="text-slate-200 font-bold line-clamp-1">
				{listing.listing_platform}
			</p>
		</div>
		<img
			class="w-full"
			src="https://images.igdb.com/igdb/image/upload/t_cover_big/{listing.game_cover}.jpg"
			alt="cover"
		/>
	</div>
	{#if showPrice}
		<div class="badge badge-neutral p-4 w-full text-2xl font-bold">
			{listing.listing_price} DT
		</div>
	{/if}
	{#if showUserInfo}
		<UserInfo user={listing.profiles} />
	{/if}
</a>
