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
        $todos = $todos.filter((todo) => todo.id !== todo.id);
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
        <button onclick={updateTodo}>ok</button><button
            onclick={offEdit}>Delete</button>
    </div>
{:else}
    <div>
        {todo.title}
        <button onclick={onEdit}>Edit</button>
        <button onclick={deleteTodo}>Delete</button>
    </div>
{/if}
