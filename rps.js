const choice = document.querySelectorAll('.choice');
const R = document.querySelector('#rock');
const P = document.querySelector('#paper');
const S = document.querySelector('#scissors');
const result = document.querySelectorAll('.roundresult');
const thisround = document.querySelectorAll('.thisround');
const gameresult = document.querySelectorAll('.gameresult');
const whowon = document.querySelectorAll('.whowon');

let buttons = document.querySelectorAll('.choice');
console.log(buttons);

//click event listener

buttons.forEach(button => {
    button.addEventListener("click", event=>{
        


    });
});
var Humanscore = 0;
var Computerscore = 0;


rock = "rock";
paper = "paper";
scissors = "scissors";


function getComputerChoice()
{
    const randomnumber = Math.floor(Math.random() * 3); // 0 1 2
    return randomnumber === 0 ? rock : randomnumber === 1? paper : scissors;
}

let computerchooses = getComputerChoice();

function playgame()
{
   for(let i=1;i<=5;i++)
   {
    playround();
    computerchooses = getComputerChoice();
   }
function playround()
{
    if ((humanchooses === "rock" && computerchooses === "scissors") ||
       (humanchooses === "paper" && computerchooses === "rock") ||
       (humanchooses === "scissors" && computerchooses === "paper"))
       {
        result = "You WON!!";
        Humanscore +=1;
       }
    else if(humanchooses === computerchooses)
    {
        result = "Its a TIE!!";
    }
    else
    {
        result = "You LOST!!";
        Computerscore +=1;
    }
    thisround = "Your score : " + Humanscore + "   Computer's score : " + Computerscore;
}
}
playgame();
 gameresult = "Final Scores: Your Scores : " + Humanscore + "  " + "Computer's scores : " + Computerscore;
if(Humanscore>Computerscore)
{
    whowon = "You WON!!🎉🎉";
}
else if(Humanscore<Computerscore)
{
    whowon="Sorry, You Lost";
}
else
{
    whowon = "Its a tie!!";
}