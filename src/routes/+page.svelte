<script lang="ts">
	import Card from '../components/Card.svelte';
	import TableRow from '../components/TableRow.svelte';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div class="w-screen px-10 py-6">
	<a href="/">
		<h1 class="text-shadow-lg">Formula one</h1>
	</a>

	<Card href="/drivers/championship">
		<h2 class="mb-2 text-shadow-lg">Top 5 drivers</h2>
		<table class="w-full border-separate border-spacing-y-2">
			<tbody>
				<TableRow driverStanding={data.topDriver} maxPoints={data.maxPoints} />
				<TableRow driverStanding={data.secondDriver} maxPoints={data.maxPoints} />
				<TableRow driverStanding={data.thirdDriver} maxPoints={data.maxPoints} />
				<TableRow driverStanding={data.fourthDriver} maxPoints={data.maxPoints} />
				<TableRow driverStanding={data.fifthDriver} maxPoints={data.maxPoints} />
			</tbody>
		</table>
	</Card>
</div>
