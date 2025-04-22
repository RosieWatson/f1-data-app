<script lang="ts">
	import Card from '../../../lib/components/Card.svelte';
	import TableRow from '../../../lib/components/TableRow.svelte';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div class="w-screen px-10 py-6">
	<a href="/">
		<h1 class="text-shadow-lg">Formula one</h1>
	</a>

	<Card href="#">
		<h2 class="mb-2 text-shadow-lg">Driver standings</h2>
		<table class="w-full border-separate border-spacing-y-2">
			<tbody>
				{#each data.driverStandings as driverStanding}
					<TableRow {driverStanding} maxPoints={data.maxPoints} />
				{/each}
			</tbody>
		</table>
	</Card>
</div>
