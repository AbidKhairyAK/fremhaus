<script>
	import { onMount } from "svelte";
	import initSmoothScroll from "$lib/utils/initSmoothScroll.js";
	import throttle from 'lodash/throttle'

	function handleContactHeader () {
		const contactHeader = document.querySelector("#contact-header");

		function observerCallback (mutations) {
			mutations.forEach(function (mutationRecord) {
				const thumbDistance = parseInt(
					mutationRecord.target.style.transform.split(",")[1]
				);
				if (thumbDistance < 50) contactHeader.classList.add("z-40");
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
		const isHorizontal = false;
		initSmoothScroll(isHorizontal);
		handleContactHeader()
	});
</script>

<div id="contact" class="flex flex-col h-screen overflow-y-auto">
	<header id="contact-header" class="pt-11 px-14 mb-10 fixed">
		<h1
			class="inline-block text-[7.5rem] text-default pb-2 border-b-4 border-white"
		>
			contact.
		</h1>
		<a href="/" class="text-default mt-4 block">
			<i class="fa-solid fa-arrow-left mr-4 text-xs" />
			go back home
		</a>
	</header>

	<section smooth-scroll class="px-12 pb-3 pt-[18rem] mx-2 relative">
		<div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
			<article
				class="bg-dark-shallow rounded-xl p-6 shadow-xl row-span-1 lg:row-span-2 xl2:row-span-1"
			>
				<h2
					class="text-default text-right text-3xl -translate-y-10 -translate-x-10"
				>
					TERMS of SERVICE
				</h2>
				<div class="prose prose-invert">
					<ul>
						<li class="text-default leading-relaxed">
							We have the right to refuse any project we are not
							comfortable with.
						</li>
						<li class="text-default leading-relaxed">
							Clients do not get the right to claim our works as
							theirs. We retain full rights over any project We
							create, and may display it in our portifolio &
							social media.
						</li>
						<li class="text-default leading-relaxed">
							We require credit to be clearly written. Credit us
							on @fremhaus's twitter.
						</li>
						<li class="text-default leading-relaxed">
							Streaming commercial (like for youtube) is included.
							But not for selling stuffs.
						</li>
						<li class="text-default leading-relaxed">
							Open discussion for the design related approach for
							the commission
						</li>
					</ul>
				</div>
			</article>
			<article class="bg-dark-shallow rounded-xl p-6 shadow-xl ">
				<h2
					class="text-default text-right text-3xl -translate-y-10 -translate-x-10"
				>
					PROCESS
				</h2>
				<div class="prose prose-invert">
					<ul>
						<li class="text-default leading-relaxed">
							Maximum revision is 3 times
						</li>
						<li class="text-default leading-relaxed">
							Turn around times : 1 - 2 months
						</li>
						<li class="text-default leading-relaxed">
							Additional rush fee for 2 weeks turn around time is
							avaialble (+30% price)
						</li>
						<li class="text-default leading-relaxed">
							Additional fee for after effect or blender file is
							+50% price
						</li>
					</ul>
				</div>
			</article>
			<article class="bg-dark-shallow rounded-xl p-6 shadow-xl ">
				<h2
					class="text-default text-right text-3xl -translate-y-10 -translate-x-10"
				>
					PAYMENT
				</h2>
				<div class="prose prose-invert">
					<ul>
						<li class="text-default leading-relaxed">
							Only accepting payment from Paypal and Bank Central
							Asia / BCA (the rate for Indonesian price is 1USD =
							Rp12000)
						</li>
						<li class="text-default leading-relaxed">
							50% payment is required before we start the
							commission.
						</li>
						<li class="text-default leading-relaxed">
							Refund is not available (In the case We are unable
							to finish a commission, the client will be informed
							and fully refunded.)
						</li>
					</ul>
				</div>
			</article>
			<article
				class="bg-dark-shallow rounded-xl p-6 shadow-xl col-span-1 lg:col-span-2 xl2:col-span-3"
			>
				<h2
					class="text-default text-right text-3xl -translate-y-10 -translate-x-10"
				>
					CONTACT
				</h2>
				<div class="prose prose-invert">
					<ul>
						<li class="text-default">
							<i class="fa-solid fa-envelope mr-2" />
							fremhaus@gmail.com
						</li>
						<li class="text-default">
							<i class="fa-brands fa-twitter mr-2" />
							fremhaus
						</li>
					</ul>
				</div>
			</article>
		</div>
	</section>
</div>
