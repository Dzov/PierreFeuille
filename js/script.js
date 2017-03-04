var choices = ["pierre", "papier", "ciseaux", "lézard", "spock"]; 
var humanBtn = document.querySelectorAll(".btn"); 
var resultat = document.querySelector(".resultat");
var choix = document.querySelector(".choix"); 
var humanScoreDisplay = document.querySelector("#myCounter"); 
var robotScoreDisplay = document.querySelector("#robotCounter"); 
var robotScore = 0; 
var humanScore = 0; 

humanScoreDisplay.innerHTML = humanScore; 
robotScoreDisplay.innerHTML = robotScore; 

for (var i = 0 ; i < humanBtn.length ; i++) {
  humanBtn[i].addEventListener("click", function() {
    var humanChoice = this.classList[0]; 
    var robotChoice = choices[Math.floor((Math.random() * 5))]; 

    if (humanChoice == robotChoice) {
      resultat.innerHTML = "Egalité!";
      choix.innerHTML = ""; 
    } else {
        resultat.innerHTML = "Gagné !";
        if (humanChoice == "ciseaux" && robotChoice == "papier") {
          humanScore ++; 
          humanScoreDisplay.innerHTML = humanScore; 
          choix.innerHTML = "Les ciseaux coupent le papier du robot"; 
        } else if (humanChoice == "ciseaux" && robotChoice == "lézard") {
          humanScore ++; 
          humanScoreDisplay.innerHTML = humanScore; 
          choix.innerHTML = "Les ciseaux décapitent le lézard du robot"; 
        } 
        else if (humanChoice == "papier" && robotChoice == "pierre") {
          humanScore ++; 
          humanScoreDisplay.innerHTML = humanScore; 
          choix.innerHTML = "Le papier bat la pierre du robot"; 
        } else if (humanChoice == "papier" && robotChoice == "spock") {
          humanScore ++; 
          humanScoreDisplay.innerHTML = humanScore; 
          choix.innerHTML = "Le papier repousse le spock du robot"; 
        } 
        else if (humanChoice == "pierre" && robotChoice == "lézard") {
          humanScore ++; 
          humanScoreDisplay.innerHTML = humanScore; 
          choix.innerHTML = "La pierre écrase le lézard du robot"; 
        } else if (humanChoice == "pierre" && robotChoice == "ciseaux") {
          humanScore ++; 
          humanScoreDisplay.innerHTML = humanScore; 
          choix.innerHTML = "La pierre bat les ciseaux du robot"; 
        } 
        else if (humanChoice == "lézard" && robotChoice == "spock") {
          humanScore ++; 
          humanScoreDisplay.innerHTML = humanScore; 
          choix.innerHTML = "Le lézard empoisonne le spock du robot"; 
        } else if (humanChoice == "lézard" && robotChoice == "papier") {
          humanScore ++; 
          humanScoreDisplay.innerHTML = humanScore; 
          choix.innerHTML = "Le lézard mange le papier du robot"; 
        }
        else if (humanChoice == "spock" && robotChoice == "ciseaux") {
          humanScore ++; 
          humanScoreDisplay.innerHTML = humanScore; 
          choix.innerHTML = "Spock écrabouille les ciseaux du robot"; 
        } else if (humanChoice == "spock" && robotChoice == "pierre") {
          humanScore ++; 
          humanScoreDisplay.innerHTML = humanScore; 
          choix.innerHTML = "Spock détruit la pierre du robot"; 
        } 
        else {
          robotScore ++; 
          robotScoreDisplay.innerHTML = robotScore; 
          resultat.innerHTML = "Perdu !";
          choix.innerHTML = "Le robot a choisi " + robotChoice + ". Il bat votre " + humanChoice;
        }
    } 
  }); 
} 
