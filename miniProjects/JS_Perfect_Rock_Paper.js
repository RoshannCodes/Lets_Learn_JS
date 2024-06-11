let count = {
    wins: 0,
    losses:0,
    ties:0    
}

document.querySelector('#js-score').innerHTML = `WINS: ${count.wins}  LOSS: ${count.losses} TIES: ${count.ties}`;

let result = '';
function computerMove(){
    let random = Math.random();
    if(random>0 && random <1/3){
        return 'paper';
    }
    else if(random>1/3 && random<2/3){
        return 'rock';
    }
    else return 'scissor';
}


function playerMove(playerpick){
    let computerChoice = computerMove(); 
    if(playerpick==='rock'){
        if(computerChoice==='rock'){
            result = 'Match Tied.';
        }
        else if(computerChoice==='paper'){
            result ='You lost.';
        }
        else {
            result ='You win.';
        }
    }
    
    if(playerpick === 'paper'){
        if(computerChoice==='rock'){
            result='You win.';
        }
        else if(computerChoice==='paper'){
            result ='Tied.';
        }
        else result = 'You lost.';
    }

    if(playerpick==='scissor'){
        if(computerChoice==='rock'){
            result = 'You lost.';
        }
        else if(computerChoice=== 'paper'){
            result = 'You win.';
        }
        else result = 'Tied.';
    }

    if(result === 'You win.'){
        count.wins += 1;
    }
    else if(result === 'You lost.'){
        count.losses += 1;
    }
    else {count.ties +=1;}

    document.querySelector('#js-result').innerHTML = result ;
    document.querySelector('#js-moves').innerHTML = `You <img src="images/${playerpick}-emoji.png" class="js-result-emoji" >  <img src="images/${computerChoice}-emoji.png" class="js-result-emoji"> Computer`;

    document.querySelector('#js-score').innerHTML = `WINS: ${count.wins}  LOSS: ${count.losses} TIES: ${count.ties}`;

}
function resetScore(){
    count.wins=0;
    count.losses=0;
    count.ties=0;

    document.querySelector('#js-score').innerHTML = `WINS: ${count.wins}  LOSS: ${count.losses} TIES: ${count.ties}`;
}
