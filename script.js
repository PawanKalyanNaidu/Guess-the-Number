let userinp=document.getElementById("userInput");
let gameresult=document.getElementById("gameResult");
let randomNumber=Math.ceil( Math.random()*100);
function checkGuess(){
    let guessnumber=parseInt(userinp.value);
    if(guessnumber>randomNumber){
        gameresult.textContent="Too High! Try Again!";
        gameresult.style.backgroundColor="#1e217c";
    }else if(guessnumber<randomNumber){
        gameresult.textContent="Too Low! Try Again"
        gameresult.style.backgroundColor="#1e217c";
    }else if(guessnumber===randomNumber){
        gameresult.textContent="Congratulations! You got it right.";
        gameresult.style.backgroundColor="green";
    }else{
        gameresult.textContent="Please Provide Valid Number.";
        gameresult.style.backgroundColor="red";
    }
}