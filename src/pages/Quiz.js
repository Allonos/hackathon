import { useRef, useState } from 'react';
import './Quiz.css'
import {data} from '../assets/data'

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];

  const checkAnswer = (element, answer) => {
    if (lock === false) {
      if (question.ans === answer) {
        element.target.classList.add('correct');
        setLock(true);
        setScore(prev => prev+1);
      } else {
        element.target.classList.add('incorrect');
        setLock(true);
        option_array[question.ans-1].current.classList.add('correct');
      }
    }
  }

  const next = () => {
    if(lock===true) {
      if(index === data.length-1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      option_array.map(option => {
        option.current.classList.remove('incorrect');
        option.current.classList.remove('correct');
        return null;
      })
    }
  }

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  }

  return (
    <div className='quiz-container'>
      <h1>Quiz</h1>
      <hr />
      {result? <>
      </> : <>
        <h2>{index+1}. {question.question}</h2>
        <ul>
          <li ref={Option1} onClick={(e) => checkAnswer(e, 1)}>{question.option1}</li>
          <li ref={Option2} onClick={(e) => checkAnswer(e, 2)}>{question.option2}</li>
          <li ref={Option3} onClick={(e) => checkAnswer(e, 3)}>{question.option3}</li>
          <li ref={Option4} onClick={(e) => checkAnswer(e, 4)}>{question.option4}</li>
        </ul>
        <button onClick={next}>Next</button>
        <div className='quiz-index'>{index + 1} of {data.length} questions</div>
      </> }
      {result?<>
        <h2>You Scored {score} out of {data.length}</h2>
        <button onClick={reset}>Reset</button>
      </> : <></> 
      }
    </div>
  )
};

export default Quiz;