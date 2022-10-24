<script>
    import { onMount } from "svelte";

	import reactToPointer from '$lib/utils/reactToPointer.js'
	import initSmoothScroll from '$lib/utils/initSmoothScroll.js'
	import contact from '$lib/data/contact.js'

	export let data;

	const works = data.works

	onMount(() => {
		initSmoothScroll(false)

		const { pointerEvent } = reactToPointer()
		document.addEventListener('mousemove', pointerEvent)
		return () => {
			document.removeEventListener('mousemove', pointerEvent)
		}
	})
</script>

<svelte:head>
  <title>Fremhaus</title>
</svelte:head>

<!-- Mobile -->
<div class="block lg:hidden h-screen">
	<div class="h-full" smooth-scroll>
		<div class="container overflow-x-hidden">
			<h2 class="pt-6 pb-10 text-default text-center font-bold">fremhaus.</h2>

			<section class="relative pb-6 mb-8 border-b-2 border-zinc-500">
				<h1 class="text-default text-5xl drop-shadow">
					for your<br>
					stream graphic<br>
					and animation<br>
					needs.<br>
					<span class="text-primary">all in one place.</span>
				</h1>
				<figure
					react-to-pointer
					class="transition-transform duration-200 ease-out absolute -right-[2rem] bottom-4 -z-10 mb-4">
					<img
						class="w-[12rem] h-[12rem] object-contain opacity-20 rotate-[20deg]"
						src="/assets/logo.png"
						alt="fremhaus logo">
				</figure>
			</section>

			<p class="text-default leading-normal mb-4">
				I am JACK!!! and I've been working as a designer for pretty long time,
				I can do range of design and motion graphic work such as everything and anything.
				Looking forward to work with you, and making it big and pretty.
			</p>

			<p class="text-default leading-normal mb-12">
				Lets scroll down to see some of the things I've designed that i think you'll like.
			</p>

			<section class="bg-dark-shallow p-4 rounded-lg shadow-md mb-8">
				<h3 class="text-default relative flex items-end text-primary-shallow text-5xl mb-10">
					works.
					<img src="/assets/arrow-primary-shallow.png" alt="arrow" class="w-[1.75rem] h-[1.75rem] object-contain mb-2 ml-3">
				</h3>

				{#each works as work (work)}
					<article class="border-zinc-400 border-t-2 pt-4">
						<h4 class="flex justify-between items-center text-default text-xs">
							<span>Cliente:</span>
							<span>{work.clients.join(', ')}</span>
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
				I think thats it for now, I'm still have plenty of design to show you,
				it'll be updated over time.
			</p>
			<p class="text-default leading-normal mb-8">
				for now if you're interested, we can work together!
				Contact me below and start making anything big big and future tested
				idk man im not guude
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

<!-- Desktop -->
<div class="hidden lg:block">
	<header class="py-7 border-b border-zinc-500">
		<div class="container relative">
			<h1 class="text-[5.5rem] xl:text-[8rem] text-default drop-shadow-md">
				for your stream graphic<br>
				and animation needs.<br>
				<span class="text-primary">all in one place.</span>
			</h1>
				<!-- class="absolute right-0 bottom-0 -z-10 mr-14 mb-4 w-[17.5rem] h-[17.5rem] object-contain" -->
			<img
				react-to-pointer
				class="absolute -right-10 -bottom-6 -z-10 mb-4 w-[15rem] h-[15rem] xl:w-[17.5rem] xl:h-[17.5rem] object-contain"
				src="/assets/logo.png"
				alt="fremhaus logo">
		</div>
	</header>

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
</div>
