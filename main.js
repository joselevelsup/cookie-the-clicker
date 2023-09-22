import './style.css'

let score = 0;
let points = 2;

const scoreBoard = document.getElementById("score");

const listOfAchievements = [
  {
    name: "Clicked the Cookie 10 times",
    scoreNeeded: 10,
    earned: false
  },
  {
    name: "Clicked the Cookie 20 times",
    scoreNeeded: 20,
    earned: false
  },
  {
    name: "Clicked the Cooked 30 times",
    scoreNeeded: 30,
    earned: false
  }
];

function updateAchievementBoard(){
  for(let i = 0; i < listOfAchievements.length; i++){
    const achievementRow = document.getElementById("achievement-" + (i+1));
    const earnedData = achievementRow.children[1];
    if(listOfAchievements[i].earned){
      earnedData.innerText = "✔️"; 
    }
  }
}

function checkAchievements(){
  for(let i = 0; i < listOfAchievements.length; i++){
    if(score >= listOfAchievements[i].scoreNeeded && listOfAchievements[i].earned == false){
        listOfAchievements[i].earned = true;
    }
  }
  updateAchievementBoard();
}

function addToScore(){
  score = score + points;

  scoreBoard.innerText = score;

  checkAchievements();
}


function setUpAchievementBoard(){
  const achievementBoard = document.getElementById("achievementBoard");

  for(let i = 0; i < listOfAchievements.length; i++){
    const newRow = document.createElement("tr");
    newRow.id = "achievement-" + (i+1); 
    const nameData = document.createElement("td");
    nameData.id = "achievement-name";
    const earnedData = document.createElement("td");
    earnedData.id = "achievement-earned";

    nameData.innerText = listOfAchievements[i].name;

    newRow.appendChild(nameData);
    newRow.appendChild(earnedData);

    achievementBoard.appendChild(newRow);
  }

}

(function(){
  scoreBoard.innerText = score;

  const clicker = document.getElementById("clicker");

  setUpAchievementBoard();

  clicker.addEventListener("click", addToScore);


})(); 


