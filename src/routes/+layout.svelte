<script>
	import '../app.css';
</script>

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
<slot />
