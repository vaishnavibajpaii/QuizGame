// Questions that will be asked
const Questions = [{
	q: "Which of the following is the most important language for Data Science ?",
	a: [{ text: "Java", isCorrect: false },
	{ text: "Ruby", isCorrect: false },
	{ text: "R", isCorrect: true },
	{ text: "Python", isCorrect: false }
	]

},
{
	q: "Which of the following approach should be used to ask Data Analysis question ?",
	a: [{ text: "Data mining", isCorrect: false, isSelected: false },
	{ text: "Data Integration", isCorrect: false },
	{ text: "Data Replication", isCorrect: false },
	{ text: "Data Cleansing", isCorrect: true }
	]

},
{
	q: " Data science is the process of diverse set of data through ?",
	a: [{ text: "Organizing data", isCorrect: false },
	{ text: "Processing data", isCorrect: false },
	{ text: "Analysing data", isCorrect: false },
	{ text: "All of the above", isCorrect: true }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
