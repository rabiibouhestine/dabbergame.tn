<script>
	export let user;
</script>

<div class="flex gap-2 items-center">
	<div class="avatar placeholder">
		<div class="bg-base-200 text-neutral-content rounded-full w-10 h-10">
			<span class="text-xs">RB</span>
		</div>
	</div>
	<div>
		<h2 class="line-clamp-1">{user.name}</h2>
		<p class="line-clamp-1 text-xs">{user.state + ', ' + user.city}</p>
	</div>
</div>
