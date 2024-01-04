<script>
	import CheckCircleOutlineRounded from '~icons/material-symbols/check-circle-outline-rounded';
	import CancelOutlineRounded from '~icons/material-symbols/cancel-outline-rounded';

	let search = '';
	let products = [];
	let timeout;
	let searching = false;

	function handle_search() {
		searching = true;
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(get_products, 300);
	}

	async function get_products() {
		if (!search) {
			reset();
			return;
		}

		const data = await fetch('https://dummyjson.com/products/search?q=' + search)
			.then((res) => {
				if (!res.ok) {
					handleError();
					return;
				}
				return res.json();
			})
			.catch((e) => handleError());
		products = data?.products || [];
		searching = false;
	}

	function handleError() {
		alert('Something went wrong.');
		reset();
	}

	function reset() {
		search = '';
		products = [];
		searching = false;
	}
</script>

<div class="w-full relative">
	<input
		bind:value={search}
		on:input={handle_search}
		type="text"
		placeholder="Enter game title..."
		class="input input-bordered rounded-full w-full"
	/>
	{#if searching}
		<ul class="absolute w-full mt-2 z-[1] menu p-2 shadow bg-base-100 rounded-box">
			<li>
				<div>Searching...</div>
			</li>
		</ul>
	{/if}
	{#if products.length}
		<ul class="absolute w-full mt-2 z-[1] menu p-2 shadow bg-base-100 rounded-box">
			{#each products as product}
				<li>
					<a href="/listings/1" on:click={reset}>
						{product.title} ({product.price}€)
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
