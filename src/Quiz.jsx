import { useState } from "react";
import { resultInitalState } from "./Constants";
// import { TypeAnimation } from "react-type-animation";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitalState);
  const [showResult, setShowResult] = useState(false);
  const { question, choices, correctAnswer } = questions[currentQuestion];

  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const onClickNext = () => {
    setAnswerIdx(null);
    setResult((prev) =>
      answer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  };

  const onTryAgain = () => {
    setResult(resultInitalState);
    setShowResult(false);
  };

  return (
    <>
      <div className="quiz-container">
        {!showResult ? (
          <>
          <div className="text-center">
            <span className="active-question-no">{currentQuestion + 1}</span>
            <span className="total-question"><span className="spa">/</span>{questions.length}</span>
            </div>
            <ul>
              <h2 className="text-light text-center">{question}</h2>
              <div className="row mt-5 col-6 offset-3">
                {choices.map((answer, index) => (
                  <li
                    onClick={() => onAnswerClick(answer, index)}
                    key={answer}
                    className={`${answerIdx === index ? "selected-answer" : null}`}
                  >
                    <span
                      className=""
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    >
                      {answer}
                    </span>
                  </li>
                ))}
              </div>
            </ul>
            <div className="footter">
              <button onClick={onClickNext} disabled={answerIdx === null}>
                {currentQuestion === questions.length - 1 ? "finish" : "Next"}
              </button>
            </div>
          </>
        ) : (
          <div className="result">
            <h3>Result</h3>
            <p>
              Total Questions : <span>{questions.length}</span>
            </p>
            <p>
              Total Score: <span>{result.score}</span>
            </p>
            <p>
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <button onClick={onTryAgain}> Try Again</button>
          </div>
        )}
      </div>
    </>
  );
};
export default Quiz;
