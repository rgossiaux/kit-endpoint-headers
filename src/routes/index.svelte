<script>
	import { onMount } from 'svelte';
	onMount(async () => {
		await fetch('http://localhost:5050', {
			credentials: 'include'
		});
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
