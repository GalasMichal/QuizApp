let questions = [
    {
        'question': 'Wie heißt die Hauptstadt der Slowakei?',
        'answer_1': 'Sofia',
        'answer_2': 'Prag',
        'answer_3': 'Bratislava',
        'answer_4': 'Ljubljan',
        'right_answer': 3,
    },

    {
        'question': 'Wie viele Zähne hat ein erwachsener Mensch normalerweise?',
        'answer_1': '26',
        'answer_2': '30',
        'answer_3': '32',
        'answer_4': '36',
        'right_answer': 3,
    },

    {
        'question': 'Welches Land ist kein ständiges Mitglied im Sicherheitsrat der Vereinten Nationen?',
        'answer_1': 'USA',
        'answer_2': 'Russland',
        'answer_3': 'Deutschland',
        'answer_4': 'China',
        'right_answer': 3,
    },

    {
        'question': 'In welcher Einheit wird der elektrische Widerstand gemessen?',
        'answer_1': 'Ohm',
        'answer_2': 'Volt',
        'answer_3': 'Ampere',
        'answer_4': 'Watt',
        'right_answer': 1,
    },

    {
        'question': 'Wie lautet das chemische Symbol für Blei?',
        'answer_1': 'Bl',
        'answer_2': 'Pb',
        'answer_3': 'Be',
        'answer_4': 'Pt',
        'right_answer': 2,
    },
]

let currentQuestion = 0;
let rightQuestions = 0;
let Audio_Succes = new Audio('audio/success.mp3');
let Audio_Fail = new Audio('audio/fail.mp3');

function init() {
    counter();
    question();
}

function nextQuestion() {

    document.getElementById('next-button').disabled = true;
    resetAnswerButton();
    currentQuestion++;
    init();

}

function resetAnswerButton() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}

function previous_question() {
    currentQuestion--;
    init();
}

function counter() {

    document.getElementById('current_question').innerHTML = currentQuestion + 1;
    document.getElementById('all_questions').innerHTML = questions.length;
    document.getElementById('EndScreenCounterAll').innerHTML = questions.length;
    document.getElementById('AmountOfCorrectQuestions').innerHTML = rightQuestions;
}

function question() {
    if (gameIsOver()) {
        document.getElementById('QuestionCard').style = 'display: none';
        document.getElementById('EndCard').style = '';
    }
    else {
        progressBar();
        renderQuestionCard()
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function renderQuestionCard() {
    let question = questions[currentQuestion];
    document.getElementById('questions').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function progressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    console.log('Fortschritt:', percent);
    document.getElementById('progress-bar').style = `width: ${percent}%`;
}

function answer(selection) {

    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`

    if (rightAnswerSelected(selectedQuestionNumber, question)) {
        rightAnswer(selection);
    } else {
        falseAnswer(selection, idOfRightAnswer);
    }
    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber, question) {
    return selectedQuestionNumber == question['right_answer'];
}

function rightAnswer(selection) {
    document.getElementById(selection).parentNode.classList.add('bg-success');
    Audio_Succes.play();
    rightQuestions++;
}

function falseAnswer(selection, idOfRightAnswer) {
    document.getElementById(selection).parentNode.classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    Audio_Fail.play();
}

function resetQuiz() {
    document.getElementById('QuestionCard').style = 'display: none';
    document.getElementById('EndCard').style = 'display: none';
    document.getElementById('IntroCard').style = '';
    currentQuestion = 0;
    rightQuestions = 0;
    init();

}

function StartQuiz() {
    document.getElementById('IntroCard').style = 'display: none';
    document.getElementById('QuestionCard').style = '';
}