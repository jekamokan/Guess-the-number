'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0

const displayGuessMessage = function(text){
    document.querySelector('.guess-message').textContent = text;
};
const numberScore = function(number){
    document.querySelector('.score').textContent = number;
};
const hidenNumber = function(number){
    document.querySelector('.question').textContent =number;
};



document.querySelector('.check').addEventListener('click', function(){
const guessingNumber = Number(document.querySelector('.number-input').value); 
if(!guessingNumber){
    displayGuessMessage('Ведите число!');
//Player won
} else if(secretNumber === guessingNumber){
    displayGuessMessage('Правильно!');
    hidenNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = 'rgb(122, 250, 128)';
    document.querySelector('.question').style.width = '40rem';
    
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }

    //wrong input number
} else if(guessingNumber !== secretNumber){
    if(score > 1){
        displayGuessMessage(guessingNumber > secretNumber ? 'Это слишком большое число!' : 'Это слишком маленькое число!');
        score--;
        numberScore(score);
        } else{
            displayGuessMessage('Вы проиграли!');
            numberScore(0);
        }
}
});
// reload content
document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    hidenNumber('???');
    document.querySelector('.question').style.width = '25rem';
    displayGuessMessage('Начни угадывать!');
    numberScore(score)
    document.querySelector('.number-input').value = '';
    document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
});