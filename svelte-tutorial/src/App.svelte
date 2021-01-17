<script>
  let name = "world"
  let age = 85
  function assign() {
    name = "Heropy"
    age = 36
  }
</script>

<main>
  <h1>Hello {name}!</h1>
  <h2>
    {age}
  </h2>
  <img src="" alt={name} />
  <input type="text" bind:value={name} />
  <button on:click={assign}> Assign </button>
</main>
