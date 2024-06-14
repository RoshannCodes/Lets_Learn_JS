let userInput = document.querySelector('.input')
let guess = document.querySelector('.guess')
let array = document.querySelector('.array')
let resetGame = document.querySelector('.resetGame')
let newGame = document.querySelector('.newGame')
let randomNum = Math.floor((Math.random() * 10))
let result = document.querySelector('.result')
let guessLeftData = document.querySelector('.numOfMovesLeft')
let totalGuessLeft = 9;
let previousMoves = [];


userInput.addEventListener('click', ()=>{
    result.classList.add('hide')
    userInput.value = ''
})

guess.addEventListener('click', ()=>{
    if(userInput.value != randomNum){
        result.classList.remove('hide')
        result.innerHTML = 'Guess Incorrect'
        guessLeftData.innerHTML = `Guesses Left: ${totalGuessLeft}`
        totalGuessLeft--;
        // previousMoves.push(userInput.value)
        previousMoves.push(userInput.value)
        array.innerHTML = `Previous Moves:${previousMoves}`
    }

    else{
        result.classList.remove('hide')
        result.innerHTML = 'Your guess is correct!'
        userInput.disabled = true;
    }
})

resetGame.addEventListener('click', ()=>{
        array.classList.add('hide');
        totalGuessLeft = 9;
        guessLeftData.classList.add('hide')
        result.classList.add('hide')
})

