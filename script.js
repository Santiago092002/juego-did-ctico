let questions = [
    {
        question: "¿Quién es el principal fundador del conductismo?",
        answers: [
            { text: "Jean Piaget", correct: false },
            { text: "Lev Vygotsky", correct: false },
            { text: "Jerome Bruner", correct: false },
            { text: "John Watson", correct: true }
        ]
    },
    {
        question: "¿Cuál es el objetivo principal del conductismo?",
        answers: [
            { text: "Explorar los sueños", correct: false },
            { text: "Estudiar los procesos cognitivos", correct: false },
            { text: "Analizar las emociones", correct: false },
            { text: "Predecir y controlar el comportamiento", correct: true }
        ]
    },
    {
        question: "¿Qué concepto clave introdujo B.F. Skinner en el conductismo?",
        answers: [
            { text: "Constructivismo", correct: false },
            { text: "Condicionamiento clásico", correct: false },
            { text: "Aprendizaje significativo", correct: false },
            { text: "Condicionamiento operante", correct: true }
        ]
    },
    {
        question: "¿Qué teoría propone Jean Piaget?",
        answers: [
            { text: "Conductismo", correct: false },
            { text: "Teoría del aprendizaje social", correct: false },
            { text: "Teoría de la motivación", correct: false },
            { text: "Teoría del desarrollo cognitivo", correct: true }
        ]
    },
    {
        question: "¿Qué es la Zona de Desarrollo Próximo (ZDP)?",
        answers: [
            { text: "Un método de castigo", correct: false },
            { text: "Un nivel de sueño profundo", correct: false },
            { text: "Un tipo de condicionamiento", correct: false },
            { text: "La diferencia entre lo que un niño puede hacer solo y lo que puede hacer con ayuda", correct: true }
        ]
    },
    {
        question: "¿Qué enfoque pedagógico está más asociado con Lev Vygotsky?",
        answers: [
            { text: "Conductismo", correct: false },
            { text: "Humanismo", correct: false },
            { text: "Teoría de la carga cognitiva", correct: false },
            { text: "Constructivismo social", correct: true }
        ]
    },
    {
        question: "¿Qué es el aprendizaje significativo según David Ausubel?",
        answers: [
            { text: "Aprender mediante la repetición", correct: false },
            { text: "Memorizar datos sin comprensión", correct: false },
            { text: "Aprender a través de estímulos y respuestas", correct: false },
            { text: "Aprender integrando nueva información con conocimientos previos", correct: true }
        ]
    },
    {
        question: "¿Cuál es una característica clave del constructivismo?",
        answers: [
            { text: "Enfoque en el castigo", correct: false },
            { text: "Aprendizaje pasivo", correct: false },
            { text: "Refuerzo negativo", correct: false },
            { text: "Construcción activa del conocimiento por el alumno", correct: true }
        ]
    },
    {
        question: "¿Qué es el andamiaje en la educación?",
        answers: [
            { text: "Un tipo de evaluación", correct: false },
            { text: "Una estrategia de castigo", correct: false },
            { text: "Un método de repetición", correct: false },
            { text: "Un apoyo temporal dado por el profesor para ayudar al alumno a aprender", correct: true }
        ]
    },
    {
        question: "¿Qué es el reforzamiento positivo en el conductismo?",
        answers: [
            { text: "Castigar comportamientos no deseados", correct: false },
            { text: "Ignorar comportamientos no deseados", correct: false },
            { text: "Quitar un estímulo desagradable", correct: false },
            { text: "Recompensar comportamientos deseados", correct: true }
        ]
    },
    {
        question: "¿Qué investigador es conocido por sus estudios sobre el aprendizaje observacional?",
        answers: [
            { text: "John Watson", correct: false },
            { text: "B.F. Skinner", correct: false },
            { text: "Jean Piaget", correct: false },
            { text: "Albert Bandura", correct: true }
        ]
    },
    {
        question: "¿Qué implica el término 'aprendizaje colaborativo'?",
        answers: [
            { text: "Estudiar solo en silencio", correct: false },
            { text: "Memorizar textos", correct: false },
            { text: "Escuchar una conferencia", correct: false },
            { text: "Trabajar en grupo para resolver problemas", correct: true }
        ]
    },
    {
        question: "¿Qué es la cognición según la teoría cognitiva?",
        answers: [
            { text: "Una respuesta emocional", correct: false },
            { text: "Un estímulo físico", correct: false },
            { text: "Un proceso de condicionamiento", correct: false },
            { text: "El proceso mental de adquirir conocimiento y comprensión", correct: true }
        ]
    },
    {
        question: "¿Qué es el 'constructivismo radical' propuesto por Ernst von Glasersfeld?",
        answers: [
            { text: "Una forma de condicionamiento", correct: false },
            { text: "Un método de castigo", correct: false },
            { text: "Una teoría que niega la existencia de la mente", correct: false },
            { text: "Una perspectiva que sostiene que el conocimiento es construido activamente por el individuo", correct: true }
        ]
    },
    {
        question: "¿Qué es un esquema según Piaget?",
        answers: [
            { text: "Un tipo de refuerzo", correct: false },
            { text: "Un método de enseñanza", correct: false },
            { text: "Una respuesta automática", correct: false },
            { text: "Una estructura mental o marco que organiza y guía el procesamiento de la información", correct: true }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userName = '';

function startGame() {
    userName = document.getElementById('username').value;
    if (userName === '') {
        alert('Por favor, ingresa tu nombre.');
        return;
    }
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;
    let shuffledAnswers = currentQuestion
