<script>
    import { onMount } from "svelte";
	import reactToPointer from '$lib/utils/reactToPointer.js'

	onMount(() => {
		const { pointerEvent } = reactToPointer()
		document.addEventListener('mousemove', pointerEvent)
		return () => {
			document.removeEventListener('mousemove', pointerEvent)
		}
	})
</script>

<section class="px-14 py-7 relative border-b border-zinc-500">
	<h1 class="text-[8rem] text-default">
		for your stream graphic<br>
		and animation needs.<br>
		<span class="text-primary">all in one place.</span>
	</h1>
		<!-- class="absolute right-0 bottom-0 -z-10 mr-14 mb-4 w-[17.5rem] h-[17.5rem] object-contain" -->
	<img
		react-to-pointer
		class="absolute left-0 bottom-0 -z-10 ml-[70rem] mb-4 w-[17.5rem] h-[17.5rem] object-contain"
		src="/assets/logo.png"
		alt="fremhaus logo">
</section>

<section class="px-14 py-4 flex">
	<h2 class="text-default text-lg mr-10">fremhaus.</h2>
	<h2 class="text-default text-lg mr-10">INDONESIA BASED DESIGN STUDIO</h2>
	<h2 class="text-default text-lg">animated screens</h2>
</section>

<nav class="absolute bottom-0 right-0 flex space-x-12 mb-8 mr-14">
	<a href="/works" class="text-[6rem] text-default border-b-[3px] border-white pb-2 flex items-end">
		works.
		<img src="/assets/arrow.png" alt="arrow" class="w-[3.75rem] h-[3.75rem] object-contain mb-2 ml-5 mr-7">
	</a>
	<a href="/contact" class="text-[6rem] text-default border-b-[3px] border-white pb-2 flex items-end">
		contact.
		<img src="/assets/arrow.png" alt="arrow" class="w-[3.75rem] h-[3.75rem] object-contain mb-2 ml-5 mr-7">
	</a>
</nav>