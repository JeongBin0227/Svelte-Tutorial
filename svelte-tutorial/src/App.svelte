<script>
  import Router, { location } from "svelte-spa-router";
  import Home from "./Home.svelte";
  import Quiz from "./Quiz.svelte";
  import Nav from "./Nav.svelte";
  import Result from "./Result.svelte";

  const routes = { "/": Home, "/quiz": Quiz, "/result": Result };
</script>

<Nav />

<Router {routes} />
