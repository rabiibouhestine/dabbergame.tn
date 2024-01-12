<script>
	import '../../app.css';

	import { goto } from '$app/navigation';
	import SearchBar from '$lib/components/SearchBar.svelte';

	import TagMultiple from '~icons/mdi/tag-multiple';
	import Store from '~icons/mdi/store';
	import TagPlus from '~icons/mdi/tag-plus';
	import AccountArrowRight from '~icons/mdi/account-arrow-right';
	import AccountPlus from '~icons/mdi/account-plus';

	export let data;

	function handleSearchClick(event) {
		goto('/listings/' + event.detail.id);
	}
</script>

<div class="flex flex-col min-h-screen bg-base-300">
	<div class="navbar bg-base-100 py-3">
		<div class="flex flex-wrap flex-1 gap-6 justify-between max-w-5xl mx-auto px-4">
			<a href="/" class="btn btn-neutral rounded-full"> Dabber Game </a>
			<div class="flex-1 order-3 sm:order-2 min-w-60">
				<SearchBar on:click={handleSearchClick} />
			</div>
			<div class="flex gap-2 order-2 sm:order-3">
				{#if data.session}
					<a href="/post-listing" class="btn btn-circle btn-neutral">
						<TagPlus class="text-xl" />
					</a>
				{/if}
				<a href="/listings" class="btn btn-circle btn-neutral">
					<TagMultiple class="text-xl" />
				</a>
				<a href="/stores" class="btn btn-circle btn-neutral">
					<Store class="text-xl" />
				</a>
				{#if data.session}
					<a href={'/user/' + data.session.user.id}>
						<img
							src={'https://gravatar.com/avatar/' + 'hashedEmail'}
							alt="profile"
							class="btn btn-circle"
						/>
					</a>
				{/if}
				{#if !data.session}
					<div class="flex">
						<a href="/login" class="btn rounded-l-full px-3">
							<AccountArrowRight class="text-xl" />Sign in
						</a>
						<a href="/register" class="btn rounded-r-full btn-neutral px-3">
							<AccountPlus class="text-xl" />
						</a>
					</div>
				{/if}
			</div>
		</div>
	</div>

	<div class="flex-1 w-full max-w-5xl mx-auto px-4 my-10">
		<slot />
	</div>

	<footer class="footer footer-center p-10 bg-base-100 text-base-content rounded">
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
