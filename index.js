const QUIZ = {
    questions: [
        {
            text: "Which of these is a red wine?",
            answers: [
                {
                    text: "Pinot Grigio"
                },
                {
                    text: "Pinot Noir",
                    isCorrect: true
                },
                {
                    text: "Pinot Blanc"
                },
                {
                    text: "Pinot Gris"
                }
            ]
        },
        {
            text: "Why does a person swirl wine in a glass?",
            answers: [
                {
                    text: "To barrel age it"
                },
                {
                    text: "To cheers it"
                },
                {
                    text: "To release the aromas",
                    isCorrect: true
                },
                {
                    text: "To look sophisticated"
                }
            ]
        },
        {
            text: "Which of these is a white wine?",
            answers: [
                {
                    text: "Riesling",
                    isCorrect: true
                },
                {
                    text: "Malbec"
                },
                {
                    text: "Petit Verdot"
                },
                {
                    text: "Franzia"
                }
            ]
        },
        {
            text: "Where do corks come from?",
            answers: [
                {
                    text: "Nigeria"
                },
                {
                    text: "A tree",
                    isCorrect: true
                },
                {
                    text: "The cork factory (duh!)"
                },
                {
                    text: "Cork mommies"
                }
            ]
        },
        {
            text: "Why are wine bottles different colors?",
            answers: [
                {
                    text: "Brand marketing"
                },
                {
                    text: "So you can't see how much is in the bottle"
                },
                {
                    text: "To match my purse"
                },
                {
                    text: "To protect from UV rays",
                    isCorrect: true
                }
            ]
        },
        {
            text: "What are tannins?",
            answers: [
                {
                    text: "A family on Full House"
                },
                {
                    text: "Where I go to get ready for summer"
                },
                {
                    text: "A naturally occurring acid in the skins of wine grapes",
                    isCorrect: true
                },
                {
                    text: "The barrels wine is aged in"
                }
            ]
        },
        {
            text: "Why is Champagne sparkling?",
            answers: [
                {
                    text: "A wizard made it"
                },
                {
                    text: "It undergoes secondary fermentation",
                    isCorrect: true
                },
                {
                    text: "It's full of glitter"
                },
                {
                    text: "It is barrel aged"
                }
            ]
        },
        {
            text: "Why is some chardonnay 'buttery?'",
            answers: [
                {
                    text: "Butter is applied to the grapes"
                },
                {
                    text: "It's naturally like that"
                },
                {
                    text: "Paula Deen"
                },
                {
                    text: "It is aged in American oak barrels",
                    isCorrect: true
                }
            ]
        },
        {
            text: "Is all riesling sweet?",
            answers: [
                {
                    text: "Yes"
                },
                {
                    text: "No",
                    isCorrect: true
                },
                {
                    text: "I like it sweet!"
                },
                {
                    text: "When paired with spicy food"
                }
            ]
        },
        {
            text: "Why is rose pink?",
            answers: [
                {
                    text: "It spends a long time in a barrel."
                },
                {
                    text: "It's made of roses."
                },
                {
                    text: "Pink is pretty!"
                },
                {
                    text: "The grape juice ferments on their skins.",
                    isCorrect: true
                }
            ]
        }
    ],
    answers: []
}

function whichQuestion() {
    return QUIZ.answers.length;
}

function questionCount() {
    return QUIZ.questions.length;
}

function currentQuestion() {
    return QUIZ.questions[whichQuestion()];
}

function isQuizFinished() {
    return whichQuestion() === questionCount()
}

function resetQuiz() {
    QUIZ.answers = []
}

function calculateScore() {
    return QUIZ.answers.filter(answer => answer.isCorrect).length
}

function endScore() {
    if (calculateScore() === questionCount()) {
        return `
        <p class="end-message">Perfect Score!<span class="score-out-of">  Score: ${calculateScore()}/${questionCount()}</span></p>
        <img src="Quiz-App-Photos/PerfectScore.jpeg" alt="wine being poured into decanter" class="perfect">
        <p class="end-message">One of the finest from my collection...</p>
        <button type="button" class="start-over-button">Start Over</button>
        `
    } else {
        return `
        <p class="end-message">You Finished!<span class="score-out-of">  Score: ${calculateScore()}/${questionCount()}</span></p>
        <img src="Quiz-App-Photos/PaulaDeen.jpeg" alt="Paula Deen riding a stick of butter with a glass of wine" class="finished">
        <p class="end-message">Cheers!</p>
        <button type="button" class="start-over-button">Start Over</button>
        `
    }
}

function generateStartPage() {
    return `
            <p class="intro-question">How much do you know about the world of wine?</p>
                <h2 class="press-start">Press Start!</h2>
                <img src="Quiz-App-Photos/InitializeQuiz.jpeg" alt="champagne bottle pop" class="initImage">
                <button type="button" class="start-button">Start</button>
        `
}

function generateQuestionPage() {
    const question = QUIZ.questions[whichQuestion()]
    const answers = `
                <ol>
                    ${question.answers.map((answer, index) => `
                        <li class="answer-list"><label for="answer${index}">
                        <input type="radio" id="answer${index}" name="answer" value="${index}">
                        ${answer.text}
                        </label></li>
                    `)
                    .join("\n")
                    }
                </ol>
            `
            return `
            <ul class="scores-questions">
                <li><span>Score: ${calculateScore()}/${questionCount()}</span></li>
                <li><span>Question: ${whichQuestion()}/${questionCount()}</span></li>
            </ul>
            <form class="quiz-form">
                <fieldset>
                    <legend class="question">${question.text}</legend>
                        ${answers}
                    <button type="submit">Submit</button> 
                </fieldset>   
            </form>
            `
    
}

function generateFeedbackPage(question, answer) {
    const message = answer.isCorrect ? `<p class="feedback">You're right!</p>
                                        <img src="Quiz-App-Photos/Correct.jpeg" alt="wine glass cheers" class="correct">` 
                                        : `<p class="feedback">Sorry, the answer is: ${question.answers.find(answer => answer.isCorrect).text}.</p> 
                                        <img src="Quiz-App-Photos/Wrong.jpeg" alt="wine bottle smashed on head" class="wrong">`
    return `
        <ul class="scores-questions">
            <li><span>Score: ${calculateScore()}/${questionCount()}</span></li>
            <li><span>Question: ${whichQuestion()}/${questionCount()}</span></li>
        </ul>
        <div class="feedback">${message}</div>
        <button class="next-button">${isQuizFinished() ? 'Score Quiz' : "Next"}</button>
    `
}

function generateEndPage() {
    const endMessage = endScore();
    displayPage(endMessage);
}

function displayStartPage() {
    displayPage(generateStartPage())
}

function displayQuestionPage() {
    const question = QUIZ.questions[whichQuestion()]
    const questionPage = generateQuestionPage(question)
    displayPage(questionPage)
}

function displayFeedbackPage(question, answer) {
    const feedback = generateFeedbackPage(question, answer)
    displayPage(feedback)
}

function displayEndPage() {
    const endPage = generateEndPage()
    displayPage(endPage);
}

function displayPage(html) {
    $(".quiz-block").html(html)
}

function handleClickStart() {
    $("main").on("click", ".start-button", (event) => {
        displayQuestionPage()
    })
}

function handleSubmitAnswer() {
    $("main").on("submit", ".quiz-form", (event) => {
        event.preventDefault()
        const question = currentQuestion()
        const selectedAnswerIndex = $("input[name=answer]:checked").val()
        const selectedAnswer = question.answers[selectedAnswerIndex]
        QUIZ.answers.push(selectedAnswer)
        displayFeedbackPage(question, selectedAnswer);
    })
}

function handleNextButton() {
    $("main").on("click", ".next-button", (event) => {
        if (isQuizFinished()) {
            displayEndPage()
        } else {
            displayQuestionPage();
        }
    })
}

function handleEndButton() {
    $("main").on("click", ".start-over-button", (event) => {
        resetQuiz();
        displayPage(generateStartPage());
    })
}

function setupUI() {
    displayStartPage()
}

function setupEventHandlers() {
    handleClickStart();
    handleSubmitAnswer();
    handleNextButton();
    handleEndButton();
}

function onPageLoad() {
    setupUI();
    setupEventHandlers();
}

$(onPageLoad)

