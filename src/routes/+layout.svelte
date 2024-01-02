<script>
	import '../app.css';
</script>

<div class="flex flex-col min-h-screen">
	<div class="navbar bg-base-300 py-4">
		<div class="flex flex-wrap flex-1 gap-6 justify-between max-w-5xl mx-auto px-4">
			<button class="btn btn-active order-1">Dabber Game</button>
			<input
				type="text"
				placeholder="Type here"
				class="input input-bordered flex-1 order-3 sm:order-2"
			/>
			<div class="flex gap-2 order-2 sm:order-3">
				<div class="avatar placeholder">
					<div class="bg-neutral text-neutral-content rounded-full w-10">
						<span class="text-md">Ls</span>
					</div>
				</div>
				<div class="avatar placeholder">
					<div class="bg-neutral text-neutral-content rounded-full w-10">
						<span class="text-md">Ad</span>
					</div>
				</div>
				<div class="avatar placeholder">
					<div class="bg-neutral text-neutral-content rounded-full w-10">
						<span class="text-md">Pr</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="flex-1 flex flex-col gap-y-10 max-w-5xl mx-auto my-10 px-4">
		<slot />
	</div>

	<footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
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
