<script>
	import GameCover from '$lib/components/GameCover.svelte';
	import Steam from '~icons/mdi/steam';
	import Twitch from '~icons/mdi/twitch';
	import Reddit from '~icons/mdi/reddit';
	import CheckCircleOutlineRounded from '~icons/material-symbols/check-circle-outline-rounded';
	import CancelOutlineRounded from '~icons/material-symbols/cancel-outline-rounded';
</script>

<div class="grid grid-cols-1 md:grid-cols-4 gap-10">
	<div class="col-span-1 flex flex-col justify-center md:justify-start items-center gap-4">
		<div class="min-w-40 max-w-60">
			<GameCover />
		</div>
		<div class="flex flex-col gap-3">
			<div class="flex gap-2 items-center">
				<div class="avatar placeholder">
					<div class="bg-neutral text-neutral-content rounded-full w-12 h-12">
						<span class="text-xs">Ls</span>
					</div>
				</div>
				<div>
					<h2 class="text-lg font-bold">Foulen Ben Falten</h2>
					<p class="text-sm font-bold">Ben Arous, El Mourouj</p>
				</div>
			</div>
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
	<div class="col-span-3 flex flex-col gap-6">
		<div class="bg-neutral p-6 rounded-3xl flex flex-col justify-between gap-6 h-full">
			<div class="flex flex-col gap-6">
				<div class="divider divider-start text-4xl font-bold">The Finals</div>
				<div class="flex justify-between">
					<div class="flex gap-3">
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
			<div class="flex justify-between">
				<div class="flex gap-3">
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
				<div class="flex gap-3">
					<a
						href="/listings"
						class="flex justify-center items-center bg-base-200 text-neutral-content rounded-full w-10 h-10"
					>
						<span class="text-md">89</span>
					</a>
					<a
						href="/listings"
						class="flex justify-center items-center bg-base-200 text-neutral-content rounded-full w-10 h-10"
					>
						<span class="text-md">87</span>
					</a>
				</div>
			</div>
		</div>
		<div class="w-full flex flex-col gap-8 items-center bg-neutral p-6 rounded-3xl">
			<div class="divider divider-start text-4xl font-bold">Trade</div>
			<div class="flex gap-6">
				<a href="/listings">
					<img
						src="https://images.igdb.com/igdb/image/upload/t_cover_big/co7as5.jpg"
						alt="game"
						class="bg-red-600 rounded-xl w-36"
					/>
				</a>
				<a href="/listings">
					<img
						src="https://images.igdb.com/igdb/image/upload/t_cover_big/co7ctx.jpg"
						alt="game"
						class="bg-red-600 rounded-xl w-36"
					/>
				</a>
				<a href="/listings">
					<img
						src="https://images.igdb.com/igdb/image/upload/t_cover_big/co6lz0.jpg"
						alt="game"
						class="bg-red-600 rounded-xl w-36"
					/>
				</a>
				<a href="/listings">
					<img
						src="https://images.igdb.com/igdb/image/upload/t_cover_big/co6jar.jpg"
						alt="game"
						class="bg-red-600 rounded-xl w-36"
					/>
				</a>
			</div>
		</div>
	</div>
</div>
