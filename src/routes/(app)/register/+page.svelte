<script>
	export let form;
	export let data;

	const uniqueStates = [...new Set(data.cities.map((city) => city.state))];
	let selectedState;
</script>

<div class="flex flex-col max-w-md mx-auto">
	<h3 class="font-bold text-lg">Signup</h3>
	<form class="flex flex-col gap-4" method="POST" action="/register">
		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Email</span>
			</div>
			<input
				name="email"
				type="email"
				placeholder="Email Address"
				class="input input-bordered w-full"
			/>
		</label>
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
		<div class="flex gap-3">
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
		<div class="flex gap-3">
			<label class="form-control w-full">
				<div class="label">
					<span class="label-text">State</span>
				</div>
				<select class="select select-bordered" name="state" bind:value={selectedState}>
					{#each uniqueStates as state}
						<option>{state}</option>
					{/each}
				</select>
			</label>
			<label class="form-control w-full">
				<div class="label">
					<span class="label-text">City</span>
				</div>
				<select class="select select-bordered" name="city">
					{#each data.cities.filter((city) => city.state === selectedState) as city}
						<option>{city.city}</option>
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
		<button type="submit" class="btn btn-neutral">Signup</button>
	</form>
	<span>
		Already have an account?
		<a href="/login" class="py-4"> Login</a>
	</span>
</div>
