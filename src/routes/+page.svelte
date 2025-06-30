<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	console.log('do I have data??', data)
</script>

<div class="w-screen px-10 py-6">
<h3>Race: Austria</h3>
<h3>Driver: Lando Norris</h3>

<span><b>Sector 1:</b>{data.duration_sector_1}<span><br/>
<span><b>Sector 2:</b>{data.duration_sector_2}<span><br/>
<span><b>Sector 3:</b>{data.duration_sector_3}<span><br/>


<span><b>Lap time:</b>{data.lap_duration}<span><br/>


<span><b>Speed trap:</b>{data.st_speed}<span>
</div>
