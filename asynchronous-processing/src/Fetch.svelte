<script>
	let promise = Promise.resolve('Waiting..')
	let isError = false

	function fetchName(params) {
		return new Promise((resolve,reject) => {
			setTimeout(() =>{
				resolve('jeongbin')
				reject(new Error('Sorry :(')) 
			},2000)
		})	
	}
</script>

<button on:click={async() => {
	promise = fetchName()
	console.log(promise)
}}>Fetch Name</button>

{#await promise}
	<p>Loading...</p>
	{:then name}
	<h1>{name}</h1>
	{:catch error}
	<h1>{error}</h1>
{/await}