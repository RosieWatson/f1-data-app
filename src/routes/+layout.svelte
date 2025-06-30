<script lang="ts">
    import '@fontsource-variable/bricolage-grotesque';
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}

<style>
	:global(body) {
		font-family: 'Bricolage Grotesque Variable', sans-serif;
	}
</style>
