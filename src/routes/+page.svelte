<script lang="ts">
	import { LinkedChart, LinkedValue } from 'svelte-tiny-linked-charts';

	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let sector1: Record<string, number> = $state.raw({});
	let sector2: Record<string, number> = $state.raw({});
	let sector3: Record<string, number> = $state.raw({});
	let lapTime: Record<string, number> = $state.raw({});
	let speedTrap: Record<string, number> = $state.raw({});

	if (data.laps.length > 0) {
		data.laps.forEach((lap) => {
			sector1[`Lap ${lap.lap_number}`] = lap.duration_sector_1 ?? 0;
			sector2[`Lap ${lap.lap_number}`] = lap.duration_sector_2 ?? 0;
			sector3[`Lap ${lap.lap_number}`] = lap.duration_sector_3 ?? 0;
			lapTime[`Lap ${lap.lap_number}`] = lap.lap_duration ?? 0;
			speedTrap[`Lap ${lap.lap_number}`] = lap.st_speed ?? 0;
		});
	}
</script>

<div class="w-screen px-10 py-6">
	<h3><b>Race:</b> Austria</h3>
	<h3><b>Driver:</b> Lando Norris</h3>

	<hr />

	<div>
		<div class="data-row">
			<div>
				<h4>Sector 1</h4>
				<LinkedValue uid="sector-1" />
			</div>
			<LinkedChart
				data={sector1}
				linked="link-1"
				uid="sector-1"
				grow
				fadeOpacity={0.25}
				fill="#cc3850"
				gap={0.25}
			/>
		</div>
		<br />

		<div class="data-row">
			<div>
				<h4>Sector 2</h4>
				<LinkedValue uid="sector-2" />
			</div>
			<LinkedChart
				data={sector2}
				linked="link-1"
				uid="sector-2"
				grow
				fadeOpacity={0.25}
				fill="#cc3850"
				gap={0.25}
			/>
		</div>
		<br />

		<div class="data-row">
			<div>
				<h4>Sector 3</h4>
				<LinkedValue uid="sector-3" />
			</div>
			<LinkedChart
				data={sector3}
				linked="link-1"
				uid="sector-3"
				grow
				fadeOpacity={0.25}
				fill="#cc3850"
				gap={0.25}
			/>
		</div>
		<br />

		<div class="data-row">
			<div>
				<h4>Lap time</h4>
				<LinkedValue uid="lap-time" />
			</div>
			<LinkedChart
				data={lapTime}
				linked="link-1"
				uid="lap-time"
				grow
				fadeOpacity={0.25}
				fill="#cc3850"
				gap={0.25}
			/>
		</div>
		<br />

		<div class="data-row">
			<div>
				<h4>Speed trap</h4>
				<LinkedValue uid="speed-trap" />
			</div>
			<LinkedChart
				data={speedTrap}
				linked="link-1"
				uid="speed-trap"
				grow
				fadeOpacity={0.25}
				fill="#cc3850"
				gap={0.25}
			/>
		</div>
	</div>
</div>
