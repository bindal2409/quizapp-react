import './App.css'

function App() {

  const currentQuestion=0;

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
  ]

  return (
    <div className="app">
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion+1}</span>/ {quizQuestions.length}
          </div>
          <div className="question-text">
            {quizQuestions[0].question}
          </div>
        </div>
        <div className="answer-section">
            {quizQuestions[0].options.map(option =><button>{option.answer}</button>)}
        </div>
    </div>
  )
}

export default App
