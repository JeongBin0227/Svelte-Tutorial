<script>
    import { answer, userAnswer, quizList } from "./store";

    const goHome = () => {
        location.href = "/";
    };
</script>

<style>
    #result-page {
        min-height: calc(100vh - 60px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 60px;
    }

    #result-page .inner-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 30px 48px 36px;
        border-radius: 12px;
        background-color: #fff;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
    }

    #result-page .title {
        font-size: 32px;
        font-weight: 700;
        letter-spacing: -0.36px;
        color: #222;
        margin-bottom: 36px;
    }

    #result-page .result-container {
        margin-bottom: 48px;
    }

    #result-page .result {
        margin-bottom: 28px;
    }

    #result-page .result:last-child {
        margin-bottom: 0;
    }

    #result-page .result-icon {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 6px;
    }

    #result-page .result-icon.correct {
        color: #027368;
    }

    #result-page .result-icon.incorrect {
        color: #cd7d7e;
    }

    #result-page .question {
        font-size: 15px;
        font-weight: 500;
        color: #58a69e;
        margin-bottom: 4px;
    }

    #result-page .user-answer {
        font-size: 15px;
        font-weight: 500;
        color: #e5b0aa;
    }

    #result-page .correct-answer {
        font-size: 14px;
        font-weight: 500;
        color: #444;
        margin-top: 8px;
    }

    #result-page .restart-btn {
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

    #result-page .restart-btn:hover {
        background-color: #027368;
    }

    .hide {
        display: none;
    }
</style>

<div id="result-page">
    <div class="inner-container">
        <h1 class="title">Result 🐙</h1>
        <div class="result-container">
            <div class="result">
                <div
                    class="result-icon"
                    class:correct={$answer[0] === userAnswer[0]}
                    class:incorrect={$answer[0] !== userAnswer[0]}>
                    {$answer[0] === userAnswer[0] ? '👍 Excellent!' : '🤦‍♂️ No...'}
                </div>
                <div class="question">
                    Q. 자바스크립트는 자바에서 파생된 언어이다.
                </div>
                <div class="user-answer">
                    A.
                    {quizList[0].examples[userAnswer[0]].title}
                </div>
                <div
                    class="correct-answer"
                    class:hide={$answer[0] === userAnswer[0]}>
                    Right Answer. No
                </div>
            </div>
            <div class="result">
                <div
                    class="result-icon"
                    class:correct={$answer[1] === userAnswer[1]}
                    class:incorrect={$answer[1] !== userAnswer[1]}>
                    {$answer[1] === userAnswer[1] ? '👍 Excellent!' : '🤦‍♂️ No...'}
                </div>
                <div class="question">Q. 자바스크립트가 해당하는 것은?</div>
                <div class="user-answer">
                    A.
                    {quizList[1].examples[userAnswer[1]].title}
                </div>
                <div
                    class="correct-answer"
                    class:hide={$answer[1] === userAnswer[1]}>
                    Right Answer.
                    {@html '{$data}'}
                </div>
            </div>
            <div class="result">
                <div
                    class="result-icon"
                    class:correct={$answer[2] === userAnswer[2]}
                    class:incorrect={$answer[2] !== userAnswer[2]}>
                    {$answer[2] === userAnswer[2] ? '👍 Excellent!' : '🤦‍♂️ No...'}
                    <div class="question">
                        Q. 다음 중 자바스크립트 변수 선언 방법이 아닌 것은?
                    </div>
                    <div class="user-answer">
                        A.
                        {quizList[2].examples[userAnswer[2]].title}
                    </div>
                    <div
                        class="correct-answer"
                        class:hide={$answer[2] === userAnswer[2]}>
                        Right Answer.
                        {@html '{#if ~~~}'}
                    </div>
                </div>
            </div>
        </div>
        <button class="restart-btn" on:click={goHome}>RESTART</button>
    </div>
</div>
