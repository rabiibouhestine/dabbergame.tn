<script>
	import Facebook from '~icons/mdi/facebook';
	import Phone from '~icons/mdi/phone';
	import Cog from '~icons/mdi/cog';
</script>

<div class="rounded-container flex flex-col md:flex-row justify-between gap-8">
	<div class="flex flex-col md:flex-row gap-4 items-center">
		<img
			src={'https://gravatar.com/avatar/' + 'hashedEmail'}
			alt="profile"
			class="rounded-full w-24 h-24"
		/>
		<div class="text-center md:text-start">
			<h2 class="text-4xl font-bold">Foulen BenFalten</h2>
			<p class="text-lg font-bold">Ben Arous, El Mourouj</p>
			<p class="text-lg">Joined 1 month ago</p>
		</div>
	</div>
	<div class="flex flex-col gap-3 justify-between items-center md:items-right">
		<div class="flex justify-center gap-3">
			<a
				href="/listings"
				class="flex justify-center items-center bg-base-200 text-neutral-content rounded-full w-10 h-10"
			>
				<Phone class="text-xl" />
			</a>
			<a
				href="/listings"
				class="flex justify-center items-center bg-base-200 text-neutral-content rounded-full w-10 h-10"
			>
				<Facebook class="text-xl" />
			</a>
			<a
				href="/listings"
				class="flex justify-center items-center bg-base-200 text-neutral-content rounded-full w-10 h-10"
			>
				<Cog class="text-xl" />
			</a>
		</div>
		<a
			href="/listings"
			class="w-fit flex justify-center items-center bg-base-200 rounded-full px-4 py-2"
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
