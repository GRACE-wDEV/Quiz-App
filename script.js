const questions = [
  {
    question: "When did the 2025 Summer of Making run?",
    options: [
      { text: "May 1 – July 15", correct: false },
      { text: "June 16 – August 31", correct: true },
      { text: "July 1 – September 30", correct: false },
      { text: "June 1 – July 31", correct: false },
    ]
  },
  {
    question: "Which company created the Tensor Processing Unit (TPU)?",
    options: [
      { text: "Microsoft", correct: false },
      { text: "Amazon", correct: false },
      { text: "Google", correct: true },
      { text: "NVIDIA", correct: false },
    ],
  },
  {
    question: "What’s the name of Facebook’s parent company?",
    options: [
      { text: "X", correct: false },
      { text: "Meta", correct: true },
      { text: "Alphabet", correct: false },
      { text: "ByteDance", correct: false },
    ],
  },
  {
    question: "Which company created GitHub Copilot?",
    options: [
      { text: "Amazon", correct: false },
      { text: "OpenAI", correct: false },
      { text: "Microsoft", correct: true },
      { text: "Google", correct: false },
    ],
  },
  {
    question: "What company owns DeepMind, a leader in AI research?",
    options: [
      { text: "Apple", correct: false },
      { text: "Google (Alphabet)", correct: true },
      { text: "Tesla", correct: false },
      { text: "Meta", correct: false },
    ],
  },
  {
    question: "What’s one of the most famous Elon Musk beliefs about productivity?",
    options: [
      { text: "Success is all about timing", correct: false },
      { text: "Work 80–100 hours a week to do something meaningful", correct: true },
      { text: "Work smart, not hard", correct: false },
      { text: "Outsource everything", correct: false },
    ],
  },
  {
    question: "Which company launched the ChatGPT model you're using now?",
    options: [
      { text: "Google", correct: false },
      { text: "OpenAI", correct: true },
      { text: "Meta", correct: false },
      { text: "IBM", correct: false },
    ],
  },
  {
    question: "What’s the parent company of Android?",
    options: [
      { text: "Meta", correct: false },
      { text: "Apple", correct: false },
      { text: "Google", correct: true },
      { text: "Samsung", correct: false },
    ],
  },
  {
    question: "Which of the following best reflects a growth mindset?",
    options: [
      { text: "I’m just not talented at this.", correct: false },
      { text: "If it’s hard, it’s not meant for me.", correct: false },
      { text: "I can improve through effort and learning.", correct: true },
      { text: "Others are just naturally better.", correct: false },
    ],
  },
  {
    question: "Which of the following is most important for long-term success in tech?",
    options: [
      { text: "Being the smartest in the room", correct: false },
      { text: "Learning fast and never giving up", correct: true },
      { text: "Having 100 certifications", correct: false },
      { text: "Copy-pasting from Stack Overflow", correct: false },
    ],
  },
];


const questionTitle = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-button')

let currentQuestionIndex = 0;
let score = 0;

function startQuiz()
{
  currentQuestionIndex=0;
  score=0;
  nextButton.innerHTML='Next';
  showQuestion()
}

function showQuestion()
{
  resetState();
  let question = questions[currentQuestionIndex];
  let questoinNo = currentQuestionIndex + 1;
  questionTitle.innerHTML = `${questoinNo}. ${question.question}`
  question.options.forEach((option, index)=>{
    let button = document.createElement('button');
    button.innerHTML=`${index+1}. ${option.text}`
    button.classList.add('btn')
    answerButtons.appendChild(button);
    if(option.correct)
    {
      button.dataset.correct=option.correct;
    }
    button.addEventListener("click", selectAnswer)
  })
}

function selectAnswer(e)
{
  let selectedBtn = e.target;
  let isCorrect = selectedBtn.dataset.correct==="true";
  if(isCorrect)
  {
    selectedBtn.classList.add('correct');
    score++;
  }
  else
  {
    selectedBtn.classList.add('incorrect')
  }
  Array.from(answerButtons.children).forEach((button)=>{
    if(button.dataset.correct==='true')
    {
      button.classList.add("correct")
    }
    button.disabled=true;
  });
  nextButton.style.display="block";
}

function resetState()
{
  nextButton.style.display = 'none';
  while(answerButtons.firstChild)
  {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function showScore()
{
  resetState();
  questionTitle.innerHTML = `You scored ${score} out of ${questions.length}!`
  nextButton.innerHTML = 'Play Again';
  nextButton.style.display='block'
}

function handleNextButton()
{
  currentQuestionIndex++;
  if(currentQuestionIndex<questions.length)
  {
    showQuestion();
  }else
  {
    showScore();
  }
}

nextButton.addEventListener('click', ()=>{
  if(currentQuestionIndex < questions.length)
  {
    handleNextButton();
  }
  else
  {
    startQuiz();
  }
})

const toggleButton = document.getElementById("toggleDarkMode");

toggleButton.addEventListener("click", ()=>{
  document.body.classList.toggle("dark")
})

startQuiz();