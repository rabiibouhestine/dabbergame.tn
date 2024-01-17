<script>
	import GameCover from '$lib/components/GameCover.svelte';
	import UserInfo from '$lib/components/UserInfo.svelte';

	export let id = '';
	export let platform = '';
	export let platformFamily = '';
	export let coverImageId = '';
	export let price = 0;
	export let userId = '';
	export let userFirstName = 'John';
	export let userLastName = 'Doe';
	export let userState = '';
	export let userCity = '';

	export let showPrice = true;
	export let showUserInfo = true;
</script>

<div class="flex flex-col gap-3">
	<a href="/listing/{id}" class="flex flex-col gap-3 group">
		<div class="transition ease-in-out group-hover:scale-110">
			<GameCover {platform} {platformFamily} {coverImageId} />
		</div>
		{#if showPrice}
			<div
				class="badge badge-neutral p-4 w-full text-xl font-bold transition ease-in-out group-hover:-translate-y-4"
			>
				{price} DT
			</div>
		{/if}
	</a>
	<a href="/user/{userId}" class="transition ease-in-out hover:scale-105">
		{#if showUserInfo}
			<UserInfo
				firstName={userFirstName}
				lastName={userLastName}
				state={userState}
				city={userCity}
			/>
		{/if}
	</a>
</div>
