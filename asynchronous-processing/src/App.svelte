<script>
	import axios from 'axios'

	let apikey = '9d38c929'
	let title = ''
	let movies = null
	let error = null
	let loading = false
	let promise = new Promise(resolve => {
		resolve([])
	})
	
	async function searchMovies() {
		if(loading) {
			return
		}
		movies = null
		error = null
		loading = true
		try{
			const res = await axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=${title}`)
			movies = res.data.Search
		} catch (err) {
			error = err
		} finally {
			loading = false
		}
	}

	function searchFetchMovies(params) {
		return new Promise(async(resolve, reject) => {
			try{
				const res = await axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=${title}`)
				resolve(res.data.Search)
			} catch (err) {
				reject(err)
			} finally {
				loading = false
			}
		})
	}
</script>

<input bind:value={title}>
<button on:click={() => {
	promise = searchFetchMovies()
})}>검색!</button>


{#await promise}
	<p style="color: royalblue">Loading...</p>
{:then movies}
	<ul>
		{#each movies as movie}
			<li>{movie.Title}</li>
		{/each}
	</ul>
{:catch error}
	<p style="color: red;">{error.message}</p>
{/await}

<!-- {#if loading}
	<p style="color: royalblue">Loading...</p>
{:else if movies}
	<ul>
		{#each movies as movie}
			<li>{movie.Title}</li>
		{/each}
	</ul>
{:else if error}
	<p style="color: red;">{error.message}</p>
{/if} -->