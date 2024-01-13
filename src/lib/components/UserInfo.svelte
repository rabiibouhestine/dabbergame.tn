<script>
	export let user;
</script>

<div class="flex gap-2 items-center">
	<div class="avatar placeholder">
		<div class="bg-neutral text-neutral-content rounded-full w-10">
			<span class="font-bold">{user?.first_name[0] + user?.last_name[0]}</span>
		</div>
	</div>
	<div>
		<h2 class="line-clamp-1 font-bold">{user?.first_name + ' ' + user?.last_name}</h2>
		<p class="line-clamp-1 text-xs">{user?.cities.state + ', ' + user?.cities.city}</p>
	</div>
</div>
