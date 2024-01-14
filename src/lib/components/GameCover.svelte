<script>
	import { getGameCover } from '$lib/utils/igdbUtils';
	export let platform;
	export let coverImageId;
</script>

<div class="aspect-[5/7] rounded-lg overflow-hidden">
	<div class="h-[15%] flex items-center bg-playstation px-3 py-1">
		<p class="text-slate-200 font-bold line-clamp-1">
			{platform}
		</p>
	</div>
	<img class="w-full" src={getGameCover(coverImageId)} alt="cover" />
</div>
