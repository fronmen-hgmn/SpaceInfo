import { useState } from "react";

const questions = [
  {
    question: "Which galaxy is moving toward the Milky Way?",
    items: [
      "Andromeda Galaxy",
      "Sombrero Galaxy",
      "Whirlpool Galaxy",
      "Triangulum Galaxy",
    ],
    answer: "Andromeda Galaxy",
  },
  {
    question: "What is the largest planet in our Solar System?",
    items: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Jupiter",
  },
  {
    question: "What type of galaxy is Andromeda?",
    items: [
      "Elliptical Galaxy",
      "Spiral Galaxy",
      "Irregular Galaxy",
      "Dwarf Galaxy",
    ],
    answer: "Spiral Galaxy",
  },
  {
    question: "What are the Large and Small Magellanic Clouds?",
    items: [
      "Planets",
      "Stars",
      "Dwarf Galaxies",
      "Black Holes",
    ],
    answer: "Dwarf Galaxies",
  },
  {
    question: "Which planet is known as the Red Planet?",
    items: ["Venus", "Mars", "Mercury", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What is a black hole?",
    items: [
      "A type of star",
      "A region with extremely strong gravity",
      "A planet",
      "A galaxy",
    ],
    answer: "A region with extremely strong gravity",
  },
  {
    question: "Which planet has the most visible rings?",
    items: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: "Saturn",
  },
];

export default function SpaceQuiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setFinished(true);
    }
  };
  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
  };
  return (
    <div className="min-h-screen bg-[#02020560] text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold mb-6 text-[#02c9c9]">Space Quiz</h1>
      {!finished ? (
        <div className="w-full max-w-xl bg-[#0a0a1271] p-6 rounded-2xl shadow-lg">
          <p className="text-lg mb-4">
            Question {current + 1} / {questions.length}
          </p>
          <h2 className="text-2xl font-semibold mb-6">
            {questions[current].question}
          </h2>
          <div className="grid gap-4">
            {questions[current].items.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="bg-[#02c9c9] hover:bg-[#02a9c9] transition p-3 rounded-xl">
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-3xl mb-4 animate-ping">🎉 Quiz Finished!</h2>
          <p className="text-xl mb-6">
            Your score: {score} / {questions.length}
          </p>
          <button
            onClick={restartQuiz}
            className="bg-emerald-600 px-6 py-3 rounded-xl hover:bg-emerald-700">
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}