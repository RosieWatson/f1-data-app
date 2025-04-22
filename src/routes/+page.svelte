<script lang="ts">
	import Card from '../lib/components/Card.svelte';
	import ConstructorsTableRow from '../lib/components/ConstructorsTableRow.svelte';
	import TableRow from '../lib/components/TableRow.svelte';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div class="w-screen px-10 py-6">
	<a href="/">
		<h1 class="text-shadow-lg">Formula one</h1>
	</a>

	<div class="flex flex-wrap gap-5">
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

		<Card href="/constructors/championship">
			<h2 class="mb-2 text-shadow-lg">Top 5 teams</h2>
			<table class="w-full border-separate border-spacing-y-2">
				<tbody>
					<ConstructorsTableRow standing={data.topCons} maxPoints={data.maxConsPoints} />
					<ConstructorsTableRow standing={data.secondCons} maxPoints={data.maxConsPoints} />
					<ConstructorsTableRow standing={data.thirdCons} maxPoints={data.maxConsPoints} />
					<ConstructorsTableRow standing={data.fourthCons} maxPoints={data.maxConsPoints} />
					<ConstructorsTableRow standing={data.fifthCons} maxPoints={data.maxConsPoints} />
				</tbody>
			</table>
		</Card>
	</div>
</div>
