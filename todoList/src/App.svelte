<script>
	import { writable } from "svelte/store";
	import Todo from "./Todo.svelte";
	let title = "";
	let todos = writable([]);
	let id = 0;

	function createTodo() {
		if (!title.trim()) {
			title = "";
			return;
		}
		todos.push({
			id,
			title,
		});
		$todos = $todos;
		title = "";
		id += 1;
	}
</script>

<input
	bind:value={title}
	type="text"
	on:keydown={(e) => {
		e.key === 'Enter' && createTodo();
	}} />
<button onclick={createTodo}> Create Todo </button>

{#each todos as todo}
	<Todo {todo} {todos} />
{/each}
