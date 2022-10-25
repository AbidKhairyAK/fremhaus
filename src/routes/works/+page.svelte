<script>
	import { onMount, tick } from 'svelte'
	import { fly, fade } from "svelte/transition"
	import { quartOut, quartIn } from "svelte/easing"

	import reactToPointer from '$lib/utils/reactToPointer.js'
	import initSmoothScroll from '$lib/utils/initSmoothScroll.js'
	import { rand } from '$lib/utils/helper.js'

	export let data;

	let loaded = false

	const work = data.works[0]

	const captionPositions = [
		'-left-4 top-0',
		'-left-4 bottom-4',
		'-right-2 top-0',
		'-right-2 bottom-4',

		'left-[30%] top-0',
		'left-[30%] bottom-4',
		'top-[30%] -left-4',
		'top-[30%] -right-4',
		'top-[30%] left-[30%]',

		'left-10 top-10',
		'left-10 bottom-10',
		'right-10 top-10',
		'right-10 bottom-10',
	]
	let captionStyles = [... new Array(work.projects.length).keys()].map(() => ({}))

	function generateCaptionStyle () {
		for (const index in work.projects) {
			const rotate = rand(0, 1) ? rand(-5, -1) : rand(1, 5)
			captionStyles[index].wrapper = captionPositions[rand(0, captionPositions.length - 1)]
			captionStyles[index].box = `transform: rotate(${rotate}deg);`
		}
	}

	function afterTransition () {
		document.addEventListener('mousemove', reactToPointer)
	}

	onMount(() => {
		setTimeout(async () => {
			loaded = true

			await tick();

			const isHorizontal = true
			initSmoothScroll(isHorizontal)
			generateCaptionStyle()
		}, 500)

		return () => {
			document.removeEventListener('mousemove', reactToPointer)
		}
	})
</script>

<svelte:head>
  <title>Works | Fremhaus</title>
  <meta name="description" content="As for now, our portfolio showcase is still limited and It will be updated along the way.">
</svelte:head>

{#if loaded}
	<div
		id="works"
		class="flex flex-col h-full relative pt-7 pb-3"
		in:fly={{ easing: quartOut, x: window.innerWidth, duration: 1000 }}
		out:fade={{ easing: quartIn, duration: 500 }}>
		<header class="px-14 flex">
			<section class="mr-24">
				<h1 class="text-[7.5rem] text-default pb-2 border-b-4 border-white">works.</h1>
				<a href="/" class="text-default mt-4 block group hover:text-primary transition-colors duration-150 ease-out">
					<i class="fa-solid fa-arrow-left mr-4 text-xs group-hover:-translate-x-2 transition-transform duration-150 ease-out"></i>
					go back home
				</a>
			</section>

			<table class="text-default text-sm leading-normal">
				<tr>
					<td class="font-extrabold text-right align-top pr-6">
						Client{work.clients.length > 1 ? 's' : ''}:
					</td>
					<td class="align-top">
						{#each work.clients as client}
							<p>{client}</p>
						{/each}
					</td>
				</tr>
				<tr>
					<td class="font-extrabold text-right align-top pr-6">
						Service{work.services.length > 1 ? 's' : ''}:
					</td>
					<td class="align-top">
						{#each work.services as service}
							<p>{service}</p>
						{/each}
					</td>
				</tr>
			</table>
		</header>

		<section
			smooth-scroll
			class="flex-grow overflow-y-auto w-full px-12 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-white/50 hover:scrollbar-thumb-white scrollbar-track-transparent">
			<article class="flex space-x-8 h-full box-border pt-5">
				{#each work.projects as project, index (project)}
					<figure
						id={'project-' + index}
						class="h-full flex-shrink-0 relative"
						in:fly={{ easing: quartOut, x: window.innerWidth * 0.2, duration: 1000, delay: 400 + (index * 150) }}>

						{#if project.type === 'image'}
							<img src={project.src} alt="art" class="h-full w-auto">
						{:else if project.type === 'video'}
							<video src={project.src} class="aspect-video h-full w-auto" autoplay muted loop></video>
						{/if}

						<figcaption
							react-to-pointer
							class={"absolute z-10 w-[15rem] px-8 py-10 box-content " + (captionStyles[index].wrapper || 'hidden')}>
							<div class="absolute inset-0 z-10 w-full h-full bg-primary-shallow/90 rounded-xl shadow-xl" style={captionStyles[index].box}></div>
							<h3 class="z-20 relative text-default text-3xl font-bold leading-snug">{project.title}</h3>
							<h4 class="z-20 relative text-default">{project.subtitle}</h4>
						</figcaption>
					</figure>
				{/each}

				<div class="self-end flex flex-col items-end text-right text-default w-80 flex-shrink-0 ">
					<p class="text-4xl font-bold">This is the end.</p>
					<p class="text-sm mr-3">thank you for watching</p>

					<a href="/contact" class="flex items-end border-b border-white text-xl font-light mt-40 hover:text-primary transition-colors duration-150 ease-out">
						i want this
						<img src="/assets/arrow.png" alt="arrow" class="w-3 h-auto object-contain ml-2 mb-2">
					</a>

					<a href="/" class="flex items-end border-b border-white text-xl font-light mt-16 hover:text-primary transition-colors duration-150 ease-out">
						back home
						<img src="/assets/arrow.png" alt="arrow" class="w-3 h-auto object-contain ml-2 mb-2 rotate-[135deg]">
					</a>
				</div>
			</article>
		</section>
	</div>
{/if}
