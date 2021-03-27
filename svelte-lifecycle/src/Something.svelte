<script>
    import {onDestroy, onMount } from 'svelte'

    // const h1 = document.querySelector('h1')
    // console.log(h1.innerHTML)


    // onMount(() => {
    //     console.log('Mounted!')
    // })
    

    onMount(() => {
        console.log('Mounted!')
        const h1 = document.querySelector('h1')
        console.log(h1.innerHTML)
    })

    onDestroy(() => {
        console.log('Destroy!')
        const h1 = document.querySelector('h1')
        console.log(h1.innerHTML)
    })
</script>

<h1>Something..</h1>