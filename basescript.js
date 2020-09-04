//Who Wants To Be A JavaScript Millionaire!
//Progressively harder JS questions
//Answer 14 questions correctly to become a JS millionaire!
//Multiple choice, a-d
//Two available lifelines:
//50:50
//skip question
//add more if possible
//If answer is incorrect: you are not a millionaire, try again!
//If answer is correct: Congratulations! You now have $X!
//Use closure, keep updating closure after every correct answer
//Player name
//Money won so far 
//Questions correct so far
//Cash out or continue? starts after question 5
//Higher order function for how the questions are posed
//Stop running all functions if you get an answer wrong


//All questions and answers in one object
let qAndA = {
    q1: "What is a string? \n A. A group of numbers \n B. A group of characters \n C. A group of objects \n D. A group of earthworms",
    a1: "B",
    m1: 500,
    q2: "Which of the following is a boolean value?\n A. Yes \n B. Great \n C. False \n D. 4",
    a2: "C",
    m2: 500,
    q3: "Which of the following is the correct notation for finding the smallest number in an array?\n A. Math.floor() \n B. Math.max() \n C. Math.small() \n D. Math.min()",
    a3: "D",
    m3: 1000,
    q4: "If I run the following code, what will my output be? console.log(\"Javascript\">\"cookies\") \n A. \"Javascript\" \n B. False \n C. True \n D. \"cookies\"",
    a4: "B",
    m4: 1000,
    q5: "Which of the following is a way to create a brand-new object?\n A. let object = { } \n B. object.assign {} \n C. object.create() \n D. let object()=",
    a5: "A",
    m5: 2000,
    q6: "Given an array, what is the index of the second element? \n A. a \n B. 1 \n C. 2 \n D. b",
    a6: "B",
    m6: 2000,
    q7: "Complete the sentence: A higher-order function is a/an... \n A. function that uses difficult math. \n B. recursive technique. \n C. example of lexical scoping. \n D. function that operates on other functions.",
    a7: "D",
    m7: 3000,
    q8: "Which array method should you use when you do not need to return a value? \n A. .reduce() \n B. .some() \n C. .forEach() \n D. .every()",
    a8: "C",
    m8: 10000,
    q9: "What is the purpose of a base case in recursion? \n A. Returns a value without making any more recursive calls. \n B. Creates a prototype for the rest of the function. \n C. Acts as an entry point into the code.  \n D. Provides a base value for iteration. ",
    a9: "A",
    m9: 10000,
    q10: "What is the name of the following time complexity? \"O(n^2)\"\n A. Quasilinear \n B. Exponential \n C. Quadratic \n D. Linear",
    a10: "C",
    m10: 20000,
    q11: "Which of the following time complexity notations describes the lower bound? \n A. Big Omega \n B. Big O \n C. Big Iota \n D. Big Theta",
    a11: "B",
    m11: 50000,
    q12: "What would the following loop print on the console? let result = 1; \n for (let i=0, i<3, i=i+1) {\n result = result * 2; \n}\n console.log(result); \n A. result \n B. syntax error \n C. 8 \n D. 10",
    a12: "B",
    m12: 150000,
    q13: "The rest parameter (...) does which of the following? \n A. allows iterables(arrays/objects/ strings) to be expanded into single elements \n B. returns an array-like object \n C. unpack elements in an array to individual arguments \n D. collects all remaining elements into an array",
    a13: "D",
    m13: 250000,
    q14: "Which of the following is in the correct order of speed, from fastest to slowest? \n A. Quadratic, Linear, Logarithmic, Factorial \n B. Logarithmic, Factorial, Constant, Exponential \n C. Constant, Logarithmic, Quadratic, Factorial \n D. Exponential, Logarithmic, Constant, Quadratic",
    a14: "C",
    m14: 500000,
    q15050: "What is a string? \n A. \n B. A group of characters \n C. A group of objects \n D. ",
    q25050: "Which of the following is a boolean value?\n A. \n B. \n C. False \n D. No",
    q35050: "Which of the following is the correct notation for finding the smallest number in an array?\n A. Math.floor() \n B. \n C. \n D. Math.min()",
    q45050: "If I run the following code, what will my output be? console.log(\"Javascript\">\"cookies\") \n A.  \n B. False \n C. \n D. \"cookies\"",
    q55050: "Which of the following is a way to create a brand-new object?\n A. let object = { } \n B.  \n C. object.create() \n D.",
    q65050: "Given an array, what is the index of the second element? \n A.  \n B. 1 \n C. 2 \n D. ",
    q75050: "Complete the sentence: A higher-order function is a/an... \n A. \n B. \n C. example of lexical scoping. \n D. function that operates on other functions.",
    q85050: "Which array method should you use when you do not need to return a value? \n A. \n B. \n C. .forEach() \n D. .every()",
    q95050: "What is the purpose of a base case in recursion? \n A. Returns a value without making any more recursive calls. \n B. \n C.   \n D. Provides a base value for iteration. ",
    q105050: "What is the name of the following time complexity? \"O(n2)\"\n A.  \n B. Exponential \n C. Quadratic \n D. ",
    q115050: "Which of the following time complexity notations describes the lower bound?\n A. \n B. Big O \n C.  \n D. Big Theta",
    q125050: "What would the following loop print on the console? let result = 1; \n for (let i=0, i<3, i=i+1) {\n result = result * 2; \n}\n console.log(result); \n A. \n B. syntax error \n C. 8 \n D. ",
    q135050: "The rest parameter (...) does which of the following? \n A. allows iterables(arrays/objects/ strings) to be expanded into single arguments/elements \n B. \n C. \n D. collects all remaining elements into an array",
    q145050: "Which of the following is in the correct order of speed, from fastest to slowest? \n A. Quadratic, Linear, Logarithmic, Factorial \n B.  \n C. Constant, Logarithmic, Quadratic, Factorial \n D."
};

let lifeline = {
    text: '\n \n To use a lifeline, type in "use lifeline".',
    choose: 'What lifeline would you like to use? \n 50-50 \n Hint \n',
    nao: "That is not an option! You've chosen to not use a lifeline."
}

let lifeOptions = ["50-50", "skip question"];

function promptName() {
    let name = prompt("Please enter your name:", "Draco Malfoy");
    if (name == null || name == "") {
        alert("Sorry, but you must enter a name.")
        return promptName();
    } else {
        return name;
    }
}

function createPerson() {
    let correctQuestions = 0;
    let money = 0;
    let priorAnswer = null;
    let cDrop = null;
    let person = promptName();
    let intro = confirm(`Hello ${person}, welcome to "Who wants to be a JavaScript Millionare." Are you ready to play? Press "OK" to continue`);

    return function questionFunc(question, correctAnswer, questionWorth, question5050) {
        // asking Question

        function ifCorrectAnswer() {
            if (correctAnswer === answer.toUpperCase()) {
                money = money + questionWorth;
                correctQuestions++;

                if (correctQuestions === 14) {
                    alert(`Congratulations ${person}! You are a millionaire! You have won the game and are officially a JavaScript Master!`);
                    return;
                }
                alert(`Congratulations ${person}, you're correct! You now have $${money}!`);
            } else if (answer === "skipped") {
                return;
            } else if (correctAnswer !== answer || answer == null) {
                alert(`You are incorrect! Sorry ${person}. You are not a millionaire. Try again!`);
                priorAnswer = false;
                return;
            }
            if (correctQuestions > 4) {
                let continueOrDrop = confirm(`${person}, you're now at Level ${correctQuestions}. Would you like to leave with $${money}, or continue to the next Level ? Click "OK" to continue, or "Cancel" to leave with the money. The Choice is yours.`);
                if (continueOrDrop === false) {
                    cDrop = false;
                    alert(`Congratulations ${person}. You are taking home $${money}! Next time let's aim higher!`);
                    return;
                }
            }
        }

        if (priorAnswer === false || cDrop === false || intro === false) return;

        function questionText() {
            let text = ''
            if (lifeOptions.length > 0) {
                text = "Question " + (correctQuestions + 1) + ": " + question + lifeline.text;
            } else if (lifeOptions.length == 0) {
                text = "Question " + (correctQuestions + 1) + ": " + question + "\n \n No more lifelines!";
            }
            return text;
        }

        let answer = prompt(questionText(), ["Please enter answer here"]);

        if (answer != null && answer.toLowerCase() == "use lifeline") {
            if (lifeOptions.length === 0) {
                alert("You've used up your lifelines!");
                let answer = prompt(questionText(), ["Please enter answer here"]);
                return ifCorrectAnswer();
            } else if (correctQuestions == 13 && lifeOptions.includes("50-50")) {
                let lifeToUse = prompt(`Select lifeline to use: \n50-50`, []);
                if (lifeOptions.includes(lifeToUse.toLowerCase())) {
                    alert("You've chosen " + lifeToUse + "!");
                    if (lifeToUse === "50-50") {
                        answer = prompt("Question " + (correctQuestions + 1) + ": " + question5050, ["Please enter answer here"]);
                        return ifCorrectAnswer();
                    }
                }
            } else if (correctQuestions == 13 && lifeOptions.includes("skip question")) {
                let lifeToUse = prompt(`Select lifeline to use: \n50-50`, []);
                if (lifeOptions.includes(lifeToUse.toLowerCase())) {
                    alert("You've chosen " + lifeToUse + "!");
                    if (lifeToUse === "50-50") {
                        answer = prompt("Question " + (correctQuestions + 1) + ": " + question5050, ["Please enter answer here"]);
                        return ifCorrectAnswer();
                    }
                }
            } else {
                let lifeToUse = prompt(`Select lifeline to use: ${findLifelines()}`, []);
                if (lifeOptions.includes(lifeToUse.toLowerCase())) {
                    alert("You've chosen " + lifeToUse + "!");
                    if (lifeToUse === "50-50") {
                        lifeOptions = lifeOptions.slice(1, 2);
                        answer = prompt("Question " + (correctQuestions + 1) + ": " + question5050, ["Please enter answer here"]);
                        return ifCorrectAnswer();
                    }
                    if (lifeToUse === "skip question") {
                        if (lifeOptions.length === 2) {
                            lifeOptions = lifeOptions.slice(0, 1);
                        } else if (lifeOptions.length === 1) {
                            lifeOptions = [];
                        }
                        money = money + questionWorth;
                        correctQuestions++
                        answer = "skipped";
                        alert(`Skipping question! Congratulations ${person}! You now have $${money}!`);
                        return ifCorrectAnswer();
                    }
                } else {
                    alert(lifeline.nao);
                    let answer = prompt(questionText(), ["Please enter answer here"]);
                    return ifCorrectAnswer();
                };
            }
            //for skipquestion make sure to increment money by value of skipped question

        } else if (answer == null) {
            alert(`You have chosen not to answer the question! Sorry ${person}. You are not a millionaire. Try again!`);
            priorAnswer = false;
            return;
        }
        return ifCorrectAnswer();
    }
}


function findLifelines() {
    let lifelineOptions = ''
    for (let i = 0; i < lifeOptions.length; i++) {
        lifelineOptions = lifelineOptions + "\n" + lifeOptions[i];
    };
    return lifelineOptions;
}

const question = createPerson();

question(qAndA.q1, qAndA.a1, qAndA.m1, qAndA.q15050);
question(qAndA.q2, qAndA.a2, qAndA.m2, qAndA.q25050);
question(qAndA.q3, qAndA.a3, qAndA.m3, qAndA.q35050);
question(qAndA.q4, qAndA.a4, qAndA.m4, qAndA.q45050);
question(qAndA.q5, qAndA.a5, qAndA.m5, qAndA.q55050);
question(qAndA.q6, qAndA.a6, qAndA.m6, qAndA.q65050);
question(qAndA.q7, qAndA.a7, qAndA.m7, qAndA.q75050);
question(qAndA.q8, qAndA.a8, qAndA.m8, qAndA.q85050);
question(qAndA.q9, qAndA.a9, qAndA.m9, qAndA.q95050);
question(qAndA.q10, qAndA.a10, qAndA.m10, qAndA.q105050);
question(qAndA.q11, qAndA.a11, qAndA.m11, qAndA.q115050);
question(qAndA.q12, qAndA.a12, qAndA.m12, qAndA.q125050);
question(qAndA.q13, qAndA.a13, qAndA.m13, qAndA.q135050);
question(qAndA.q14, qAndA.a14, qAndA.m14, qAndA.q145050);


// alert();
// confirm();
// prompt();


//Who wants to be a millionaire!
//progressively harder JS questions

//14 questions
//multiple choice, a-d

//if we have time, add in lifelines
//50:50
//hint
//switch the question

//you are not a millionaire, try again?

//Congratulations! You now have $X!
//closure, keep updating closure after every correct answer
//cash out or continue?

//higher order function for how the questions are posed

//create closure