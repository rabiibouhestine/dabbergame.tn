<script>
	import UserInfo from '$lib/components/UserInfo.svelte';
	export let showPrice = true;
</script>

<a href="/listing/1" class="flex flex-col gap-3 min-w-40 max-w-52 flex-1">
	<div class="w-full aspect-[5/7] rounded-lg overflow-hidden">
		<div class="w-full h-[15%] flex items-center bg-blue-600 px-3 py-1 text-white font-bold">
			PS5
		</div>
		<img
			class="w-full"
			src="https://images.igdb.com/igdb/image/upload/t_cover_big/co7as5.jpg"
			alt="cover"
		/>
	</div>
	{#if showPrice}
		<div class="bg-neutral py-1 px-4 rounded-full w-full text-center text-2xl font-bold">
			200 DT
		</div>
	{/if}
	<UserInfo user={{ name: 'Foulen Ben Falten', state: 'Ben Arous', city: 'El Mourouj' }} />
</a>
