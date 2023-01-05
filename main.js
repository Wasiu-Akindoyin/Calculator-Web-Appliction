//VARIABLE DECLARATIONS STARTS HERE.
let num1 = Math.floor(Math.random() * 50) + 1;

let num2 = Math.floor(Math.random() * 40) + 1;

let num1El = document.getElementById("num1-el").textContent = num1;

let num2El = document.getElementById("num2-el").textContent = num2;

let answerEl = document.getElementById("answer-el");

//ARROW FUNCTIONS LOGIC INITIALIZATION STARTS HERE FOR THE ADDITION FUNCTION.
const add = () =>{
	console.log("Clicked");
	let result = num1 + num2;
	answerEl.textContent = "Answer: " + result;
}

//ARROW FUNCTIONS LOGIC INITIALIZATION STARTS HERE FOR THE SUBTRACTION FUNCTION.
const subtract = () =>{
	console.log("Clicked");
	let result = num1 - num2;
	answerEl.textContent = "Answer: " + result;
}

//ARROW FUNCTIONS LOGIC INITIALIZATION STARTS HERE FOR THE DIVISION FUNCTION.
const divide = () =>{
	console.log("Clicked");
	let result = num1 / num2;
	answerEl.textContent = "Answer: " + result;
}

//ARROW FUNCTIONS LOGIC INITIALIZATION STARTS HERE FOR THE MULTIPLICATION FUNCTION.
const multiply = () =>{
	console.log("Clicked");
	let result = num1 * num2;
	answerEl.textContent = "Answer: " + result;
}
