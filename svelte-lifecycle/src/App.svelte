<script>
	import Something from './Something.svelte'
	import Anytihng from './Anything.svelte'
	let toggle  = false
</script>

<button on:click={() => {toggle = !toggle}}>
	Toggle
</button>

<!-- {#if toggle}
	<Something/>
{/if} -->

{#if toggle}
	<Anytihng/>
{/if}