<script>
	import '../app.css'
</script>

<div class="lg:h-screen pl-0 lg:pl-14">
	<aside class="hidden md:flex flex-col justify-between align-center p-4 border-r border-zinc-500 z-50 absolute top-0 bottom-0 left-0">
		<div></div>
		<button>
			<i class="fa-solid fa-bars scale-x-150 text-2xl"></i>
		</button>
		<a href="https://twitter.com/fremhaus" target="_blank" rel="noreferrer">
			<i class="fa-brands fa-twitter text-[#1DA1F2] text-xl"></i>
		</a>
	</aside>
	<main class="lg:h-screen overflow-hidden">
		<slot />
	</main>
</div>