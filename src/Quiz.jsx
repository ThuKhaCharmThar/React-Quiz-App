import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { jsQuizz, resultInitalState } from "./Constants";

const Quiz = () => {
  const { categoryId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitalState);
  const [showResult, setShowResult] = useState(false);
  const { question, choices, correctAnswer } = questions[currentQuestion];

  
  useEffect(() => {
    // Fetch questions based on category ID
    const categoryQuestions = jsQuizz[categoryId] || []; // Handle case when questions are undefined
    setQuestions(categoryQuestions);
  }, [categoryId]);

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
              <span className="total-question">
                <span className="spa">/</span>
                {questions.length}
              </span>
            </div>
            <ul className="p-3">
              <h2
                className="text-light text-center"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-delay="500"
                data-aos-offset="100"
              >
                {question}
              </h2>
              <div
                className="row mt-5 col-6 offset-3"
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-delay="500"
                data-aos-offset="100"
              >
                {choices.map((answer, index) => (
                  <li
                    onClick={() => onAnswerClick(answer, index)}
                    key={answer}
                    className={`${
                      answerIdx === index ? "selected-answer" : null
                    }`}
                  >
                    <span className="">{answer}</span>
                  </li>
                ))}
              </div>
            </ul>

            <div className="footter mb-3">
              <a
                className={"button" + (answerIdx === null ? " disabled" : "")}
                onClick={onClickNext}
                disabled={answerIdx === null}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {currentQuestion === questions.length - 1 ? "finish" : "Next"}
              </a>
            </div>
          </>
        ) : (
          <div className="result text-white text-center mb-5">
            <h3
              className=""
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-delay="500"
              data-aos-offset="100"
            >
              Result
            </h3>
            <p
              className=""
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="1000"
              data-aos-offset="100"
            >
              Total Questions :{" "}
              <span style={{ color: "#e8751a" }}>{questions.length}</span>
            </p>
            <p
              className=""
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="1200"
              data-aos-offset="100"
            >
              Total Score:{" "}
              <span style={{ color: "#e4f313" }}>{result.score}</span>
            </p>
            <p
              className=""
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="1400"
              data-aos-offset="100"
            >
              Correct Answers:{" "}
              <span style={{ color: "#30e90b" }}>{result.correctAnswers}</span>
            </p>
            <p
              className="mb-3"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="1600"
              data-aos-offset="100"
            >
              Wrong Answers:{" "}
              <span style={{ color: "red" }}>{result.wrongAnswers}</span>
            </p>
            <a className="try mt-5" onClick={onTryAgain}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Try Again
            </a>
          </div>
        )}
      </div>
    </>
  );
};
export default Quiz;
