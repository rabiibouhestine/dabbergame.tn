<script>
	export let user;
</script>

<div class="flex gap-2 items-center">
	<img
		src={'https://gravatar.com/avatar/' + 'hashedEmail'}
		alt="profile"
		class="rounded-full w-10 h-10"
	/>
	<div>
		<h2 class="line-clamp-1 font-bold">{user?.first_name + ' ' + user?.last_name}</h2>
		<p class="line-clamp-1 text-xs">{user?.cities.state + ', ' + user?.cities.city}</p>
	</div>
</div>
