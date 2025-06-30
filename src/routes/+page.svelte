<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div class="w-screen px-10 py-6">
<h3><b>Race:</b> Austria</h3>
<h3><b>Driver:</b> Lando Norris</h3>

<hr>

<span><b>Sector 1:</b>{data.duration_sector_1}<span><br/>
<span><b>Sector 2:</b>{data.duration_sector_2}<span><br/>
<span><b>Sector 3:</b>{data.duration_sector_3}<span><br/>


<span><b>Lap time:</b>{data.lap_duration}<span><br/>


<span><b>Speed trap:</b>{data.st_speed}<span>
</div>
