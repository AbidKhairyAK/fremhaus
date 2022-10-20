<script>
	import '../app.css'
</script>

<div class="flex items-stretch h-screen">
	<aside class="flex flex-col justify-between align-center p-4 border-r border-zinc-500 relative z-50">
		<div></div>
		<button>
			<i class="fa-solid fa-bars scale-x-150 text-2xl"></i>
		</button>
		<a href="https://twitter.com">
			<i class="fa-brands fa-twitter text-[#1DA1F2] text-xl"></i>
		</a>
	</aside>
	<main class="flex-grow">
		<slot />
	</main>
</div>