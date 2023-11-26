<script lang="ts">
	import Changethemebtn from '$lib/components/changethemebtn.svelte'
	import { player } from '$lib/stores'

	let currentPlayer: string
	$: currentPlayer = $player

	const board = [
		['', '', ''],
		['', '', ''],
		['', '', '']
	]

	function clickHandler(e: Event) {
		const target = e.target as HTMLElement
		if (target.textContent) return
		console.log(target.dataset.row, target.dataset.col)
		//@ts-expect-error
		board[target.dataset.row][target.dataset.col] = currentPlayer
		target.textContent = currentPlayer
		console.log(board)
		playerSwitcher()
	}

	function playerSwitcher() {
		const nextPlayer = currentPlayer === 'X' ? 'O' : 'X'
		player.set(nextPlayer)
	}

	function winHandler() {
		const lines = [
			[board[0][0], board[0][1], board[0][2]],
			[board[1][0], board[1][1], board[1][2]],
			[board[2][0], board[2][1], board[2][2]],
			[board[0][0], board[1][0], board[2][0]],
			[board[0][1], board[1][1], board[2][1]],
			[board[0][2], board[1][2], board[2][2]],
			[board[0][0], board[1][1], board[2][2]],
			[board[0][2], board[1][1], board[2][0]]
		]

		// Check if any winning combination exists
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i]
			if (a && a === b && a === c) {
				return a
			}
		}

		// No winner
		return null
	}
</script>

<main class="flex flex-col gap-4 w-screen h-screen justify-center items-center">
	<Changethemebtn />
	<h1 class="text-5xl">Player "{currentPlayer}" turn</h1>
	<section class="board grid grid-cols-3 h-[750px] w-[750px]">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={clickHandler}
			data-row="0"
			data-col="0"
			class="cell h-[250px] w-[250px] border flex justify-center items-center text-8xl"
		/>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={clickHandler}
			data-row="0"
			data-col="1"
			class="cell h-[250px] w-[250px] border border-r-0 border-l-0 border-b-0 flex justify-center items-center text-8xl"
		/>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={clickHandler}
			data-row="0"
			data-col="2"
			class="cell h-[250px] w-[250px] border flex justify-center items-center text-8xl"
		/>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={clickHandler}
			data-row="1"
			data-col="0"
			class="cell h-[250px] w-[250px] border border-t-0 border-b-0 flex justify-center items-center text-8xl"
		/>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={clickHandler}
			data-row="1"
			data-col="1"
			class="cell h-[250px] w-[250px] border border-r-0 border-l-0 border-b-0 flex justify-center items-center text-8xl"
		/>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={clickHandler}
			data-row="1"
			data-col="2"
			class="cell h-[250px] w-[250px] border border-t-0 border-b-0 flex justify-center items-center text-8xl"
		/>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={clickHandler}
			data-row="2"
			data-col="0"
			class="cell h-[250px] w-[250px] border flex justify-center items-center text-8xl"
		/>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={clickHandler}
			data-row="2"
			data-col="1"
			class="cell h-[250px] w-[250px] border border-r-0 border-l-0 flex justify-center items-center text-8xl"
		/>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={clickHandler}
			data-row="2"
			data-col="2"
			class="cell h-[250px] w-[250px] border flex justify-center items-center text-8xl"
		/>
	</section>
</main>
