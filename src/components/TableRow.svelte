<script>
	const { driverStanding, maxPoints } = $props();
	const width = (Number(driverStanding.points) / Number(maxPoints)) * 100;
</script>

<tr>
	<td class="w-6 rounded-l-md bg-black p-1 text-white">
		{driverStanding.Driver.permanentNumber}
	</td>
	<td class="bg-secondary w-10 p-1 text-white">
		{driverStanding.Driver.code}
	</td>
	<td>
		<div class="bg-tertiary rounded-r-md p-1 text-right text-black" style={`width: ${width}%`}>
			{driverStanding.points}
		</div>
	</td>
</tr>
