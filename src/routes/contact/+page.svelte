<script>
	import { onMount } from 'svelte'

	async function initSmoothScroll () {
		const Scrollbar = (await import('smooth-scrollbar')).default
		Scrollbar.init(document.querySelector('#articles'), {
			alwaysShowTracks: true
		})
	}

	onMount(() => {
		initSmoothScroll()
	})
</script>

<div id="contact" class="pt-11 pb-3 flex flex-col h-screen">
	<header class="px-14 mb-10">
		<h1 class="inline-block text-[7.5rem] text-default pb-2 border-b-4 border-white">contact.</h1>
		<a href="/" class="text-default mt-4 block">
			<i class="fa-solid fa-arrow-left mr-4 text-xs"></i>
			go back home
		</a>
	</header>

	<section
		id="articles"
		class="overflow-x-auto flex-grow px-14 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-white/50 hover:scrollbar-thumb-white scrollbar-track-transparent">
		<div class="pt-4 flex items-start flex-nowrap space-x-8">
			<article class="bg-dark-shallow rounded-xl w-5/12 p-6 shadow-xl flex-shrink-0">
				<h2 class="text-default text-right text-3xl -translate-y-10 -translate-x-10">TERMS of SERVICE</h2>
				<div class="prose prose-invert">
					<ul>
						<li class="text-default leading-relaxed">We have the right to refuse any project we are not comfortable with.</li>
						<li class="text-default leading-relaxed">Clients do not get the right to claim our works as theirs. We retain full rights over any project We create, and may display it in our portifolio & social media.</li>
						<li class="text-default leading-relaxed">We require credit to be clearly written. Credit us on @fremhaus's twitter.</li>
						<li class="text-default leading-relaxed">Streaming commercial (like for youtube) is included. But not for selling stuffs.</li>
						<li class="text-default leading-relaxed">Open discussion for the design related approach for the commission</li>
					</ul>
				</div>
			</article>
			<article class="bg-dark-shallow rounded-xl w-5/12 p-6 shadow-xl flex-shrink-0">
				<h2 class="text-default text-right text-3xl -translate-y-10 -translate-x-10">PROCESS</h2>
				<div class="prose prose-invert">
					<ul>
						<li class="text-default leading-relaxed">Maximum revision is 3 times</li>
						<li class="text-default leading-relaxed">Turn around times : 1 - 2 months</li>
						<li class="text-default leading-relaxed">Additional rush fee for 2 weeks turn around time is avaialble (+30% price) </li>
						<li class="text-default leading-relaxed">Additional fee for after effect or blender file is +50% price</li>
					</ul>
				</div>
			</article>
			<article class="bg-dark-shallow rounded-xl w-5/12 p-6 shadow-xl flex-shrink-0">
				<h2 class="text-default text-right text-3xl -translate-y-10 -translate-x-10">PAYMENT</h2>
				<div class="prose prose-invert">
					<ul>
						<li class="text-default leading-relaxed">Only accepting payment from Paypal and Bank Central Asia / BCA (the rate for Indonesian price is 1USD = Rp12000)</li>
						<li class="text-default leading-relaxed">50% payment is required before we start the commission. </li>
						<li class="text-default leading-relaxed">Refund is not available (In the case We are unable to finish a commission, the client will be informed and fully refunded.)</li>
					</ul>
				</div>
			</article>
			<article class="bg-dark-shallow rounded-xl w-3/12 p-6 shadow-xl flex-shrink-0">
				<h2 class="text-default text-right text-3xl -translate-y-10 -translate-x-10">CONTACT</h2>
				<div class="prose prose-invert">
					<ul>
						<li class="text-default">
							<i class="fa-solid fa-envelope mr-2"></i>
							fremhaus@gmail.com
						</li>
						<li class="text-default">
							<i class="fa-brands fa-twitter mr-2"></i>
							fremhaus
						</li>
						<li class="text-default">
							<i class="fa-brands fa-facebook mr-2"></i>
							fremhaus
						</li>
						<li class="text-default">
							<i class="fa-solid fa-phone mr-2"></i>
							+62 888 8888 8888
						</li>
					</ul>
				</div>
			</article>
		</div>
	</section>
</div>