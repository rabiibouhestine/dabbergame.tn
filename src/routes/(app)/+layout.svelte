<script>
	import '../../app.css';

	import { goto } from '$app/navigation';
	import { navigating } from '$app/stores';
	import SearchBar from '$lib/components/SearchBar.svelte';

	import GamepadVariantOutline from '~icons/mdi/gamepad-variant-outline';
	import TagMultiple from '~icons/mdi/tag-multiple';
	import Store from '~icons/mdi/store';
	import TagPlus from '~icons/mdi/tag-plus';
	import AccountArrowRight from '~icons/mdi/account-arrow-right';
	import AccountPlus from '~icons/mdi/account-plus';
	import Account from '~icons/mdi/account';
	import Menu from '~icons/mdi/menu';

	export let data;

	function handleSearchClick(event) {
		goto('/listings/' + event.detail.id);
	}
</script>

<div class="flex flex-col min-h-screen bg-base-300">
	<div class="navbar bg-base-100 py-3">
		<div class="flex-1 flex gap-2 justify-between max-w-6xl mx-auto px-4">
			<a href="/" class="btn btn-neutral rounded-full hidden md:flex">
				<GamepadVariantOutline class="text-xl" />
				DabberGame
			</a>
			<a href="/" class="btn btn-neutral btn-circle flex md:hidden">
				<GamepadVariantOutline class="text-xl" />
			</a>
			<div class="w-full">
				<SearchBar on:click={handleSearchClick} />
			</div>
			<div class="dropdown dropdown-left flex md:hidden">
				<div tabindex="0" role="button" class="btn btn-circle btn-neutral">
					<Menu class="text-xl" />
				</div>
				<ul
					class="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
				>
					{#if data.session}
						<li><a href="/post-listing"><TagPlus class="text-lg" />Post Listing</a></li>
					{/if}
					<li><a href="/listings"><TagMultiple class="text-lg" />Listings</a></li>
					<li><a href="/stores"><Store class="text-lg" />Stores</a></li>
					{#if data.session}
						<li>
							<a href={'/user/' + data.session.user.id}><Account class="text-lg" />Account</a>
						</li>
					{/if}
					{#if !data.session}
						<li>
							<a href="/login"><AccountArrowRight class="text-lg" />Sign in</a>
						</li>
						<li>
							<a href="/register"><AccountPlus class="text-lg" />Signup</a>
						</li>
					{/if}
				</ul>
			</div>
			<div class="hidden md:flex gap-2">
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
					<a href={'/user/' + data.session.user.id} class="btn btn-circle btn-neutral">
						<Account class="text-xl" />
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

	<progress
		class="h-2 sticky top-0 z-10 w-full"
		class:progress={$navigating}
		class:visible={$navigating}
		class:invisible={!$navigating}
	>
	</progress>

	<div class="flex-1 w-full max-w-6xl mx-auto px-4 my-10">
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
