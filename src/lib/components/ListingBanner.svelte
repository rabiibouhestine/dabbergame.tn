<script>
	import StoreIcon from '~icons/mdi/store';
	import Other from '~icons/ion/game-controller';
	import Playstation from '~icons/cib/playstation';
	import Xbox from '~icons/cib/xbox';
	import Nintendo from '~icons/simple-icons/nintendo';
	import NintendoSwitch from '~icons/cib/nintendo-switch';
	import Windows from '~icons/cib/windows';

	export let id = '';

	export let firstName = 'John';
	export let lastName = 'Doe';
	export let state = 'Tunis';
	export let city = 'Tunis';

	export let price = 0;

	export let isStore = false;
	export let platform = '';
	export let platformFamily = '';

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

<a
	href="/listing/{id}"
	class="flex flex-col md:flex-row justify-between items-center gap-6 rounded-container transition ease-in-out hover:scale-105 hover:shadow-md hover:shadow-secondary/50"
>
	<div class="flex gap-2 items-center">
		<div class="avatar placeholder" class:indicator={isStore}>
			{#if isStore}
				<span
					class="indicator-item indicator-bottom indicator-center badge badge-secondary text-base-100 p-0.5 py-2"
				>
					<StoreIcon />
				</span>
			{/if}
			<div class="bg-neutral text-neutral-content rounded-full w-14">
				<span class="font-bold text-sm">{firstName[0] + lastName[0]}</span>
			</div>
		</div>
		<div>
			<h2 class="line-clamp-1 font-bold text-lg">{firstName + ' ' + lastName}</h2>
			<p class="line-clamp-1 text-neutral-content">
				{state + ', ' + city}
			</p>
		</div>
	</div>
	<div class="flex flex-wrap justify-center items-center gap-3">
		<div class="badge {BackgoundColor} p-4 font-bold gap-2">
			<Logo />
			{platform}
		</div>
		<div class="badge badge-secondary p-4 font-extrabold">{price} DT</div>
	</div>
</a>
