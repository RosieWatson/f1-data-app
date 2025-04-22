<script lang="ts">
	import '@fontsource/arvo';
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}

<style>
	:global(body) {
		font-family: 'Arvo', sans-serif;
	}
</style>
