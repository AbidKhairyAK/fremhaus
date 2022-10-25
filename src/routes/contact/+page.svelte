<script>
	import { onMount, tick } from "svelte";
	import throttle from 'lodash/throttle'

	import initSmoothScroll from "$lib/utils/initSmoothScroll.js";
	import contact from "$lib/data/contact.js";
    import { fly, fade } from "svelte/transition";
    import { quartIn, quartOut } from "svelte/easing";

	let loaded

	function handleContactHeader () {
		const contactHeader = document.querySelector("#contact-header");
		const maxDistance = window.innerWidth < 1024 ? 30 : 50

		function observerCallback (mutations) {
			mutations.forEach(function (mutationRecord) {
				const thumbDistance = parseInt(
					mutationRecord.target.style.transform.split(",")[1]
				);
				if (thumbDistance < maxDistance) contactHeader.classList.add("z-40");
				else contactHeader.classList.remove("z-40");
			});
		}

		const throttledObserverCallback = throttle(observerCallback, 100)

		const observer = new MutationObserver(throttledObserverCallback);

		const thumb = document.querySelector(
			"[smooth-scroll] .scrollbar-thumb-y"
		);
		observer.observe(thumb, {
			attributes: true,
			attributeFilter: ["style"],
		});
	}

	onMount(() => {
		setTimeout(async () => {
			loaded = true

			await tick();

			const isHorizontal = false;
			initSmoothScroll(isHorizontal);
			handleContactHeader()
		}, 500)
	});
</script>

<svelte:head>
  <title>Contact | Fremhaus</title>
</svelte:head>

{#if loaded}
	<div id="contact" class="flex flex-col h-screen overflow-y-auto" out:fade={{ easing: quartIn, duration: 500 }}>
		<header in:fly={{ easing: quartOut, x: window.innerWidth, duration: 500 }} id="contact-header" class="pt-7 mb-10 lg:ml-14 fixed left-0 right-0">
			<div class="container">
				<h1 class="inline-block text-7xl lg:text-[7.5rem] text-default pb-2 border-b-4 border-white">
					contact.
				</h1>
				<a href="/" class="text-default mt-4 block group hover:text-primary transition-colors duration-150 ease-out">
					<i class="fa-solid fa-arrow-left mr-4 text-xs group-hover:-translate-x-2 transition-transform duration-150 ease-out" />
					go back home
				</a>
			</div>
		</header>

		<section smooth-scroll class="pb-3 pt-64 lg:pt-[16rem] relative">
			<div class="container">
				<div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
					<article class="bg-dark-shallow rounded-xl p-6 shadow-xl row-span-1 lg:row-span-2 xl2:row-span-1"
					in:fly={{ easing: quartOut, y: window.innerHeight * 0.5, duration: 500, delay: 300 }}>
						<h2 class="text-default text-right text-3xl -translate-y-10 -translate-x-10">
							TERMS of SERVICE
						</h2>
						<div class="prose prose-invert text-default leading-relaxed">
							{@html contact.toc}
						</div>
					</article>
					<article class="bg-dark-shallow rounded-xl p-6 shadow-xl "
						in:fly={{ easing: quartOut, y: window.innerHeight * 0.5, duration: 500, delay: 450 }}>
						<h2 class="text-default text-right text-3xl -translate-y-10 -translate-x-10">
							PROCESS
						</h2>
						<div class="prose prose-invert text-default leading-relaxed">
							{@html contact.process}
						</div>
					</article>
					<article class="bg-dark-shallow rounded-xl p-6 shadow-xl "
						in:fly={{ easing: quartOut, y: window.innerHeight * 0.5, duration: 500, delay: 600 }}>
						<h2 class="text-default text-right text-3xl -translate-y-10 -translate-x-10">
							PAYMENT
						</h2>
						<div class="prose prose-invert text-default leading-relaxed">
							{@html contact.payment}
						</div>
					</article>
					<article class="bg-dark-shallow rounded-xl p-6 shadow-xl col-span-1 lg:col-span-2 xl2:col-span-3"
					in:fly={{ easing: quartOut, y: window.innerHeight * 0.5, duration: 500, delay: 750 }}>
						<h2 class="text-default text-right text-3xl -translate-y-10 -translate-x-10">
							CONTACT
						</h2>
						<div class="prose prose-invert text-default leading-relaxed">
							{@html contact.contact}
						</div>
					</article>
				</div>
			</div>
		</section>
	</div>
{/if}
