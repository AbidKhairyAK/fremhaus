<script>
    import { onMount, tick } from "svelte";
	import { fly, scale } from "svelte/transition"
	import { quartOut, quartIn } from "svelte/easing"

	import reactToPointer from '$lib/utils/reactToPointer.js'
	import initSmoothScroll from '$lib/utils/initSmoothScroll.js'
	import contact from '$lib/data/contact.js'

	export let data;

	const easing = quartOut
	const works = data.works
	let loadedDesktop = false
	let loadedMobile = false

	function afterTransition () {
		document.addEventListener('mousemove', reactToPointer)
	}

	onMount(async () => {
		const isDesktop = window.innerWidth > 1024
		if (isDesktop) loadedDesktop = true
		else {
			loadedMobile = true
			await tick();
			initSmoothScroll(false)
		}

		return () => {
			document.removeEventListener('mousemove', reactToPointer)
		}
	})
</script>

<svelte:head>
  <title>Fremhaus</title>
</svelte:head>

<!-- Mobile -->
{#if loadedMobile}
	<div class="block lg:hidden h-screen">
		<div class="h-full" smooth-scroll>
			<div class="container overflow-x-hidden">
				<h2
					class="pt-6 pb-10 text-default text-center font-bold"
					in:fly={{ easing, y: 50, duration: 500 }}>
					fremhaus.
				</h2>

				<section id="mobile-header-wrapper" class="relative pb-6 mb-8 border-zinc-500">
					<h1 class="text-default text-5xl drop-shadow">
						<p in:fly={{ easing, y: 50, duration: 500, delay: 100 * 1 }}>for your</p>
						<p in:fly={{ easing, y: 50, duration: 500, delay: 100 * 2 }}>stream graphic</p>
						<p in:fly={{ easing, y: 50, duration: 500, delay: 100 * 3 }}>and animation</p>
						<p in:fly={{ easing, y: 50, duration: 500, delay: 100 * 4 }}>needs.</p>
						<p
							class="text-primary"
							in:fly={{ easing, y: 50, duration: 500, delay: 100 * 5 }}
							on:introend={() => document.querySelector('#mobile-header-wrapper').classList.add('border-b-2')}>
							all in one place.
						</p>
					</h1>
					<figure
						react-to-pointer
						in:scale={{ easing, start: 0.5, duration: 1000 }}
						class="transition-transform duration-200 ease-out absolute -right-[2rem] bottom-4 -z-10 mb-4">
						<img
							class="w-[12rem] h-[12rem] object-contain opacity-20 rotate-[20deg]"
							src="/assets/logo.png"
							alt="fremhaus logo">
					</figure>
				</section>

				<p class="text-default leading-normal mb-4" in:fly={{ easing, y: 50, duration: 500, delay: 100 * 6 }}>
					I am JACK!!! and I've been working as a designer for pretty long time,
					I can do range of design and motion graphic work such as everything and anything.
					Looking forward to work with you, and making it big and pretty.
				</p>

				<p class="text-default leading-normal mb-12" in:fly={{ easing, y: 50, duration: 500, delay: 100 * 7 }}>
					Lets scroll down to see some of the things I've designed that i think you'll like.
				</p>

				<section class="bg-dark-shallow p-4 rounded-lg shadow-md mb-8" in:fly={{ easing, y: 50, duration: 500, delay: 100 * 8 }}>
					<h3 class="text-default relative flex items-end text-primary-shallow text-5xl mb-10">
						works.
						<img src="/assets/arrow-primary-shallow.png" alt="arrow" class="w-[1.75rem] h-[1.75rem] object-contain mb-2 ml-3">
					</h3>

					{#each works as work (work)}
						<article class="border-zinc-400 border-t-2 pt-4">
							<h4 class="flex justify-between items-start text-default text-xs leading-normal">
								<span class="font-bold">Cliente:</span>
								<span class="text-right">{@html work.clients.join('<br>')}</span>
							</h4>

							{#each work.projects as project (project)}
								<figure class="w-full h-auto relative mb-2 mt-4">
									{#if project.type === 'image'}
										<img src={project.src} alt={project.title} class="w-full h-auto object-contain">
									{:else if project.type === 'video'}
										<video src={project.src} muted loop autoplay></video>
									{/if}

									<figcaption class="absolute left-0 right-0 bottom-0 bg-black/25 px-2 py-1 text-right text-default text-xs">
										{project.title}
									</figcaption>
								</figure>
							{/each}
						</article>
					{/each}
				</section>

				<p class="text-default leading-normal mb-4">
					As for now, our portfolio showcase is still limited and It will be updated along the way.
				</p>
				<p class="text-default leading-normal mb-8">
					But you don’t need to worry! We are confident that we can do broad range of design and motion graphic. Of course, we can  also discuss the design approach together!
				</p>

				<section class="bg-dark-shallow p-4 rounded-lg shadow-md mb-10">
					<h3 class="text-default relative flex items-end text-primary-shallow text-5xl mb-4">
						contact.
						<img src="/assets/arrow-primary-shallow.png" alt="arrow" class="w-[1.75rem] h-[1.75rem] object-contain mb-2 ml-3">
					</h3>

					<p class="text-default leading-normal mb-8">
						here my social media, we can talk more there idk idk,
						feel free to ask me about services etc,
						my manager will do hehe lop yubb
					</p>

					<article class="prose prose-invert text-default leading-relaxed">
						{@html contact.contact}

						<h3>PROCESS</h3>
						{@html contact.process}

						<h3>PAYMENT</h3>
						{@html contact.payment}

						<h3>TERMS of SERVICE</h3>
						{@html contact.toc}
					</article>
				</section>
			</div>
		</div>
	</div>
{/if}

<!-- Desktop -->
{#if loadedDesktop}
	<div class="hidden lg:block relative h-screen" out:fly={{ easing: quartIn, x: window.innerWidth * -1, duration: 500 }}>
		<header class="py-7 border-b border-zinc-500">
			<div class="container relative">
				<h1 class="text-[5.5rem] xl:text-[8rem] text-default drop-shadow-md">
					<p in:fly={{ easing, y: 150, duration: 500 }}>for your stream graphic</p>
					<p in:fly={{ easing, y: 150, duration: 500, delay: 150 }}>and animation needs.</p>
					<p in:fly={{ easing, y: 150, duration: 500, delay: 300 }} class="text-primary">all in one place.</p>
				</h1>
					<!-- class="absolute right-0 bottom-0 -z-10 mr-14 mb-4 w-[17.5rem] h-[17.5rem] object-contain" -->
				<img
					react-to-pointer
					in:scale={{ easing, start: 0.5, duration: 1000 }}
					on:introend={afterTransition}
					class="absolute -right-10 -bottom-6 -z-10 mb-4 w-[15rem] h-[15rem] xl:w-[17.5rem] xl:h-[17.5rem] object-contain"
					src="/assets/logo.png"
					alt="fremhaus logo">
			</div>
		</header>

		<section class="py-4 flex container">
			<h2 class="text-default text-lg" in:fly={{ easing, y: 150, duration: 500, delay: 450 }}>
				Hello! We are Fremhaus. We are ready to assist you for your graphic design, 3D modelling background, or animation needs.
			</h2>
		</section>

		<nav class="absolute bottom-0 left-0 right-0 mb-8 overflow-hidden">
			<div class="container">
				<div class="flex justify-end space-x-12">
					<a
						href="/works"
						class="text-[6rem] text-default border-b-[3px] border-white pb-2 flex items-end group hover:text-primary transition-colors duration-150 ease-out"
						in:fly={{ easing, x: 150, duration: 500, delay: 600 }}>
						works.
						<img src="/assets/arrow.png" alt="arrow" class="w-[3.75rem] h-[3.75rem] object-contain mb-2 ml-5 mr-7 group-hover:-rotate-45 transition-transform duration-150 ease-out" >
					</a>
					<a
						href="/contact"
						class="text-[6rem] text-default border-b-[3px] border-white pb-2 flex items-end group hover:text-primary transition-colors duration-150 ease-out"
						in:fly={{ easing, x: 150, duration: 500, delay: 750 }}>
						contact.
						<img src="/assets/arrow.png" alt="arrow" class="w-[3.75rem] h-[3.75rem] object-contain mb-2 ml-5 mr-7 group-hover:-rotate-45 transition-transform duration-150 ease-out">
					</a>
				</div>
			</div>
		</nav>
	</div>
{/if}
