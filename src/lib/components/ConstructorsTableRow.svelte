<script>
	const { standing, maxPoints } = $props();
	const width = (Number(standing.points) / Number(maxPoints)) * 135;
</script>

<tr>
	<td>
		<div class="interactive-table-row flex">
			<div class="bg-primary w-24 self-center rounded-l-md p-1 text-center text-white">
				{standing.Constructor.name}
			</div>
			<div
				class="bg-primary-paler self-center rounded-r-md p-1 text-right text-black"
				style={`width: ${width + 24}px;`}
			>
				{standing.points}
			</div>
		</div>
	</td>
</tr>
