<script>
	import GameCover from '$lib/components/GameCover.svelte';
</script>

<div class="grid grid-cols-1 sm:grid-cols-4 gap-10 w-full max-w-5xl mx-auto my-10 px-4">
	<div class="col-span-1 flex flex-col gap-4">
		<GameCover />
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
		<div class="flex flex-col gap-3">
			<span class="bg-base-300 rounded-full px-4 py-2 text-lg text-center font-bold"
				>Rating: 4/5</span
			>
			<span class="bg-base-300 rounded-full px-4 py-2 text-lg text-center font-bold">Phone</span>
			<span class="bg-base-300 rounded-full px-4 py-2 text-lg text-center font-bold">Facebook</span>
			<span class="bg-base-300 rounded-full px-4 py-2 text-lg text-center font-bold">Buy Now</span>
		</div>
	</div>
	<div class="col-span-3 flex flex-col gap-6">
		<div class="divider divider-start text-5xl font-bold">The Finals</div>
		<div class="flex justify-between">
			<div class="flex gap-3">
				<span class="bg-base-300 rounded-full px-4 py-2 text-center font-bold">
					Playstation 5
				</span>
				<span class="bg-base-300 rounded-full px-4 py-2 text-center font-bold">
					Condition: New
				</span>
				<span class="bg-base-300 rounded-full px-4 py-2 text-center font-bold">Delivery</span>
				<span class="bg-base-300 rounded-full px-4 py-2 text-center font-bold">Trade</span>
			</div>
			<div class="flex gap-3">
				<span class="bg-base-300 rounded-full px-4 py-2 text-center font-bold">200 DT</span>
			</div>
		</div>
		<div class="flex flex-col gap-4">
			<p>
				Join The Finals, the world-famous, free-to-play, combat-centered game show! Fight alongside
				your teammates in virtual arenas that you can alter, exploit, and even destroy. Build your
				own playstyle in this first-person shooter to win escalating tournaments and lasting fame.
				Can you reach The Finals?
			</p>
			<p>Genre: Shooter, Tactical</p>
			<p>Platforms: PlayStation 5, PC (Microsoft Windows), Xbox Series X|S</p>
		</div>
		<div class="flex justify-between">
			<div class="flex gap-3">
				<a
					href="/listings"
					class="flex justify-center items-center bg-neutral text-neutral-content rounded-full w-10 h-10"
				>
					<span class="text-md">S</span>
				</a>
				<a
					href="/listings"
					class="flex justify-center items-center bg-neutral text-neutral-content rounded-full w-10 h-10"
				>
					<span class="text-md">W</span>
				</a>
				<a
					href="/listings"
					class="flex justify-center items-center bg-neutral text-neutral-content rounded-full w-10 h-10"
				>
					<span class="text-md">T</span>
				</a>
			</div>
			<div class="flex gap-3">
				<a
					href="/listings"
					class="flex justify-center items-center bg-neutral text-neutral-content rounded-full w-10 h-10"
				>
					<span class="text-md">89</span>
				</a>
				<a
					href="/listings"
					class="flex justify-center items-center bg-neutral text-neutral-content rounded-full w-10 h-10"
				>
					<span class="text-md">87</span>
				</a>
			</div>
		</div>
		<div class="w-full flex flex-col gap-8 items-center bg-neutral p-4 rounded-3xl">
			<h2 class="text-3xl font-bold">Trades with the following games</h2>
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
