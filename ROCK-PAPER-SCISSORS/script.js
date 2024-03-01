let userScore = 0;
let compSocoe = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePare = document.querySelector("#user-score");
const compScorePare = document.querySelector("#comp-score");

const  genCompChoice = () => {
    const options = ["rock","paper","scissors"];       //
    const choiceIndex = Math.floor(Math.random()*3);
    return options[choiceIndex];
}

const drowGame = () => {
    msg.innerText = "Game was drow. play again!!!";
    msg.style.backgroundColor="black";
}
 
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin) {
        userScore++;
        userScorePare.innerText = userScore;
        msg.innerText = `Yor win!!. ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compSocoe++;
        compScorePare.innerText = compSocoe;
        msg.innerText = `Yor lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}

const playGame = (userChoice) => {
    //generate computer choice
    const compChoice = genCompChoice();    ////

    if (userChoice === compChoice){

    drowGame();                                                       //drow
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;          //scissors,paper
        } else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;       //rock,scissor
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);    
    }
};

choice.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

