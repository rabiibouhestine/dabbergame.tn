<script>
	import UserInfo from '$lib/components/UserInfo.svelte';
</script>

<a
	href="/listing/1"
	class="flex flex-col sm:flex-row justify-between items-center gap-6 rounded-container"
>
	<UserInfo />
	<div class="flex flex-col sm:flex-row items-center gap-3">
		<div class="badge badge-neutral p-4 font-bold">Condition: New</div>
		<div class="badge badge-neutral p-4 font-bold">Delivery</div>
		<div class="badge badge-neutral p-4 font-bold">Trade</div>
		<div class="badge bg-playstation p-4 font-bold">Playstation 5</div>
		<div class="badge badge-secondary p-4 font-bold">200 DT</div>
	</div>
</a>
