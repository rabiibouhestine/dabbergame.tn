<script>
	import ProfileCard from '$lib/components/ProfileCard.svelte';
	import StoreIcon from '~icons/mdi/store';

	export let form;
	export let data;

	const isStore = false;
	const firstName = 'John';
	const lastName = 'Doe';
	const state = 'Ben Arous';
	const city = 'El Mourouj';

	const uniqueStates = [...new Set(data.cities.map((city) => city.state))];
	let selectedState;
</script>

<div class="max-w-4xl mx-auto mb-3">
	<ProfileCard />
</div>
<div class="flex flex-col gap-4 rounded-container max-w-4xl mx-auto">
	<form class="flex flex-col gap-4" method="POST" action="/register">
		<div class="flex flex-col sm:flex-row gap-3">
			<label class="form-control w-full">
				<div class="label">
					<span class="label-text">First Name</span>
				</div>
				<input
					name="first_name"
					type="text"
					placeholder="First Name"
					class="input input-bordered w-full"
				/>
			</label>
			<label class="form-control w-full">
				<div class="label">
					<span class="label-text">Last Name</span>
				</div>
				<input
					name="last_name"
					type="text"
					placeholder="Last Name"
					class="input input-bordered w-full"
				/>
			</label>
		</div>
		<div class="flex flex-col sm:flex-row gap-3">
			<label class="form-control w-full">
				<div class="label">
					<span class="label-text">State</span>
				</div>
				<select class="select select-bordered" bind:value={selectedState}>
					{#each uniqueStates as state}
						<option>{state}</option>
					{/each}
				</select>
			</label>
			<label class="form-control w-full">
				<div class="label">
					<span class="label-text">City</span>
				</div>
				<select class="select select-bordered" name="city_id">
					{#each data.cities.filter((city) => city.state === selectedState) as city}
						<option value={city.id}>{city.city}</option>
					{/each}
				</select>
			</label>
		</div>
		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Phone</span>
			</div>
			<input name="phone" type="text" placeholder="Phone" class="input input-bordered w-full" />
		</label>
		{#if form?.error}<p class="error">Invalid credentials!</p>{/if}
		<button type="submit" class="btn btn-neutral">Save</button>
	</form>
	<div class="divider"></div>
	<form class="flex flex-col gap-4" method="POST" action="/register">
		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Password</span>
			</div>
			<input
				name="password"
				type="password"
				placeholder="Password"
				class="input input-bordered w-full"
			/>
		</label>
		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Confirm Password</span>
			</div>
			<input
				name="confirm_password"
				type="password"
				placeholder="Password"
				class="input input-bordered w-full"
			/>
		</label>
		{#if form?.error}<p class="error">Invalid credentials!</p>{/if}
		<button type="submit" class="btn btn-neutral">Update Password</button>
	</form>
	<div class="divider"></div>
	<form action="?/logout" method="POST">
		<button type="submit" class="btn btn-error">Logout</button>
	</form>
</div>
