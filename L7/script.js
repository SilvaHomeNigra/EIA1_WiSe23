// Funktion 
function gruessen(name) {
   alert("Hallo, " + name + "!");
}


// Begruesung
const welcome = gruessen ("Carolin")

// Array

let Array = [
   "You are in a dark room. There are two doors. Which door do you take? Left or Right?", 
   "You are in a room with a monster. What do you do? Fight or Run?",
   "You are fighting the monster. You are dead. Game over.",
   "You are runing trough the door in front of you. The monster behind you doesn't follow you. You found a treasure chest. You open it and find a lot of gold. You are rich. You win.",
   "Wrong input. Game over.",
   
   "You are in a room with a trap which is narrowing. In front of you are two doors. Which door do you take? Left or Right?",
   "You can dodge the trap and you are in a room with a treasure chest. You open it and find a lot of gold. You are rich. You win.",
   "You can't open the door and have no time to dodge the trap. You are dead. Game over",
]


// beginn Story
//0 const storyStart = "You are in a dark room. There are two doors. Which door do you take? Left or Right?";
//1 const storyRoom1 = "You are in a room with a monster. What do you do? Fight or Run?";
//2 const storyRomm1Fight = "You are fighting the monster. You are dead. Game over.";
//3 const StoryRoom1Run = "You are runing trough the door in front of you. The monster behind you doesn't follow you. You found a treasure chest. You open it and find a lot of gold. You are rich. You win.";
//4 const WrongInput = "Wrong input. Game over.";

//5 const storyRoom2 = "You are in a room with a trap which is narrowing. In front of you are two doors. Which door do you take? Left or Right?";
//6 const StoryRoom2Left = "You can dodge the trap and you are in a room with a treasure chest. You open it and find a lot of gold. You are rich. You win.";
//7 const StoryRoom2Right = "You can't open the door and have no time to dodge the trap. You are dead. Game over";


// Spielregeln


const start = prompt(Array[0]);
if (start == "Left" || start == "left") {
   const action = prompt(Array[1]);
   if (action == "Fight" || action == "fight") {
      alert (Array[2]);
   } else if (action == "Run" || action == "run") {
      alert(Array[3]);
   }
}

if (start == "Right" || start == "right") {
   const action = prompt(Array[5]);
   if (action == "Left" || action == "left") {
      alert(Array[6]);
   } else if (action == "Right" || action == "right") {
      alert(Array[7]);
   }
}

if (start != "Left" && start != "left" && start != "Right" && start != "right") {
   alert(Array[4]);
}