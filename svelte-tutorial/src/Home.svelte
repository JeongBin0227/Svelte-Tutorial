<script>
    const handleClick = () => {
        location.href = "/#/quiz";
    };
</script>

<style>
    #start-page {
        min-height: calc(100vh - 60px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 60px;
    }

    #start-page .title {
        font-size: 28px;
        font-weight: 700;
        letter-spacing: -0.36px;
        color: #444;
        margin-bottom: 36px;
    }

    #start-page .start-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 48px;
        border-radius: 12px;
        font-size: 18px;
        font-weight: 500;
        color: #fff;
        background-color: #58a69e;
        box-shadow: 0px 1px 16px rgba(0, 0, 0, 0.12);
        user-select: none;
    }

    #start-page .start-btn:hover {
        background-color: #027368;
    }
</style>

<main id="app">
    <div id="start-page">
        <h1 class="title">🎊 Welcome To Svelte Test ✍️</h1>
        <button class="start-btn" on:click|once={handleClick}>START</button>
    </div>
</main>
