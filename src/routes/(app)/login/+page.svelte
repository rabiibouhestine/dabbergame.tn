<script>
	import { enhance } from '$app/forms';
	export let form;
</script>

<div class="flex flex-col">
	<h2 class="font-bold text-lg">Login to your account</h2>
	<form class="flex flex-col gap-4" method="POST" action="/login" use:enhance>
		<label class="form-control w-full">
			<div class="label">
				<span class="label-text">Email</span>
			</div>
			<input
				name="email"
				type="email"
				placeholder="Email Address"
				class="input input-bordered w-full"
				value={form?.email ?? ''}
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
		{#if form?.error}<p class="error">{form.error}</p>{/if}
		<button class="btn btn-neutral">Login</button>
	</form>
	<span>
		Don't have an account?
		<a href="/register" class="py-4"> Sign up</a>
	</span>
</div>
