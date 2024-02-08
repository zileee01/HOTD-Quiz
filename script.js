const questions = [
    {
        question: "Who was named king JAEHAERYS's rightful heir ?", 
        answers: [
            { text : " Rhaenys" , correct: false  }, 
            { text : " Daemon" , correct: false  },
            { text : " Viserys" , correct: false  },
            { text : " Rhaenyra" , correct: true  },
        ]
    }, 
    {
        question: "Who dreamt of the song of ice and fire prophecy ?", 
        answers: [
            { text : " Jaehaerys" , correct: false  }, 
            { text : " Aegon" , correct: true  },
            { text : " Viserys" , correct: false  },
            { text : " Aemon" , correct: false  },
        ]
    }, 
    {
        question: "The song of ice and fire is written on which object ?",
        answers: [
            { text : " A sword" , correct: false  }, 
            { text : " A helmet" , correct: false  },
            { text : " A dagger" , correct: true  },
            { text : " A necklace" , correct: false  },
        ]
    }, 
    {
        question: "What does the color green signals to house Hightower ?", 
        answers: [
            { text : " Love" , correct: false  }, 
            { text : " War" , correct: true  },
            { text : " Friendship" , correct: false  },
            { text : " Distress" , correct: false  },
        ]
    }, 
    {
        question: "What animal did the boys give to Aemond as a prank ?", 
        answers: [
            { text : " A dragon" , correct: false  }, 
            { text : " A pig" , correct: true  },
            { text : " A goat" , correct: false  },
            { text : " A sheep" , correct: false  },
        ]
    }, 
    {
        question: "What does Alicent demand to pay the 'Debt' that was owed ?", 
        answers: [
            { text : " An eye" , correct: true  }, 
            { text : " A life" , correct: false  },
            { text : " A dragon" , correct: false  },
            { text : " A dagger" , correct: false  },
        ]
    }, 
    {
        question: "How long was the wedding celebration meant to last ?",
        answers: [
            { text : " 7 days" , correct: true  }, 
            { text : " 4 days" , correct: false  },
            { text : " 6 days" , correct: false  },
            { text : " 10 days" , correct: false  },
        ]
    }, 
    {
        question: "Who killed Vaemond Velaryon ?",
        answers: [
            { text : " Daemon Targaryen" , correct: true  }, 
            { text : " Criston Cole" , correct: false  },
            { text : " King Viserys" , correct: false  },
            { text : " Otto Hightower" , correct: false  },
        ]
    }, 
    {
        question: "Mysaria is aldo known by what name ?",
        answers: [
            { text : " The Blood Wyrm" , correct: false  }, 
            { text : " The Red Priestess" , correct: false  },
            { text : " The White Worm" , correct: true  },
            { text : " The white which" , correct: false  },
        ]
    },
    {
        question: 'Finish the quote: "He can Keep his ______"',
        answers: [
            { text : " honor" , correct: false  }, 
            { text : " tongue" , correct: true  },
            { text : " eyes" , correct: false  },
            { text : " birthright" , correct: false  },
        ]
    }

];

const questionElement = document.getElementById("question"); 
const answerButton = document.getElementById("answer-buttons"); 
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0; 

function startQuiz () {
    currentQuestionIndex = 0 ; 
    score = 0 ; 
    nextButton.innerHTML = "Next"; 
    showQuestion(); 
}

function showQuestion() {

    resetState(); 

    let currentQuestion = questions[currentQuestionIndex]; 
    let questionNo = currentQuestionIndex + 1 ; 
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question ;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button"); 
        button.innerHTML = answer.text ;
        button.classList.add("btn"); 
        answerButton.appendChild(button); 
        if (answer.correct) {
            button.dataset.correct = answer.correct; 
        }
        button.addEventListener("click" , selectAnswer);  
    } ); 


}



function resetState() {

    nextButton.style.display = "none"; 
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild); 
    }

}

function selectAnswer(e) {
    const selectedBtn = e.target ;
    const isCorrect = selectedBtn.dataset.correct === "true" ;
    if (isCorrect) {
        selectedBtn.classList.add("correct") ; 
        score++ ; 
    }else {
        selectedBtn.classList.add("incorrect"); 
    }

    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct"); 
        }
        button.disabled = true ;  
    }) ;

    nextButton.style.display = "block" ; 
}

function showScore (){
    resetState(); 
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}! ` ; 
    nextButton.innerHTML = "Play Again " ; 
    nextButton.style.display = "block" ;
}

function handleNextButton() {
    currentQuestionIndex++ ; 
    if (currentQuestionIndex < questions.length) {
        showQuestion(); 
    }else {
        showScore(); 
    }
}

nextButton.addEventListener("click" , ()=> {
    if (currentQuestionIndex < questions.length) {
        handleNextButton(); 
    }else {
        startQuiz() ; 
    }
}) ; 

startQuiz(); 


