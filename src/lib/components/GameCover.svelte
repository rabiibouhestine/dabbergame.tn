<script>
	import { getGameCover } from '$lib/utils/igdbUtils';

	import Windows from '~icons/cib/windows';
	import Playstation from '~icons/cib/playstation';
	import Xbox from '~icons/cib/xbox';
	import NintendoSwitch from '~icons/cib/nintendo-switch';

	export let platform;
	export let coverImageId;

	$: Logo = getLogo(platform);

	function getLogo(platform) {
		switch (platform) {
			case 'PlayStation 4':
				return Playstation;
			case 'PlayStation 5':
				return Playstation;
			case 'Xbox Series X|S':
				return Xbox;
			case 'Xbox One':
				return Xbox;
			case 'Nintendo Switch':
				return NintendoSwitch;
			default:
				return Windows;
		}
	}

	function getBG(platform) {
		switch (platform) {
			case 'PlayStation 4':
				return 'bg-playstation';
			case 'PlayStation 5':
				return 'bg-playstation';
			case 'Xbox Series X|S':
				return 'bg-xbox';
			case 'Xbox One':
				return 'bg-xbox';
			case 'Nintendo Switch':
				return 'bg-nintendo';
			default:
				return 'bg-pc';
		}
	}
</script>

<div class="aspect-[5/7] rounded-lg overflow-hidden">
	<div
		class="h-[15%] flex gap-1 items-center {getBG(
			platform
		)} px-3 py-1 text-sm text-slate-200 font-bold"
	>
		<Logo />
		<p class="line-clamp-1">{platform}</p>
	</div>
	<img class="w-full" src={getGameCover(coverImageId)} alt="cover" />
</div>
