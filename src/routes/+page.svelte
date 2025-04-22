<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>Formula one</h1>

{#each data.driverStandings as driverStanding}
	{driverStanding.Driver.code}
	{driverStanding.points}
{/each}
