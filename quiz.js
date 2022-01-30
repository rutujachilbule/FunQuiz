const quizData = [
    {
        question: "How many months have 28 days?",
        a: "2",
        b: "1",
        c: "All of them",
        d: "Depends if there's a leap year or not.",
        correct: "c",
    },
    {
        question: "The answer is really big.",
        a: "THE ANSWER.",
        b: "Really big.",
        c: "An elephant.",
        d: "The data given is insufficient.",
        correct: "a",
    },
    {
        question: "What color is most commonly found on national flags?",
        a: "Blue",
        b: "Red",
        c: "White",
        d: "Green",
        correct: "b",
    },
    {
        question: "How many box in chess?",
        a: "60",
        b: "62",
        c: "64",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "What is the longest season?",
        a: "summer",
        b: "autumn",
        c: "winter",
        d: "spring",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You scored ${score}/${quizData.length}.</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})