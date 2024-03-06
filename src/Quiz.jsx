import { useState } from "react";
import { resultInitalState } from "./Constants";

const Quiz = ({ questions }) => {
  const [currentQuestion, setQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result,setResult]=useState(resultInitalState);
  const { question, choices, correctAnswer } = questions[currentQuestion];

  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
    
  };

  const onClickNext =()=>{
    setAnswerIdx(null);

  }

  return (
    <div className="quiz-container">
      <span className="active-question-no">{currentQuestion + 1}</span>
      <span className="total-question">/{questions.length}</span>
      <ul>
        <h2>{question}</h2>
        {choices.map((answer, index) => (
          <li
            onClick={() => onAnswerClick(answer, index)}
            key={answer}
            className={answerIdx === index ? "selected-answer" : null}
          >
            {answer}
          </li>
        ))}
      </ul>
      <div className="footer">
        <button
         onClick={onClickNext}
         disabled={answerIdx === null}
        >
          {currentQuestion === questions.length - 1 ? "finish" : "Next"}
        </button>
      </div>
    </div>
  );
};
export default Quiz;
