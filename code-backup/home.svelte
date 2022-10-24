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

<section class="py-7 border-b border-zinc-500">
	<div class="container relative">
		<h1 class="text-[5.5rem] xl:text-[8rem] text-default drop-shadow-md">
			for your stream graphic<br>
			and animation needs.<br>
			<span class="text-primary">all in one place.</span>
		</h1>
			<!-- class="absolute right-0 bottom-0 -z-10 mr-14 mb-4 w-[17.5rem] h-[17.5rem] object-contain" -->
		<img
			react-to-pointer
			class="absolute right-0 xl:-right-10 -bottom-6 -z-10 mb-4 w-[15rem] h-[15rem] xl:w-[17.5rem] xl:h-[17.5rem] object-contain"
			src="/assets/logo.png"
			alt="fremhaus logo">
	</div>
</section>

<section class="py-4 flex container">
	<h2 class="text-default text-lg">
		Hello! We are Fremhaus. We are ready to assist you for your graphic design, 3D modelling background, or animation needs.
	</h2>
</section>

<nav class="absolute bottom-0 left-0 right-0 mb-8">
	<div class="container">
		<div class="flex justify-end space-x-12">
			<a href="/works" class="text-[6rem] text-default border-b-[3px] border-white pb-2 flex items-end">
				works.
				<img src="/assets/arrow.png" alt="arrow" class="w-[3.75rem] h-[3.75rem] object-contain mb-2 ml-5 mr-7">
			</a>
			<a href="/contact" class="text-[6rem] text-default border-b-[3px] border-white pb-2 flex items-end">
				contact.
				<img src="/assets/arrow.png" alt="arrow" class="w-[3.75rem] h-[3.75rem] object-contain mb-2 ml-5 mr-7">
			</a>
		</div>
	</div>
</nav>