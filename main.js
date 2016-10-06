var prompt = require('prompt-sync')();

var quizQuestions = [
	{
		text: 'What kind of language is HTML refered to?',
		answers: ['Markup language', 'Markup']
	},
	{
		text: 'What are void tags?',
		answers: ['Elements that cannot have content', 'Elements without a closing tag', 'Elements that cannot have contet and do not require a closing tag']
	},
	{
		text:'What are two types of void tags?',
		answers: ['<input> and <img>', 'input and img', '<img> and <input>', 'img and input']
	},
	{
		text: 'What are hyperlinks expressed as in HTML?',
		answers: ['<a>', 'anchor tags']
	},
	{
		text: 'Name a type of input element?',
		answers: ['text', 'checkbox', 'button', 'password', 'radio', 'submit' ]
	},
	{
		text: 'What does CSS stand for?',
		answers: ['cascading style sheets', 'Cascading Style Sheets']
	},
	{
		text: 'What is a class name preceded by?',
		answers: ['.', 'a "."', 'a .', 'a dot', 'dot']
	},
	{
		text: 'What is an ID name preceded by?',
		answers: ['#', 'a "#"', 'a #', 'hash', 'a hash']
	},
	{
		text: 'Name one property that controls the flow of a layout?',
		answers: ['display', 'float', 'clear']
	},
	{
		text: 'Name an area of the Box Model?',
		answers: ['content', 'padding', 'border', 'margin']
	},
	{
		text: 'What does a Boolean expression equate to?',
		answers: ['true or false', 'true and false', 'true/false']
	},
	{
		text: 'What is the name of the program we use in terminal to run JavaScript?',
		answers: ['Node']
	},
	{
		text: 'Is NaN a truthy or falsy value?',
		answers: ['falsy']
	},
	{
		text: 'What do string, numbers, booleans, undefined, and symbols have in common?',
		answers: ['They are all primative', 'They are immutable']
	},
	{
		text: 'Name the two main types of loops we use in JavaScript',
		answers: ['for and while loops', 'while and for loops', 'for and while', 'while and for']
	}
];
// var totalQuestions = 1;
var input;
var isCorrect;
var correctCount = 0;

for (var i = 0; i < quizQuestions.length; i++) {
	isCorrect = false;
	input = prompt(quizQuestions[i].text + ' ')
	// totalQuestions += 1
	for (var j = 0; j < quizQuestions[i].answers.length; j++) {
		if (quizQuestions[i].answers[j] === input) {
			isCorrect = true;

		}
	}
	if (isCorrect) {
		console.log('Correct!');
		correctCount++;
	} else {
		console.log('Incorrect. ' + quizQuestions[i].answers);
	}
}

var avg = (correctCount / quizQuestions.length) * 100;

if (avg >= 80) {
	console.log("Good Job!")
} else if (avg < 80 && avg >= 60) {
	console.log("What are you doing with you're life!")
} else {
	console.log("Really bro....really...")
}

console.log(avg + "%" + " Correct Answers -> " + correctCount)















