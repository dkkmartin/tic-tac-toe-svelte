<script lang="ts">
	import { goto } from '$app/navigation'
	import Changethemebtn from '$lib/components/changethemebtn.svelte'
	import { player } from '$lib/stores'

	function playAs(symbol: string) {
		player.set(symbol)
	}

	function navigate() {
		goto('/game')
	}
</script>

<main class="flex flex-col items-center justify-center h-screen gap-5">
	<Changethemebtn />
	<h1 class="text-8xl">Tic-tac-toe</h1>
	<div class="w-[300px] flex justify-evenly">
		<button
			on:click={() => {
				playAs('O')
				navigate()
			}}
			class="btn btn-primary">Play as O</button
		>
		<button
			on:click={() => {
				playAs('X')
				navigate()
			}}
			class="btn btn-primary">Play as X</button
		>
	</div>
</main>
