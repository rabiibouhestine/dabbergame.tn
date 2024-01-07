<script>
	import UserInfo from '$lib/components/UserInfo.svelte';
</script>

<a
	href="/listing/1"
	class="flex flex-col sm:flex-row justify-between items-center gap-6 rounded-container"
>
	<UserInfo user={{ name: 'Foulen Ben Falten', state: 'Ben Arous', city: 'El Mourouj' }} />
	<div class="flex flex-col sm:flex-row items-center gap-3">
		<div class="badge badge-lg h-12 p-4 font-bold">Playstation 5</div>
		<div class="badge badge-lg h-12 p-4 font-bold">200 DT</div>
	</div>
</a>
