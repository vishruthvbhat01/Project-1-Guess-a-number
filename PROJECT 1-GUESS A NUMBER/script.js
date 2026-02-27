'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='Correct Number!';

document.querySelector('.number').textContent=15;
document.querySelector('.score').textContent=17;
document.querySelector('.guess').value=11;
console.log(document.querySelector('.guess').value);

*/
let numberr=Math.trunc(Math.random()*20)+1;

let score=20;
let highscore=0;

const displayMessage = function(message){
     document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);
    
    if (!guess){
        displayMessage('No Number!');
    }
    else if(guess==numberr){
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent=numberr;
        
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        if(score>highscore){
            highscore=score;
        document.querySelector('.highscore').textContent=score;
                  }
                }

    else if(guess!=numberr){
         if(score>1){
           displayMessage(guess>numberr?'Too high':'Too low');
            score--;
    document.querySelector('.score').textContent=score;
    }

else{
    displayMessage('You lost the game');
          document.querySelector('.score').textContent = 0;

}
    }
});

document.querySelector('.again').addEventListener('click',function(){
    numberr=Math.trunc(Math.random()*20)+1;
    score=20;
    document.querySelector('.score').textContent=20;
    
    
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';

    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
});