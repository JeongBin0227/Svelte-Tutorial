<script>
    import { num, addNumber } from "./store";

    function selectAnswer(exampleElem) {
        const unselectedExamples = document
            .querySelector(".selected .example-container")
            .querySelectorAll(
                `.example:not([data-index="${exampleElem.target.dataset.index}"])`
            );
        addNumber(exampleElem.target.dataset.index);
        unselectedExamples.forEach((example) => {
            example.style.transform = `translateY(16px) scale(0.75)`;
            example.style.opacity = 0;
        });
        setTimeout(() => {
            num.increment();
        }, 800);
    }

    const handleClick = (exampleElem) => {
        const unselectedExamples = document
            .querySelector(".selected .example-container")
            .querySelectorAll(
                `.example:not([data-index="${exampleElem.target.dataset.index}"])`
            );
        addNumber(exampleElem.target.dataset.index);
        unselectedExamples.forEach((example) => {
            example.style.transform = `translateY(16px) scale(0.75)`;
            example.style.opacity = 0;
        });
        setTimeout(() => {
            location.href = "/#/result";
        }, 800);
    };
</script>

<style>
    #quiz-page {
        min-height: calc(100vh - 60px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 60px;
    }

    #quiz-page .quiz {
        transition: 0.5s ease-out;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #quiz-page .question {
        font-size: 24px;
        font-weight: 700;
        color: #333;
        margin-bottom: 36px;
    }

    #quiz-page .example-container {
        width: 400px;
    }

    #quiz-page .example {
        transition: 0.5s ease-out;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60px;
        border-radius: 8px;
        color: #fff;
        background-color: #8abfba;
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.12);
        margin-bottom: 24px;
        cursor: pointer;
    }

    #quiz-page .example:hover,
    #quiz-page .example.active {
        background-color: #58a69e;
    }

    #quiz-page .example:last-child {
        margin-bottom: 0;
    }
    .hide {
        display: none !important;
    }
</style>

<main id="app">
    <div id="quiz-page">
        <div class="quiz-container">
            <div
                class="quiz "
                class:hide={$num !== 1}
                class:selected={$num === 1}
                data-id="1"
                style="opacity: 1;">
                <div class="question">Q. 스벨트는 가상돔을 사용한다.</div>
                <ul class="example-container">
                    <li
                        class="example"
                        data-index="0"
                        on:click={(e) => selectAnswer(e)}>
                        YES
                    </li>
                    <li
                        class="example"
                        data-index="1"
                        on:click={(e) => selectAnswer(e)}>
                        NO
                    </li>
                </ul>
            </div>
            <div
                class="quiz dp-none hidden"
                class:hide={$num !== 2}
                class:selected={$num === 2}
                data-id="2">
                <div class="question">
                    Q. 스벨트의 스토어에서 가져온 데이터를 사용 하는 방법은?
                </div>
                <ul class="example-container">
                    <li
                        class="example"
                        data-index="0"
                        on:click={(e) => selectAnswer(e)}>
                        {@html '{data}'}
                    </li>
                    <li
                        class="example"
                        data-index="1"
                        on:click={(e) => selectAnswer(e)}>
                        {@html '{$data}'}
                    </li>
                    <li
                        class="example"
                        data-index="2"
                        on:click={(e) => selectAnswer(e)}>
                        {@html '{#data}'}
                    </li>
                </ul>
            </div>
            <div
                class="quiz dp-none hidden"
                class:hide={$num !== 3}
                class:selected={$num === 3}
                data-id="3">
                <div class="question">
                    Q. 스벨트에서 분기를 사용하는 방법은??
                </div>
                <ul class="example-container">
                    <li
                        class="example"
                        data-index="0"
                        on:click={(e) => handleClick(e)}>
                        {@html '{#if ~~~}'}
                    </li>
                    <li
                        class="example"
                        data-index="1"
                        on:click={(e) => handleClick(e)}>
                        {@html '{$if ~~~}'}
                    </li>
                    <li
                        class="example"
                        data-index="2"
                        on:click={(e) => handleClick(e)}>
                        {@html '{if ~~~}'}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</main>
