<script>
	export let firstName = 'John';
	export let lastName = 'Doe';
	export let state = 'Tunis';
	export let city = 'Tunis';
</script>

<div class="flex gap-2 items-center">
	<div class="avatar placeholder">
		<div class="bg-neutral text-neutral-content rounded-full w-8">
			<span class="font-bold text-sm">{firstName[0] + lastName[0]}</span>
		</div>
	</div>
	<div>
		<h2 class="line-clamp-1 font-bold text-sm">{firstName + ' ' + lastName}</h2>
		<p class="line-clamp-1 text-xs text-neutral-content">
			{state + ', ' + city}
		</p>
	</div>
</div>
