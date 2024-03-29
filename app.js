var score = { userScore: 0, cpuScore: 0 };
var userPick;
var cpuPick;

// var allOptions = ["sasso", "carta", "forbice"];
var allOptions = [
  {
    name: "sasso",
    image: "assest/sasso.png",
  },
  {
    name: "carta",
    image: "assest/carta.png",
  },
  {
    name: "forbice",
    image: "assest/forbice.png",
  },
];

var posibleUserPicks = document.getElementsByClassName("user-choice");

for (var i = 0; i < posibleUserPicks.length; i++) {
  /*eventListener('primo argomento è sempre l'evento, nel nostro caso è "click"', 
            secondo argomento è sempre una funzione, cio che succede se fai "click", 
            nel nostro caso selezione il dataset.name del lemento HTML)*/
  posibleUserPicks[i].addEventListener("click", oneUserPick);
}

function oneUserPick() {
  userPick = this.dataset.name;
  // console.log("User choice: " + userPick);
  generateCpuPick();
  // console.log("CPU choice: " + cpuPick.name);
  // console.log(ceckWhoWon());

  var cpuPickImage = "<img src='" + cpuPick.image + "'/>";
  var cpuPickText = "<h3>" + cpuPick.name + "</h3>";

  document.getElementById("computer-choice").innerHTML =
    cpuPickImage + cpuPickText;
  document.getElementById("result").innerHTML = ceckWhoWon();
  document.getElementById("player-score").innerHTML = score.userScore;
  document.getElementById("cpu-score").innerHTML = score.cpuScore;
  /*innerHTML - rapresenta il codice HTML dell elemento selezionato,
nel nostro caso del elemento <h3> con id result*/
}

function generateCpuPick() {
  cpuPick = allOptions[Math.floor(Math.random() * allOptions.length)];
}

function ceckWhoWon() {
  if (userPick == cpuPick.name) {
    return "Hai pareggiato";
  } else {
    if (userPick == "sasso") {
      if (cpuPick.name == "forbice") {
        score.userScore++;
        return "Hai vinto";
      } else {
        score.cpuScore++;
        return "Hai perso";
      }
    }
    if (userPick == "carta") {
      if (cpuPick.name == "sasso") {
        score.userScore++;
        return "Hai vinto";
      } else {
        score.cpuScore++;
        return "Hai perso";
      }
    }
    if (userPick == "forbice") {
      if (cpuPick.name == "carta") {
        score.userScore++;
        return "Hai vinto";
      } else {
        score.cpuScore++;
        return "Hai perso";
      }
    }
  }
}
