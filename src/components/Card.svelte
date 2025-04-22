<script>
	import { goto } from '$app/navigation';

	const { children, href } = $props();
</script>

<button
	onclick={() => goto(href)}
	class="bg-black-reverse w-full rounded-xl border-4 border-double px-6 py-4 shadow-lg"
	style="max-width: 300px;"
>
	{@render children?.()}
</button>
