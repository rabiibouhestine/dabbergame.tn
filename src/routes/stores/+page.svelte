<script>
	import Facebook from '~icons/mdi/facebook';
	import Phone from '~icons/mdi/phone';
</script>

<div class="flex flex-col gap-y-8">
	<div class="divider divider-start text-4xl font-bold">Stores</div>
	<div class="flex flex-wrap justify-center gap-8">
		{#each [1, 2, 3, 4] as listing}
			<div class="flex-1 min-w-96 rounded-container flex flex-col gap-6 items-center">
				<div class="flex flex-col gap-4 items-center">
					<div class="avatar placeholder">
						<div class="bg-base-200 text-neutral-content rounded-full w-24 h-24">
							<span class="text-xs">Ls</span>
						</div>
					</div>
					<div class="text-center">
						<h2 class="text-4xl font-bold">Foulen Ben Falten</h2>
						<p class="text-lg font-bold">Ben Arous, El Mourouj</p>
						<p class="text-lg">Joined 1 month ago</p>
					</div>
				</div>
				<div class="flex justify-center gap-3">
					<a
						href="/listings"
						class="flex justify-center items-center bg-base-300 text-neutral-content rounded-full w-10 h-10"
					>
						<Phone class="text-xl" />
					</a>
					<a
						href="/listings"
						class="flex justify-center items-center bg-base-300 text-neutral-content rounded-full w-10 h-10"
					>
						<Facebook class="text-xl" />
					</a>
					<a
						href="/listings"
						class="flex justify-center items-center bg-base-300 text-neutral-content rounded-full w-10 h-10"
					>
						<Facebook class="text-xl" />
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>
