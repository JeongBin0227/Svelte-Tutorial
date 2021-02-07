import { writable, readable, derived, get } from "svelte/store";

function quizNum() {
  const { subscribe, set, update } = writable(1);

  return {
    subscribe,
    increment: () => update((n) => n + 1),
    reset: () => set(1),
  };
}

export const quizList = [
  {
    id: 1,
    question: "스벨트는 가상돔을 사용한다.",
    examples: [
      {
        title: "YES",
        is_answer: false,
      },
      {
        title: "NO",
        is_answer: true,
      },
    ],
  },
  {
    id: 2,
    question: "스벨트의 스토어에서 가져온 데이터를 사용 하는 방법은?",
    examples: [
      {
        title: "{data}",
        is_answer: false,
      },
      {
        title: "{$data}",
        is_answer: true,
      },
      {
        title: "{#data}",
        is_answer: false,
      },
    ],
  },
  {
    id: 3,
    question: "스벨트에서 분기를 사용하는 방법은?",
    examples: [
      {
        title: "{#if ~~~ }",
        is_answer: true,
      },
      {
        title: "{$if ~~~ }",
        is_answer: false,
      },
      {
        title: "{if ~~~ }",
        is_answer: false,
      },
    ],
  },
];
export const num = quizNum();

function answerNum() {
  const { subscribe, set, update } = writable([1, 1, 0]);

  return {
    subscribe,
  };
}

export const answer = answerNum();

export let userAnswer = [];

export function addNumber(n) {
  userAnswer.push(Number(n));
}

export function resetNumber() {
  return (userAnswer.length = 0);
}

// const createAnswers = () => {
//   const answers = writable(_answers);
//   const { subscribe, reset, update: _update } = answers;

//   const update = (answer) => {
//     if (!answer) return;
//     _update((answers) =>
//       answers.map((_answer) => (_answer.id === answer.id ? answer : _answer))
//     );
//   };

//   return { subscribe, reset, add, remove, update };
// };
