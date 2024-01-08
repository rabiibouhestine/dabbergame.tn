<script>
	let authModal;

	export function showModal() {
		authModal.showModal();
	}

	function closeModal() {
		authModal.close();
	}
</script>

<dialog bind:this={authModal} class="modal">
	<div class="modal-box">
		<h3 class="font-bold text-lg">Login to your account</h3>
		<p class="py-4">You must be logged in to perform this action.</p>
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
			<p class="py-4">Reset your password?</p>
			<button class="btn btn-neutral">Signup</button>
		</form>
		<p class="py-4">Don't have an account? Sign up</p>
	</div>
</dialog>
