const testData = [
    {
        question: "What is the ..?",
        answers: [
            "Zero",
            "One",
            "Two",
            "Three"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the .?",
        answers: [
            "Zero",
            "One",
            "Two",
            "Three"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the ?",
        answers: [
            "Zero",
            "One",
            "Two",
            "Three"
        ],
        correctAnswer: 0
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementsByClassName("buttons")[0].getElementsByTagName("button");
const scoreElement = document.getElementById("score");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    questionElement.innerText = testData[currentQuestion].question;
    
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].innerText = testData[currentQuestion].answers[i];
        answerButtons[i].addEventListener("click", checkAnswer);
    }
}

function checkAnswer(event) {
    const selectedAnswer = event.target;
    const correctAnswer = testData[currentQuestion].correctAnswer;
    
    if (selectedAnswer.innerText === testData[currentQuestion].answers[correctAnswer]) {
        score++;
        scoreElement.innerText = `Score: ${score}`;
    }
    currentQuestion++;
    
    if (currentQuestion < testData.length) {
        showQuestion();
    } else {
        questionElement.innerText = "Quiz completed!";
        
        for (let i = 0; i < answerButtons.length; i++) {
            answerButtons[i].removeEventListener("click", checkAnswer);
        }
    }
}

showQuestion();
