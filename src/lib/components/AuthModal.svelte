<script>
	let loginModal;
	let signupModal;

	export let form;

	export function showLoginModal() {
		signupModal.close();
		loginModal.showModal();
	}

	export function showSignupModal() {
		loginModal.close();
		signupModal.showModal();
	}

	function closeModal() {
		loginModal.close();
		signupModal.close();
	}
</script>

<dialog bind:this={loginModal} class="modal">
	<div class="modal-box">
		<h3 class="font-bold text-lg">Login to your account</h3>
		<p class="py-4">You must be logged in to perform this action.</p>
		<form class="flex flex-col gap-4" method="POST" action="?/login">
			<button
				on:click={closeModal}
				type="button"
				class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
			>
				✕
			</button>
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
			<button class="py-4 self-start">Reset your password?</button>
			{#if form?.error}<p class="error">Invalid credentials!</p>{/if}
			<button class="btn btn-neutral">Login</button>
		</form>
		<span>
			Don't have an account?
			<button on:click={showSignupModal} class="py-4"> Sign up</button>
		</span>
	</div>
</dialog>

<dialog bind:this={signupModal} class="modal">
	<div class="modal-box">
		<h3 class="font-bold text-lg">Signup</h3>
		<form class="flex flex-col gap-4" method="POST" action="?/register">
			<button
				on:click={closeModal}
				type="button"
				class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
			>
				✕
			</button>
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
					name="confirm password"
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
						name="first name"
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
						name="last name"
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
					<select class="select select-bordered">
						<option selected>Tunis</option>
						<option>Star Wars</option>
						<option>Harry Potter</option>
						<option>Lord of the Rings</option>
						<option>Planet of the Apes</option>
						<option>Star Trek</option>
					</select>
				</label>
				<label class="form-control w-full">
					<div class="label">
						<span class="label-text">City</span>
					</div>
					<select class="select select-bordered">
						<option selected>Tunis</option>
						<option>Star Wars</option>
						<option>Harry Potter</option>
						<option>Lord of the Rings</option>
						<option>Planet of the Apes</option>
						<option>Star Trek</option>
					</select>
				</label>
			</div>
			<label class="form-control w-full">
				<div class="label">
					<span class="label-text">Phone</span>
				</div>
				<input name="phone" type="text" placeholder="Phone" class="input input-bordered w-full" />
			</label>
			<button class="btn btn-neutral">Signup</button>
		</form>
		<span>
			Already have an account?
			<button on:click={showLoginModal} class="py-4"> Login</button>
		</span>
	</div>
</dialog>
