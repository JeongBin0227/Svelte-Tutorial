<script>
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
</style>

<div id="result-page">
    <div class="inner-container">
        <h1 class="title">Result 🐙</h1>
        <div class="result-container">
            <div class="result">
                <div class="result-icon correct">👍 Excellent!</div>
                <div class="question">
                    Q. 자바스크립트는 자바에서 파생된 언어이다.
                </div>
                <div class="user-answer">A. 아니오</div>
            </div>
            <div class="result">
                <div class="result-icon incorrect">🤦&zwj;♂️ No...</div>
                <div class="question">Q. 자바스크립트가 해당하는 것은?</div>
                <div class="user-answer">A. 클래스 기반 언어</div>
                <div class="correct-answer">
                    Right Answer. 프로토타입 기반 언어
                </div>
            </div>
            <div class="result">
                <div class="result-icon incorrect">🤦&zwj;♂️ No...</div>
                <div class="question">
                    Q. 다음 중 자바스크립트 변수 선언 방법이 아닌 것은?
                </div>
                <div class="user-answer">A. const</div>
                <div class="correct-answer">Right Answer. int</div>
            </div>
        </div>
        <button class="restart-btn">RESTART</button>
    </div>
</div>
