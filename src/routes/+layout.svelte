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
			<a href="/" class="btn btn-neutral rounded-full"> Dabber Game </a>
			<div class="flex-1 order-3 sm:order-2 min-w-60">
				<SearchBar />
			</div>
			<div class="flex gap-2 order-2 sm:order-3">
				<a href="/" class="btn btn-circle btn-neutral">
					<PlusCircleLine />
				</a>
				<a href="/stores" class="btn btn-circle btn-neutral">
					<StoreLine />
				</a>
				<a href="/listings" class="btn btn-circle btn-neutral">
					<TagsLine />
				</a>
				<a href="/user/1" class="btn btn-circle btn-neutral">
					<UserLine />
				</a>
			</div>
		</div>
	</div>

	<div class="flex-1 w-full max-w-5xl mx-auto px-4 my-10">
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
