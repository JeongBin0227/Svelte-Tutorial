<script>
    let name = "world";
    let age = 85;
    function assign() {
        name = "Heropy";
        age = 36;
    }
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
</style>

<main id="app">
    <div id="quiz-page">
        <div class="quiz-container">
            <div class="quiz" data-id="1" style="opacity: 1;">
                <div class="question">
                    Q. 자바스크립트는 자바에서 파생된 언어이다.
                </div>
                <ul class="example-container">
                    <li class="example" data-index="0">네</li>
                    <li class="example" data-index="1">아니오</li>
                </ul>
            </div>
            <div class="quiz dp-none" data-id="2">
                <div class="question">Q. 자바스크립트가 해당하는 것은?</div>
                <ul class="example-container">
                    <li class="example" data-index="0">프로토타입 기반 언어</li>
                    <li class="example" data-index="1">클래스 기반 언어</li>
                    <li class="example" data-index="2">변수 기반 언어</li>
                </ul>
            </div>
            <div class="quiz dp-none" data-id="3">
                <div class="question">
                    Q. 다음 중 자바스크립트 변수 선언 방법이 아닌 것은?
                </div>
                <ul class="example-container">
                    <li class="example" data-index="0">const</li>
                    <li class="example" data-index="1">let</li>
                    <li class="example" data-index="2">var</li>
                    <li class="example" data-index="3">int</li>
                </ul>
            </div>
        </div>
    </div>
</main>
