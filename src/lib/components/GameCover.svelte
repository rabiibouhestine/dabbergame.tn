<script>
	import { getGameCover } from '$lib/utils/igdbUtils';

	import Other from '~icons/ion/game-controller';
	import Playstation from '~icons/cib/playstation';
	import Xbox from '~icons/cib/xbox';
	import Nintendo from '~icons/simple-icons/nintendo';
	import NintendoSwitch from '~icons/cib/nintendo-switch';
	import Windows from '~icons/cib/windows';

	export let platform = '';
	export let platformFamily = '';
	export let coverImageId = '';

	$: Logo = getLogo(platform, platformFamily);
	$: BackgoundColor = getBG(platformFamily);

	function getLogo(platform, platformFamily) {
		switch (platformFamily) {
			case 'PlayStation':
				return Playstation;
			case 'Xbox':
				return Xbox;
			case 'Nintendo':
				if (platform === 'Nintendo Switch') {
					return NintendoSwitch;
				} else {
					return Nintendo;
				}
			default:
				if (platform === 'PC (Microsoft Windows)') {
					return Windows;
				} else {
					return Other;
				}
		}
	}

	function getBG(platformFamily) {
		switch (platformFamily) {
			case 'PlayStation':
				return 'bg-playstation';
			case 'Xbox':
				return 'bg-xbox';
			case 'Nintendo':
				return 'bg-nintendo';
			default:
				if (platform === 'PC (Microsoft Windows)') {
					return 'bg-windows';
				} else {
					return 'bg-yellow-700';
				}
		}
	}
</script>

<div class="aspect-[5/7] rounded-lg overflow-hidden bg-neutral">
	<div
		class="h-[15%] flex gap-1 items-center {BackgoundColor} px-3 py-1 text-sm text-slate-200 font-bold"
	>
		<Logo />
		<p class="line-clamp-1">{platform}</p>
	</div>
	<img class="w-full" src={getGameCover(coverImageId)} alt="cover" />
</div>
