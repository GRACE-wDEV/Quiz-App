
const questions = [
  {
    question: "Which data structure uses LIFO (Last In, First Out)?",
    options: [
      {text:"Queue", correct: false},
      {text:"Linked List", correct: false},
      {text:"Stack", correct: true},
      {text:"Tree", correct: false},
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: [
      {text:"Venus", correct: false},
      {text:"Mars ", correct: true},
      {text:"Jupiter ", correct: false},
      {text:"Saturn", correct: false},
    ]
  },
  {
    question: "If Some cats are black and All black things are mysterious, which of the following is definitely true?",
    options: [
      {text:"All cats are mysterious", correct: false},
      {text:"No cats are mysterious", correct: false},
      {text:"Some black things are not mysterious", correct: false},
      {text:"Some cats are mysterious", correct: true},
    ]
  },
  {
    question: "What is the sum of the first 100 positive integers?",
    options: [
      {text:"5050 ", correct: true},
      {text:"5000", correct: false},
      {text:"5001 ", correct: false},
      {text:"4950", correct: false},
    ]
  },
  {
    question: "Which of the following has O(log n) time complexity in the best-case for search?",
    options: [
      {text:"Linear Search", correct: false},
      {text:"Bubble Sort", correct: false},
      {text:"Binary Search", correct: true},
      {text:"Hashing", correct: false},
    ]
  },
]


const questionTitle = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-button')

