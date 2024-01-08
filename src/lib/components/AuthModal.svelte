<script>
	let authModal;

	export function showModal() {
		authModal.showModal();
	}
</script>

<dialog bind:this={authModal} class="modal">
	<div class="modal-box">
		<form method="dialog">
			<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
		</form>
		<h3 class="font-bold text-lg">Hello!</h3>
		<p class="py-4">Press ESC key or click on ✕ button to close</p>
	</div>
</dialog>
