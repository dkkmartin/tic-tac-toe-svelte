<script lang="ts">
	import Changethemebtn from '$lib/components/changethemebtn.svelte'
</script>

<main class="flex w-screen h-screen justify-center items-center">
	<Changethemebtn />
	<section class="board grid grid-cols-3 h-[750px] w-[750px]">
		<div data-cell="0" class="cell h-[250px] w-[250px] border" />
		<div data-cell="1" class="cell h-[250px] w-[250px] border border-r-0 border-l-0 border-b-0" />
		<div data-cell="2" class="cell h-[250px] w-[250px] border" />
		<div data-cell="3" class="cell h-[250px] w-[250px] border border-t-0 border-b-0" />
		<div data-cell="4" class="cell h-[250px] w-[250px] border border-r-0 border-l-0 border-b-0" />
		<div data-cell="5" class="cell h-[250px] w-[250px] border border-t-0 border-b-0" />
		<div data-cell="6" class="cell h-[250px] w-[250px] border" />
		<div data-cell="7" class="cell h-[250px] w-[250px] border border-r-0 border-l-0" />
		<div data-cell="8" class="cell h-[250px] w-[250px] border" />
	</section>
</main>
