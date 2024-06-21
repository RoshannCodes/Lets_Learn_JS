const answerButtons = document.querySelectorAll('.answer')
const nextButton = document.querySelector('.next-btn-div')
const questionRow = document.querySelector('.question')

    

let questionNumber = 0;
let score = 0;

const questions = [
    {
        question: 'Which is the heighest peak of the world?',
        answers: [
            {text : 'Mount Everest', correct:true},
            {text : 'Annapurna', correct:false},
            {text : 'Ganesh Himal', correct:false},
            {text : 'Dhaulagiri', correct:false},
        ]
    },

    {
        question: 'Which is the best place to sit?',
        answers: [
            {text : 'Kalanki', correct:false},
            {text : 'Lalitpur', correct:false},
            {text : 'Dhading', correct:true},
            {text : 'Kathmandu', correct:false},
        ]
    },

    {
        question: 'Which is the smallest district of Nepal?',
        answers: [
            {text : 'Bhaktapur', correct:true},
            {text : 'Lalitpur', correct:false},
            {text : 'Dhading', correct:false},
            {text : 'Kathmandu', correct:false},
        ]
    }
]



function displayQuestion(){
    const currentQuestion = questions[questionNumber];
    questionRow.innerHTML = `${questionNumber+1}. ${currentQuestion.question}`;
    nextButton.classList.add('hide');
    
    answerButtons.forEach((button,index) =>{
        button.innerHTML = currentQuestion.answers[index].text;
        button.disabled = false;
        button.classList.remove('correct', 'incorrect')
    })
}



function setupAnswer(){ 
    answerButtons.forEach((btn,index)=>{
    btn.addEventListener('click', ()=>{
        const currentQuestion = questions[questionNumber];
        nextButton.classList.toggle('hide')
        answerButtons.forEach((item)=>{
            item.disabled = true
        })
    
    //checking correct answer
    let isCorrect = currentQuestion.answers[index].correct;
    if(isCorrect){
        score ++;
        btn.classList.add('correct')
    }
    else{
        btn.classList.add('incorrect')
    }
    })
})
}

nextButton.addEventListener('click', () => {
    questionNumber++;
    if (questionNumber < questions.length) {
        displayQuestion();
    } else {
        questionRow.innerHTML = `Quiz finished! Your score is: ${score}/${questions.length}`;
        // document.querySelector('.answer-button').innerHTML = '';
        document.querySelector('.answer-button').innerHTML = ''
        nextButton.classList.add('hide');
    }
})

displayQuestion()
setupAnswer()