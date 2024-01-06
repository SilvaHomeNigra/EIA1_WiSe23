
let haseElement = document.getElementById('Hase').innerHTML;
let gansElement = document.getElementById('Gans').innerHTML;
let fuchsElement = document.getElementById('Fuchs').innerHTML;

// Rückseitentexte für die Tiere
let rueckseitenTexte = [
    "Hey ich bin Hops und ein Hase. Ich mag es sehr gestreichelt zu werden und wenn ich müde bin Kuschel ich mich gerne ins Stroh. Am liebsten esse ich Löwenzahn das hört sich ziemlich lustig an." ,
    "Hallöchen ich bin Gusti Gans. Am liebsten Watschel ich durch die Gegend und spiele mit meinen Freunden. Außerdem kann ich ganz laut schnattern. Weißt du wie das klingt?" , 
    "Servus, ich bin Fredi Fuchs. Ich gehe gerne auf Streifzug durch den Wald. Ich bin vor allem in der nacht unterwegs und kann ganz laut bellen. Hast du das Schoneinmal gehört."
];

// Audiodateien für die Tiere
let audioDateien = [
  "pfad/zur/hase_audio.mp3",
  "pfad/zur/gans_audio.mp3",
  "pfad/zur/fuchs_audio.mp3" 
];

// Funktion, die auf Klick reagiert
haseElement.addEventListener('click', function() {
    AnimalContent(0);
  });
  
  gansElement.addEventListener('click', function() {
    AnimalContent(1);
  });
  
  fuchsElement.addEventListener('click', function() {
    AnimalContent(2);
  });




function AnimalContent = 