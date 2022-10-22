<script>
	import { onMount } from 'svelte'

	import reactToPointer from '$lib/utils/reactToPointer.js'
	import initSmoothScroll from '$lib/utils/initSmoothScroll.js'
	import { rand } from '$lib/utils/helper.js'

	export let data;

	const work = data.works[0]

	let captionStyles = [... new Array(work.projects.length).keys()].map(() => ({}))



	function generateCaptionStyle () {
		for (const index in work.projects) {
			let loaded = false

			function imgLoadHandler (index) {
				if (loaded) return
				loaded = true
				const el = document.querySelector('#project-' + index)
				const { clientHeight, clientWidth } = el
				const top = rand(-30, clientHeight - 120)
				const left = rand(0, clientWidth - 240)
				console.log('left', left)
				console.log('top', top)
				const rotate = rand(-10, 10)
				captionStyles[index].wrapper = `top: ${top}px; left: ${left}px;`
				captionStyles[index].box = `transform: rotate(${rotate}deg);`
			}

			const media = document.querySelector('#media-' + index)

			switch (media.tagName) {
				case 'IMG':
					media.onload = imgLoadHandler(index)
					media.src = media.src
					if (media.complete) imgLoadHandler(index)
					break
				case 'VIDEO':
					media.onloadeddata = imgLoadHandler(index)
					break
			}
		}
	}

	onMount(() => {
		const isHorizontal = true
		initSmoothScroll(isHorizontal)
		generateCaptionStyle()

		const { pointerEvent } = reactToPointer()
		document.addEventListener('mousemove', pointerEvent)
		return () => {
			document.removeEventListener('mousemove', pointerEvent)
		}
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

		<section class="flex flex-col">
			<table class="text-default text-sm leading-normal">
				<tr>
					<td class="font-extrabold text-right align-top pr-6">
						Client{work.clients.length > 1 ? 's' : ''}:
					</td>
					<td>
						{#each work.clients as client}
							<p>{client}</p>
						{/each}
					</td>
				</tr>
				<tr>
					<td class="font-extrabold text-right align-top pr-6">
						Service{work.services.length > 1 ? 's' : ''}:
					</td>
					<td>
						{#each work.services as service}
							<p>{service}</p>
						{/each}
					</td>
				</tr>
			</table>

			<p class="text-default text-3xl mt-4 -ml-2">
				{work.year}
			</p>
		</section>
	</header>

	<section
		smooth-scroll
		class="flex-grow overflow-y-auto w-full px-12 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-white/50 hover:scrollbar-thumb-white scrollbar-track-transparent">
		<article class="flex space-x-8 h-full box-border py-7">
			{#each work.projects as project, index (project)}
				<figure
					id={'project-' + index}
					class="h-full flex-shrink-0 relative">

					{#if project.type === 'image'}
						<img id={'media-' + index} src={project.src} alt="art" class="h-full w-auto">
					{:else if project.type === 'video'}
						<video id={'media-' + index} class="aspect-video h-full w-auto" autoplay muted loop>
							<source src={project.src} type="video/mp4">
						</video>
					{/if}

					{#if captionStyles[index].wrapper}
						<figcaption
							react-to-pointer
							class="absolute z-10 w-64 px-8 py-10 box-content"
							style={captionStyles[index].wrapper}>
							<div
								class="absolute inset-0 z-10 w-full h-full bg-primary-shallow/90 rounded-xl shadow-xl"
								style={captionStyles[index].box}>
							</div>
							<h3 class="z-20 relative text-default text-3xl font-bold leading-snug">{project.title}</h3>
							<h4 class="z-20 relative text-default">{project.subtitle}</h4>
						</figcaption>
					{/if}
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