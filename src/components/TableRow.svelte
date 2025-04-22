<script>
	const { driverStanding, maxPoints } = $props();
	const width = (Number(driverStanding.points) / Number(maxPoints)) * 170;
</script>

<tr>
	<td>
		<div class="interactive-table-row flex">
			<div class="bg-primary w-14 self-center rounded-l-md p-1 text-center text-white">
				{driverStanding.Driver.code}
			</div>
			<div
				class="bg-primary-paler self-center rounded-r-md p-1 text-right text-black"
				style={`width: ${width + 24}px;`}
			>
				{driverStanding.points}
			</div>
		</div>
	</td>
</tr>
