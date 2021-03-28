<script>
    import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte'

    let name = 'Anything..'

    function moreDot() { 
        name += '.'
    }

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

    beforeUpdate(() => {
        console.log('Before update!')
    })
    
    afterUpdate(() => {
        console.log('After update!')
    })
    
</script>

<h1 on:click={moreDot}>{name}</h1>