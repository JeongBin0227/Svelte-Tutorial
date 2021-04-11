import App from "./App.svelte";
import Fetch from "./Fetch.svelte";

const app = new Fetch({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
