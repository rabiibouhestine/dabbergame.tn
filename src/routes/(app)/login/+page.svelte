<script>
	import { enhance } from '$app/forms';
	export let form;
</script>

<div class="flex flex-col gap-4 max-w-md mx-auto">
	<h2 class="font-bold text-3xl text-center">Sign in to your account</h2>
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
				<span class="label-text-alt"><a href="/">Forgot your password?</a></span>
			</div>
			<input
				name="password"
				type="password"
				placeholder="Password"
				class="input input-bordered w-full"
			/>
		</label>
		{#if form?.error}<p class="error">{form.error}</p>{/if}
		<button type="submit" class="btn btn-neutral">Sign in</button>
	</form>
	<div class="text-center">
		Don't have an account?
		<a href="/register" class="py-4"> Sign up</a>
	</div>
</div>
