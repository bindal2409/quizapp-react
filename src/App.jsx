import { useState } from 'react';
import './App.css'
import AnswerSection from './components/AnswerSection';
import GeolocationContainer from './components/GeoLocation/GeolocationContainer';
import Geolocation from './components/GeoLocation/GeoLocation';

function App() {

  let [currentQuestion,setCurrentQuestion]=useState(0);

  const quizQuestions=[
    {
      question:"What is the complexity of the binary search",
      options:[
        { answer:'O(n)',isCorrect:false},
        { answer:'O(log n)',isCorrect:true},
        { answer:'O(1)',isCorrect:false},
        { answer:'O(n^2)',isCorrect:false},
      ]
    },
    {
      question:"What is the complexity of the linear search",
      options:[
        { answer:'O(n)',isCorrect:true},
        { answer:'O(log n)',isCorrect:false},
        { answer:'O(1)',isCorrect:false},
        { answer:'O(n^2)',isCorrect:false},
      ]
    },
    {
      question:"What is the complexity of the merge sort",
      options:[
        { answer:'O(n)',isCorrect:false},
        { answer:'O(nlog n)',isCorrect:true},
        { answer:'O(1)',isCorrect:false},
        { answer:'O(n^2)',isCorrect:false},
      ]
    },      
  ];

  function onNextClick(){
    if(currentQuestion==quizQuestions.length-1) return;
    setCurrentQuestion(currentQuestion+1);
  }

  function checkAnswer(option) {
    if(option.isCorrect) {
      console.log("Correct answer");
    } else {
      console.log("Wrong answer");
    }
  }

  return (
    <div className="card-wrapper">
      <GeolocationContainer>
        <Geolocation/>
      </GeolocationContainer>
      <div className="app">
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion+1}</span>/ {quizQuestions.length}
          </div>
          <div className="question-text">
            {quizQuestions[currentQuestion].question}
          </div>
        </div>
        {/* <div className="answer-section">
            {quizQuestions[currentQuestion].options.map(option =><button onClick=
            {()=>checkAnswer(option)}>{option.answer}
            </button>)}
        </div> */}
        <AnswerSection question={quizQuestions[currentQuestion]} onAnswerClick={checkAnswer}/>
      </div>
      {/* Button to show next section*/}
      <button onClick={onNextClick}>Next</button>
    </div>
    
  )
}

export default App
