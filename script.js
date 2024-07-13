const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        choices: ["Berlín", "Madrid", "París", "Roma"],
        answer: 2
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        choices: ["Nilo", "Amazonas", "Yangtsé", "Mississippi"],
        answer: 1
    },
    {
        question: "¿En qué año llegó el hombre a la Luna?",
        choices: ["1965", "1969", "1972", "1975"],
        answer: 1
    },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const nextButton = document.getElementById('next');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart');

function loadQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    choicesElement.innerHTML = '';
    current.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.classList.add('choice');
        button.dataset.number = index;
        button.onclick = selectAnswer;
        choicesElement.appendChild(button);
    });
}

function selectAnswer(event) {
    const selected = event.target.dataset.number;
    const correct = questions[currentQuestion].answer;
    if (selected == correct) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionElement.style.display = 'none';
    choicesElement.style.display = 'none';
    nextButton.style.display = 'none';
    scoreContainer.style.display = 'block';
    scoreElement.textContent = `Tu puntaje es ${score} de ${questions.length}`;
}

nextButton.onclick = loadQuestion;
restartButton.onclick = () => {
    currentQuestion = 0;
    score = 0;
    scoreContainer.style.display = 'none';
    questionElement.style.display = 'block';
    choicesElement.style.display = 'block';
    nextButton.style.display = 'block';
    loadQuestion();
};

loadQuestion();
