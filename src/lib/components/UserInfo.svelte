<script>
	export let first_name = 'John';
	export let last_name = 'Doe';
	export let state = 'Tunis';
	export let city = 'Tunis';
</script>

<div class="flex gap-2 items-center">
	<div class="avatar placeholder">
		<div class="bg-neutral text-neutral-content rounded-full w-8">
			<span class="font-bold text-sm">{first_name[0] + last_name[0]}</span>
		</div>
	</div>
	<div>
		<h2 class="line-clamp-1 font-bold text-sm">{first_name + ' ' + last_name}</h2>
		<p class="line-clamp-1 text-xs text-neutral-content">
			{state + ', ' + city}
		</p>
	</div>
</div>
