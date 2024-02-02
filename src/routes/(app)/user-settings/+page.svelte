<script>
	import StoreIcon from '~icons/mdi/store';

	export let form;
	export let data;

	const isStore = true;
	const firstName = 'John';
	const lastName = 'Doe';
	const state = 'Ben Arous';
	const city = 'El Mourouj';

	const uniqueStates = [...new Set(data.cities.map((city) => city.state))];
	let selectedState;
</script>

<div class="bg-base-100 rounded-3xl overflow-hidden max-w-4xl mx-auto mb-6">
	<div class="w-full h-[110px] relative bg-gradient-to-tr from-neutral to-base-200">
		{#if isStore}
			<img
				src="https://scontent.ftun7-1.fna.fbcdn.net/v/t39.30808-6/392928542_879903553693124_7845734790687133584_n.jpg?stp=dst-jpg_s2048x2048&_nc_cat=110&ccb=1-7&_nc_sid=783fdb&_nc_ohc=JBQdL-dIZ1sAX9X0_3y&_nc_ht=scontent.ftun7-1.fna&oh=00_AfA5LSBpQbB0fM-Xb1pFrQdOBEt_Gcsyf7t3IYdgDD8MNA&oe=65AF1B1C"
				alt="profile"
				class="w-full h-full object-cover"
			/>
		{/if}
	</div>
	<div class="flex flex-col gap-2 items-center pb-4 -mt-8">
		<div class="avatar placeholder" class:indicator={isStore}>
			{#if isStore}
				<span
					class="indicator-item indicator-bottom indicator-center badge badge-xs badge-secondary font-bold text-base-100 py-2"
				>
					<StoreIcon /> Store
				</span>
			{/if}
			<div
				class="bg-neutral text-neutral-content rounded-full w-16 outline outline-8 outline-base-100"
			>
				{#if isStore}
					<img
						src="https://scontent.ftun7-1.fna.fbcdn.net/v/t39.30808-1/281658087_1211058703000603_2983571932015977382_n.jpg?stp=dst-jpg_p480x480&_nc_cat=102&ccb=1-7&_nc_sid=596444&_nc_aid=0&_nc_ohc=7g_qsAiQqaIAX_JTlNo&_nc_ht=scontent.ftun7-1.fna&oh=00_AfB65FvHrAPfOMq01dSwOmfRBV9VmJYu33CiMkRm4ciM9Q&oe=65B0B65A"
						alt="profile"
						class="w-full h-full object-cover"
					/>
				{:else}
					<span class="text-2xl font-bold">{firstName[0] + lastName[0]}</span>
				{/if}
			</div>
		</div>
		<div class="text-center">
			<h2 class="text-xl font-bold">{firstName + ' ' + lastName}</h2>
			<p class="text-sm text-slate-300">{state + ', ' + city}</p>
			<p class="text-sm text-slate-300">rabiibouhestine@outlook.com</p>
			<a href="/" class="btn btn-sm btn-secondary mt-4">Upgrade to Store Account</a>
		</div>
	</div>
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
		<button type="submit" class="btn btn-neutral">Signup</button>
	</form>
	<div class="divider"></div>
	<form action="?/logout" method="POST">
		<button type="submit" class="btn btn-primary">Logout</button>
	</form>
</div>
