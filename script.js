const quizData =[
    {
        question:"Which language runs in a web browser?",
        a:"JavaScript",
        b:"Python",
        c:"Java",
        d:"C++",
        correct:"a",
    },
    {
        question:"What does CSS stand for?",
        a:"Central Style Sheets",
        b:"Cascading Style Sheets",
        c:"Cascading Simple Sheets",
        d:"Cars SUVs Sailboats",
        correct:"b",
    },
    {
        question:"What does HTML stand for?",
        a:"Hypertext Markup Language",
        b:"Hypertext Markdown Language",
        c:"Hyperloop Machine Language",
        d:"Helicopers Terminals Motorboats Lamborginis",
        correct:"a",
    },
    {
        question:"What year was JavaScript Launched?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"none of the above",
        correct:"b",
    }
]

const quizForm=document.getElementById('quizForm');
const questionEl=document.getElementById("question")
const answerEls=document.querySelectorAll(".answer");
const option_a=document.getElementById("option_a");
const option_b=document.getElementById("option_b");
const option_c=document.getElementById("option_c");
const option_d=document.getElementById("option_d");
const submitBtn = document.getElementById('submit');

let currentQuizNumber = 0;
let score = 0;



const deselectAnswers=()=>{
    answerEls.forEach(element => {
        element.checked = false;        
    });
}

const loadQuiz=()=>{
    deselectAnswers();
    const currentQuizData = quizData[currentQuizNumber];
    questionEl.innerText = currentQuizData.question;
    option_a.innerText = currentQuizData.a;
    option_b.innerText = currentQuizData.b;
    option_c.innerText = currentQuizData.c;
    option_d.innerText = currentQuizData.d;

}


const getSelectedAnswer=()=>{
    let answer;
    answerEls.forEach(element => {
        if (element.checked){ 
            answer = element.value;
            console.log(answer);
        } // end of if statement
    });  // end of for each iteration
    return answer;

}

submitBtn.addEventListener("click",()=>{
    const answer = getSelectedAnswer();
    if(answer){
        if (answer === quizData[currentQuizNumber].correct){
            score ++;
        }
        currentQuizNumber++;

        if(currentQuizNumber<quizData.length){
            loadQuiz();
        }
        else{
            quizForm.innerHTML = `<h2>You have answered ${score} of the ${quizData.length} correctly.</h2>
            <button id="reload">Reload</button>
            `
            const reload = document.getElementById("reload");
            reload.addEventListener("click",()=>{
                window.location.reload();
                
                
            })
        }
    }
})


loadQuiz();