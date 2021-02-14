<script>
    export let todo;
    export let todos;

    let isEdit = false;
    let title = "";
    function onEdit() {
        isEdit = true;
    }

    function offEdit() {
        isEdit = false;
    }

    function deleteTodo() {
        $todos = $todos.filter((t) => t.id !== todo.id);
    }

    function updateTodo() {
        todo.title = title;
        offEdit();
    }
</script>

{#if isEdit}
    <div>
        <input
            type="text"
            bind:value={title}
            on:keydown={(e) => {
                e.key === 'Enter' && updateTodo();
            }} />
        <button on:click={updateTodo}>ok</button><button
            on:click={offEdit}>Delete</button>
    </div>
{:else}
    <div>
        {todo.title}
        <button on:click={onEdit}>Edit</button>
        <button on:click={deleteTodo}>Delete</button>
    </div>
{/if}
