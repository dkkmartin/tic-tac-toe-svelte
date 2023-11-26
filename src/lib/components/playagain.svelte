<script lang="ts">
	import { winner } from '$lib/stores'
	import { goto } from '$app/navigation'

	function navigation() {
		goto('/')
	}
</script>

<section class="flex flex-col items-center justify-center gap-10 h-screen">
	<h1 class="text-5xl">Player {$winner} won</h1>
	<button on:click={navigation} class="btn btn-primary">Play again</button>
</section>
