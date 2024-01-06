<script>
	import ListingCard from '$lib/components/ListingCard.svelte';
	import Facebook from '~icons/mdi/facebook';
	import Phone from '~icons/mdi/phone';

	let listings = Array.from({ length: 5 }, (_, index) => index + 1);
</script>

<div class="flex flex-col gap-8">
	<div class="rounded-container flex flex-col gap-6 items-center">
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
				class="flex justify-center items-center bg-base-300 text-neutral-content rounded-full px-4"
			>
				<div class="rating">
					<input type="radio" name="rating-1" class="mask mask-star" />
					<input type="radio" name="rating-1" class="mask mask-star" checked />
					<input type="radio" name="rating-1" class="mask mask-star" />
					<input type="radio" name="rating-1" class="mask mask-star" />
					<input type="radio" name="rating-1" class="mask mask-star" />
				</div>
			</a>
		</div>
	</div>
	<div class="divider divider-start text-4xl font-bold">Listings</div>
	<div class="flex flex-wrap justify-center gap-8">
		{#each listings as listing}
			<ListingCard />
		{/each}
	</div>
</div>
