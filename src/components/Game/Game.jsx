import React, { useState } from "react";
import "./Game.css";

export const Game = () => {
  const questions = [
    { question: "Is she beautiful?", options: { one: "She is hella pretty!", two: "Her style stands out." } },
    { question: "Go talk to her?", options: { one: "On My Way!", two: "Let her be in peace." } },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (questionIndex, answer) => {
    setAnswers([...answers, { question: questions[questionIndex].question, answer: answer }]);
    if (questionIndex < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="game">
      {currentQuestionIndex < questions.length ? (
        <div className="question">
          <p>{questions[currentQuestionIndex].question}</p>
          <button onClick={() => handleAnswer(currentQuestionIndex, questions[currentQuestionIndex].options.one)}>{questions[currentQuestionIndex].options.one}</button>
          <button onClick={() => handleAnswer(currentQuestionIndex, questions[currentQuestionIndex].options.two)}>{questions[currentQuestionIndex].options.two}</button>
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
