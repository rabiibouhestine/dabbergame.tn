<script>
	import PhoneIcon from '~icons/mdi/phone';
	import CogIcon from '~icons/mdi/cog';

	export let isStore = false;
	export let firstName = 'John';
	export let lastName = 'Doe';
	export let state = 'State';
	export let city = 'City';

	export let showSettingsButton = false;
</script>

<div class="bg-base-100 rounded-3xl overflow-hidden">
	<div class="w-full h-[250px] relative bg-gradient-to-tr from-neutral to-base-200">
		{#if showSettingsButton}
			<a href="/user-settings" class="absolute right-4 top-4 btn btn-neutral btn-circle">
				<CogIcon class="text-xl" />
			</a>
		{/if}
		{#if isStore}
			<img
				src="https://scontent.ftun7-1.fna.fbcdn.net/v/t39.30808-6/392928542_879903553693124_7845734790687133584_n.jpg?stp=dst-jpg_s2048x2048&_nc_cat=110&ccb=1-7&_nc_sid=783fdb&_nc_ohc=JBQdL-dIZ1sAX9X0_3y&_nc_ht=scontent.ftun7-1.fna&oh=00_AfA5LSBpQbB0fM-Xb1pFrQdOBEt_Gcsyf7t3IYdgDD8MNA&oe=65AF1B1C"
				alt="profile"
				class="w-full h-full object-cover"
			/>
		{/if}
	</div>
	<div class="flex flex-col justify-between items-center gap-4 pb-8 -mt-20">
		<div class="avatar placeholder" class:indicator={isStore}>
			<div
				class="bg-neutral text-neutral-content rounded-full w-40 outline outline-8 outline-base-100"
			>
				{#if isStore}
					<img
						src="https://scontent.ftun7-1.fna.fbcdn.net/v/t39.30808-1/281658087_1211058703000603_2983571932015977382_n.jpg?stp=dst-jpg_p480x480&_nc_cat=102&ccb=1-7&_nc_sid=596444&_nc_aid=0&_nc_ohc=7g_qsAiQqaIAX_JTlNo&_nc_ht=scontent.ftun7-1.fna&oh=00_AfB65FvHrAPfOMq01dSwOmfRBV9VmJYu33CiMkRm4ciM9Q&oe=65B0B65A"
						alt="profile"
						class="w-full h-full object-cover"
					/>
				{:else}
					<span class="text-6xl font-bold">{firstName[0] + lastName[0]}</span>
				{/if}
			</div>
		</div>
		<div class="text-center">
			<h2 class="text-4xl font-bold">{firstName + ' ' + lastName}</h2>
			<p class="text-slate-300">{state + ', ' + city}</p>
		</div>
		<div class="flex justify-center gap-3">
			<a href="/" class="btn btn-neutral btn-circle">
				<PhoneIcon class="text-xl" />
			</a>
		</div>
	</div>
</div>
