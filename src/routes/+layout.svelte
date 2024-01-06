<script>
	import '../app.css';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import TagsLine from '~icons/clarity/tags-line';
	import StoreLine from '~icons/clarity/store-line';
	import PlusCircleLine from '~icons/clarity/plus-circle-line';
	import UserLine from '~icons/clarity/user-line';
</script>

<div class="flex flex-col min-h-screen">
	<div class="navbar bg-base-300 py-4">
		<div class="flex flex-wrap flex-1 gap-6 justify-between max-w-5xl mx-auto px-4">
			<a href="/" class="flex items-center bg-neutral rounded-full px-4 h-10 order-1">Dabber Game</a
			>
			<div class="flex-1 order-3 sm:order-2 min-w-60">
				<SearchBar />
			</div>
			<div class="flex gap-2 order-2 sm:order-3">
				<div class="avatar placeholder">
					<a
						href="/stores"
						class="flex justify-center items-center bg-neutral text-neutral-content rounded-full w-10 h-10"
					>
						<StoreLine />
					</a>
				</div>
				<div class="avatar placeholder">
					<a
						href="/listings"
						class="flex justify-center items-center bg-neutral text-neutral-content rounded-full w-10 h-10"
					>
						<TagsLine />
					</a>
				</div>
				<div class="avatar placeholder">
					<a
						href="/"
						class="flex justify-center items-center bg-neutral text-neutral-content rounded-full w-10 h-10"
					>
						<PlusCircleLine />
					</a>
				</div>
				<div class="avatar placeholder">
					<a
						href="/user/1"
						class="flex justify-center items-center bg-neutral text-neutral-content rounded-full w-10 h-10"
					>
						<UserLine />
					</a>
				</div>
			</div>
		</div>
	</div>

	<div class="flex-1 max-w-5xl mx-auto px-4 my-10">
		<slot />
	</div>

	<footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
		<nav class="grid grid-flow-col gap-4">
			<a href="/" class="link link-hover">About us</a>
			<a href="/" class="link link-hover">Contact</a>
			<a href="/" class="link link-hover">Jobs</a>
			<a href="/" class="link link-hover">Press kit</a>
		</nav>
		<aside>
			<p>Copyright © {new Date().getFullYear()} - All rights reserved by dabbergame.tn</p>
		</aside>
	</footer>
</div>
