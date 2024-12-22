import React, { useState } from "react";
import "./Game.css";

export const Game = () => {
  const questions = [
    "Is she beautiful?",
    "Go talk to her?",
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, { question: questions[currentQuestionIndex], answer }]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="game">
      {currentQuestionIndex < questions.length ? (
        <div className="question">
          <p>{questions[currentQuestionIndex]}</p>
          <button onClick={() => handleAnswer("Yes")}>Yes</button>
          <button onClick={() => handleAnswer("No")}>No</button>
        </div>
      ) : (
        <p>End of questions</p>
      )}

      <div className="answers">
        {answers.map((entry, index) => (
          <p key={index}>
            {entry.question}: {entry.answer}
          </p>
        ))}
      </div>
    </div>
  );
};
