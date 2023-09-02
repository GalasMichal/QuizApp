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

function init(){
    counter();
    question();
}

function counter(){
    document.getElementById('current_question').innerHTML = currentQuestion;
    document.getElementById('all_questions').innerHTML = questions.length;
}

function question() {
    let question = questions[currentQuestion];
    document.getElementById('questions').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}