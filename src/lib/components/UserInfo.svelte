<script>
	export let user;
</script>

<div class="flex gap-2 items-center">
	<div class="avatar placeholder">
		<div class="bg-neutral text-neutral-content rounded-full w-8">
			<span class="font-bold text-sm">{user?.first_name[0] + user?.last_name[0]}</span>
		</div>
	</div>
	<div>
		<h2 class="line-clamp-1 font-bold text-sm">{user?.first_name + ' ' + user?.last_name}</h2>
		<p class="line-clamp-1 text-xs text-neutral-content">
			{user?.cities?.state + ', ' + user?.cities?.city}
		</p>
	</div>
</div>
