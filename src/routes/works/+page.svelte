<script>
	import { onMount } from 'svelte'
	import { rand } from '$lib/utils/helper.js'

	export let data;

	const work = data.works[0]

	let captionStyles = [... new Array(work.projects.length).keys()].map(() => ({}))

	function generateCaptionStyle () {
		for (const index in work.projects) {
			const el = document.querySelector('#project-' + index)
			const { offsetHeight, offsetWidth } = el
			const top = rand(-30, offsetHeight - 120)
			const left = rand(-20, offsetWidth - 240)
			const rotate = rand(-10, 10)
			captionStyles[index].wrapper = `top: ${top}px; left: ${left}px;`
			captionStyles[index].box = `transform: rotate(${rotate}deg);`
		}
	}

	async function initSmoothScroll () {
		const Scrollbar = (await import('smooth-scrollbar')).default
		Scrollbar.init(document.querySelector('#projects'), {
			alwaysShowTracks: true
		})
	}

	onMount(() => {
		initSmoothScroll()
		generateCaptionStyle()
	})
</script>

<div id="works" class="flex flex-col h-full relative pt-11 pb-3">
	<header class="px-14 flex">
		<section class="mr-24">
			<h1 class="text-[7.5rem] text-default pb-2 border-b-4 border-white">works.</h1>
			<a href="/" class="text-default mt-4 block">
				<i class="fa-solid fa-arrow-left mr-4 text-xs"></i>
				go back home
			</a>
		</section>

		<section class="text-default text-sm text-right font-extrabold leading-normal mr-6">
			<p>Clients:</p>
			<p>Services:</p>
			<p class="text-3xl mt-14">2022</p>
		</section>

		<section class="text-default text-sm font-medium leading-normal">
			<p>Maikel Scotty</p>
			<p>Animation Blablabla</p>
			<p>Desain Blablabla</p>
			<p>Motocrylic Blablabla</p>
		</section>
	</header>

	<section
		id="projects"
		class="flex-grow overflow-y-auto w-full px-12 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-white/50 hover:scrollbar-thumb-white scrollbar-track-transparent">
		<article class="flex space-x-8 h-full box-border py-7">
			{#each work.projects as project, index (project)}
				<figure
					id={'project-' + index}
					class="h-full flex-shrink-0 relative">
					{#if project.type === 'image'}
						<img src={project.src} alt="art" class="h-full w-auto">
					{:else if project.type === 'video'}
						<video class="aspect-video h-full w-auto" autoplay muted>
							<source src={project.src} type="video/mp4">
						</video>
					{/if}
					<figcaption class={"absolute w-72 px-8 py-10 box-content" + (captionStyles[index].wrapper ? 'visible' : 'invisible opacity-0')} style={captionStyles[index].wrapper}>
						<div class="absolute inset-0 z-10 w-full h-full bg-primary-shallow/90 rounded-xl shadow-xl" style={captionStyles[index].box}></div>
						<h3 class="z-20 relative text-default text-3xl font-bold leading-snug">{project.title}</h3>
						<h4 class="z-20 relative text-default">{project.subtitle}</h4>
					</figcaption>
				</figure>
			{/each}

			<div class="self-end flex flex-col items-end text-right text-default w-80 flex-shrink-0 ">
				<p class="text-4xl font-bold">This is the end.</p>
				<p class="text-sm mr-3">thank you for watching</p>

				<a href="/contact" class="flex items-end border-b border-white text-xl font-light mt-40">
					i want this
					<img src="/assets/arrow.png" alt="arrow" class="w-3 h-auto object-contain ml-2 mb-2">
				</a>

				<a href="/" class="flex items-end border-b border-white text-xl font-light mt-16">
					back home
					<img src="/assets/arrow.png" alt="arrow" class="w-3 h-auto object-contain ml-2 mb-2 rotate-[135deg]">
				</a>
			</div>
		</article>
	</section>
</div>