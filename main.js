const buttonNext = document.querySelector(".buttonNext");
const questionParagraph = document.querySelector(".question h1");
const pseuroElementBtn = document.querySelector("button::before");

let arrow = true;
let showAnswer = false;

data = {
  questions: [
    {
      question: "Where we should import js file in HTML?",
      answer:
        "As last element in body because then all document will be rendered - created DOM, so we have ready objects whitt he can work.",
      category: "Structure",
    },
    {
      question: "List what are the data types",
      answer:
        "Simple types: string ('knowledge'), number (2; 3.4; NaN- Not a number), boolean (true/false), undefined (unassigned value), null(does not have) and reference types (object{}/function(), table[]...)",
      category: "Structure",
    },
    {
      question: "What are variable attributes",
      answer:
        "name, memory location, value, variable lifetime (local / global)",
      category: "Structure",
    },
    {
      question: "What is result of a++? a = 1; a++",
      answer:
        "Result of a++ is stil 1, gives as variable before adding. When we write ++a we get right away 2",
      category: "Structure",
    },
    {
      question: "Method which add element at the beginning of array",
      answer: "animals.unshift('dog')",
      category: "Structure",
    },
    {
      question: "Method which remove last element of array",
      answer: ".pop(), additional return last element: animals.pop()",
      category: "Structure",
    },
    {
      question: "Method which remove first element of array",
      answer: "shift(), additional return first element: animals.shift()",
      category: "Structure",
    },
    {
      question: "What rerutn method .shift() and push() ?",
      answer:
        "They are responsible for adding elements but return lenght of array after adding",
      category: "Structure",
    },
    {
      question: "What do spread operator '...' ?",
      answer: "Take of elements of table",
      category: "Structure",
    },
    {
      question: "How to add two tables? / How to add two objects?",
      answer:
        "Use method concat / assign e.g table1.concat(table2) / obj.assign(obj1, obj2)",
      category: "Structure",
    },
    {
      question: "What method slice() do?",
      answer:
        "Returns a new array that consists of the portion of the array on which it is being accessed",
      category: "Structure",
    },
    {
      question: "What the difference between slice and splice?",
      answer: "Slice create new array and splice mutating current array",
      category: "Structure",
    },
    {
      question:
        "What does indexOf return if it doesn't find the index you're looking for?",
      answer: "returns: -1 e.g. ['Alex', null, 34].indexOf('Max'); //-1",
      category: "Structure",
    },
  ],
};

function onSelectQuestion() {
  const quest = document.createElement("h3");
  const answer = document.createElement("p");
  const showAnswerButton = document.createElement("button");

  if (arrow) {
    let i = Math.floor(Math.random() * data.questions.length);
    console.log(i);

    quest.innerHTML = `Question number ${i + 1}: <h3>
    ${data.questions[i].question}</h3>`;
    answer.innerHTML = `<h3>${data.questions[i].answer}<h3>`;
    showAnswerButton.innerHTML = "Show me the answer";
    showAnswerButton.addEventListener("click", function () {
      showAnswer = !showAnswer;
      questionParagraph.appendChild(answer);
      showAnswerButton.innerHTML = "The answer is as follows:";
      showAnswerButton.classList.add("showanswer");
    });
    questionParagraph.appendChild(quest);
    questionParagraph.appendChild(showAnswerButton);
    showAnswerButton.classList.add("answer");
  } else {
    while (questionParagraph.firstChild) {
      questionParagraph.removeChild(questionParagraph.firstChild);
    }
  }
  arrow = !arrow;
}

buttonNext.addEventListener("click", onSelectQuestion);
