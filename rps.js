let buttons = document.querySelectorAll('button');


var Humanscore = 0;
var Computerscore = 0;

function getComputerChoice()
{
    const randomnumber = Math.floor(Math.random() * 3); // 0 1 2
    return randomnumber === 0 ? "rock" : randomnumber === 1? "paper" : "scissors";
}


  let rvediv = document.createElement("div");
buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        let humanchooses = button.textContent.toLowerCase();
        let computerchooses = getComputerChoice();
       let p =  document.createElement("p");
       const result = document.createElement("h5");
     
       rvediv.textContent = "";
    if ((humanchooses === "rock" && computerchooses === "scissors") ||
       (humanchooses === "paper" && computerchooses === "rock") ||
       (humanchooses === "scissors" && computerchooses === "paper"))
       {
        p.textContent = humanchooses + " wins!!";
        p.classList.add("win");
        Humanscore +=1;
       }
    else if(humanchooses === computerchooses) 
    {
         p.textContent = "Its a tie!";
         p.classList.add("tie");
    }
    else
    {
         p.textContent = humanchooses + " loses!!";
         p.classList.add("lose");
        Computerscore +=1;
    }
     result.textContent = "Your score : " + Humanscore + "\n"+"   Computer's score : " + Computerscore;
  result.classList.add("result");
   document.body.appendChild(rvediv);
    rvediv.appendChild(p);
   rvediv.appendChild(result);
    });
});

/*
function playgame()
{
   for(let i=1;i<=5;i++)
   {
    playround();
    computerchooses = getComputerChoice();
   }
   */
  /*
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
//}
//playgame();
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
    */