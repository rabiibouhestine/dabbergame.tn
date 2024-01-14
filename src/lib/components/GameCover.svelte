<script>
	import { getGameCover } from '$lib/utils/igdbUtils';

	import Windows from '~icons/cib/windows';
	import Playstation from '~icons/cib/playstation';
	import Xbox from '~icons/cib/xbox';
	import NintendoSwitch from '~icons/cib/nintendo-switch';

	export let platform;
	export let coverImageId;

	$: Test = getLogo(platform);

	function getLogo(platform) {
		switch (platform) {
			case 'PlayStation 4':
				return Playstation;
			case 'PlayStation 5':
				return Playstation;
			case 'Xbox Series X|S':
				return Xbox;
			case 'Nintendo Switch':
				return NintendoSwitch;
			default:
				return Windows;
		}
	}
</script>

<div class="aspect-[5/7] rounded-lg overflow-hidden">
	<div
		class="h-[15%] flex gap-1 items-center bg-playstation px-3 py-1 text-sm text-slate-200 font-bold"
	>
		<Test />
		<p class="line-clamp-1">{platform}</p>
	</div>
	<img class="w-full" src={getGameCover(coverImageId)} alt="cover" />
</div>
