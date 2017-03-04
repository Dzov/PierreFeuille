var choices = ["pierre", "papier", "ciseaux", "lézard", "spock"]; 
var humanBtn = document.querySelectorAll(".btn"); 
var resultat = document.querySelector(".resultat"); 

for (var i = 0 ; i < humanBtn.length ; i++) {
  humanBtn[i].addEventListener("click", function() {
    var humanChoice = this.classList[0]; 
    var robotChoice = choices[Math.floor((Math.random() * 5))]; 

    if (humanChoice == robotChoice) {
      resultat.innerHTML = "Egalité!";
    } 
    else {
      if (humanChoice == "ciseaux" && (robotChoice == "papier" || robotChoice == "lézard")) {
        if(robotChoice == "papier") {
          resultat.innerHTML = "Gagné! Vos " + humanChoice + " coupent le " + robotChoice + " du robot"; 
        } else { 
          resultat.innerHTML = "Gagné! Vos " + humanChoice + " décapitent le " + robotChoice + " du robot"; 
        }
      } else if (humanChoice == "papier" && (robotChoice == "pierre" || robotChoice == "Spock")) {
        if(robotChoice == "pierre") {
          resultat.innerHTML = "Gagné! Votre " + humanChoice + " bat la " + robotChoice + " du robot"; 
        } else { 
          resultat.innerHTML = "Gagné! Votre " + humanChoice + " repousse le " + robotChoice + " du robot"; 
        }
      } else if (humanChoice == "pierre" && (robotChoice == "lézard" || robotChoice == "ciseaux")) {
        if(robotChoice == "lézard") {
          resultat.innerHTML = "Gagné! Votre " + humanChoice + " écrase le " + robotChoice + " du robot"; 
        } else { 
          resultat.innerHTML = "Gagné! Votre " + humanChoice + " bat les " + robotChoice + " du robot"; 
        }
      } else if (humanChoice == "lézard" && (robotChoice == "spock" || robotChoice == "papier")) {
        if(robotChoice == "spock") {
          resultat.innerHTML = "Gagné! Votre " + humanChoice + " empoisonne le " + robotChoice + " du robot"; 
        } else { 
          resultat.innerHTML = "Gagné! Votre " + humanChoice + " mange le " + robotChoice + " du robot"; 
        }
      } else if (humanChoice == "spock" && (robotChoice == "ciseaux" || robotChoice == "pierre")) {
        if(robotChoice == "ciseaux") {
          resultat.innerHTML = "Gagné! Votre " + humanChoice + " écrabouille les " + robotChoice + " du robot"; 
        } else { 
          resultat.innerHTML = "Gagné! Votre " + humanChoice + " détruit la " + robotChoice + " du robot"; 
        }
      } else {
        resultat.innerHTML = "Perdu! Le " + robotChoice + " du robot bat votre " + humanChoice;
      }
    } 
  }); 
} 

// Les ciseaux coupent le papier,
// le papier bat la pierre,
// la pierre écrase le lézard,
// le lézard empoisonne Spock.
// Spock écrabouille les ciseaux,
// les ciseaux décapitent le lézard,
// le lézard mange le papier,
// le papier repousse Spock,
// Spock détruit la pierre.
// La pierre bat les ciseaux