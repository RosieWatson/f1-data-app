<script lang="ts">
	import TableRow from '../components/TableRow.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>Formula one</h1>

<table class="w-full border-separate border-spacing-y-2">
	<tbody>
		{#each data.driverStandings as driverStanding}
			<TableRow {driverStanding} maxPoints={data.maxPoints} />
		{/each}
	</tbody>
</table>
