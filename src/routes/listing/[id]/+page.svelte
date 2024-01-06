<script>
	import UserInfo from '$lib/components/UserInfo.svelte';
	import GameCover from '$lib/components/GameCover.svelte';
	import Steam from '~icons/mdi/steam';
	import Twitch from '~icons/mdi/twitch';
	import Reddit from '~icons/mdi/reddit';
	import CheckCircleOutlineRounded from '~icons/material-symbols/check-circle-outline-rounded';
	import CancelOutlineRounded from '~icons/material-symbols/cancel-outline-rounded';
	import { getGameCover } from '$lib/utils/igdbUtils';

	const popular = [
		{
			image_id: 'co7as5'
		},
		{
			image_id: 'co7ctx'
		},
		{
			image_id: 'co6lz0'
		},
		{
			image_id: 'co6jar'
		}
	];
</script>

<div class="flex items-center md:items-start flex-col md:flex-row gap-10">
	<div class="min-w-52 flex flex-col justify-center items-center gap-4">
		<div class="min-w-40 max-w-60">
			<GameCover />
		</div>
		<UserInfo user={{ name: 'Foulen Ben Falten', state: 'Ben Arous', city: 'El Mourouj' }} />
		<div class="w-full flex flex-col gap-3">
			<span
				class="flex justify-center items-center bg-base-300 rounded-full px-4 py-2 text-lg text-center font-bold"
			>
				<div class="rating">
					<input type="radio" name="rating-1" class="mask mask-star" />
					<input type="radio" name="rating-1" class="mask mask-star" checked />
					<input type="radio" name="rating-1" class="mask mask-star" />
					<input type="radio" name="rating-1" class="mask mask-star" />
					<input type="radio" name="rating-1" class="mask mask-star" />
				</div>
			</span>
			<span class="bg-base-300 rounded-full px-4 py-2 text-lg text-center font-bold">Phone</span>
			<span class="bg-base-300 rounded-full px-4 py-2 text-lg text-center font-bold">Facebook</span>
			<span class="bg-base-300 rounded-full px-4 py-2 text-lg text-center font-bold">Buy Now</span>
		</div>
	</div>
	<div class="flex flex-col gap-6">
		<div class="rounded-container flex flex-col justify-between gap-6 h-full">
			<div class="flex flex-col gap-6">
				<h2 class="text-4xl font-bold">The Finals</h2>
				<div class="flex flex-wrap gap-3 justify-between">
					<div class="flex flex-wrap gap-3">
						<div class="flex items-center bg-base-200 rounded-full px-4 py-2 text-center font-bold">
							Condition: New
						</div>
						<div
							class="flex items-center gap-1 bg-base-200 rounded-full px-4 py-2 text-center font-bold"
						>
							<CheckCircleOutlineRounded />Delivery
						</div>
						<div
							class="flex items-center gap-1 bg-base-200 rounded-full px-4 py-2 text-center font-bold"
						>
							<CancelOutlineRounded />Trade
						</div>
					</div>
					<div class="flex items-center bg-base-200 rounded-full px-4 py-2 text-center font-bold">
						200 DT
					</div>
				</div>
				<div class="flex flex-col gap-4">
					<p>
						Join The Finals, the world-famous, free-to-play, combat-centered game show! Fight
						alongside your teammates in virtual arenas that you can alter, exploit, and even
						destroy. Build your own playstyle in this first-person shooter to win escalating
						tournaments and lasting fame. Can you reach The Finals?
					</p>
					<p>Genre: Shooter, Tactical</p>
					<p>Platforms: PlayStation 5, PC (Microsoft Windows), Xbox Series X|S</p>
				</div>
			</div>
			<div class="flex flex-wrap justify-between">
				<div class="flex flex-wrap gap-3">
					<a
						href="/listings"
						class="flex justify-center items-center bg-base-200 text-neutral-content rounded-full w-10 h-10"
					>
						<Steam />
					</a>
					<a
						href="/listings"
						class="flex justify-center items-center bg-base-200 text-neutral-content rounded-full w-10 h-10"
					>
						<Twitch />
					</a>
					<a
						href="/listings"
						class="flex justify-center items-center bg-base-200 text-neutral-content rounded-full w-10 h-10"
					>
						<Reddit />
					</a>
				</div>
				<div class="flex items-center bg-base-200 rounded-full px-4 py-2 text-center font-bold">
					Rating: 90
				</div>
			</div>
		</div>
		<div class="w-full flex flex-col gap-8 rounded-container">
			<div class="divider divider-start text-4xl font-bold">Trade Games</div>
			<div class="h-full flex flex-wrap justify-center items-center gap-6">
				{#each popular as game}
					<a href="/listings/1">
						<img src={getGameCover(game.image_id)} alt="game" class="rounded-xl w-32" />
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
