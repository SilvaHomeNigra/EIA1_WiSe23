
let haseElement = document.getElementById('Hase');
let gansElement = document.getElementById('Gans');
let fuchsElement = document.getElementById('Fuchs');

let bodyElement = document.getElementById('body');


// Rückseitentexte für die Tiere
let rueckseitenTexte = [
    "Hey ich bin Hops und ein Hase. Ich mag es sehr gestreichelt zu werden und wenn ich müde bin Kuschel ich mich gerne ins Stroh. Am liebsten esse ich Löwenzahn das hört sich ziemlich lustig an." ,
    "Hallöchen ich bin Gusti Gans. Am liebsten Watschel ich durch die Gegend und spiele mit meinen Freunden. Außerdem kann ich ganz laut schnattern. Weißt du wie das klingt?" , 
    "Servus, ich bin Fredi Fuchs. Ich gehe gerne auf Streifzug durch den Wald. Ich bin vor allem in der nacht unterwegs und kann ganz laut bellen. Hast du das Schoneinmal gehört.",
];

// Funktion Text anzeigen
function textHase() {
    let textBox = document.createElement("p");
    textBox.innerText = rueckseitenTexte[0];
    textBox.id = "textBoxHase"
    haseElement.appendChild(textBox) //appendChild = fügt etwas zusätzlich hinzu (in diesem fall TextBox wird Haseelement hinzugefügt)
}

function textGans() {
    let textBox = document.createElement("p");
    textBox.innerText = rueckseitenTexte[1];
    textBox.id = "textBoxGans"
    gansElement.appendChild(textBox) 
}

function textFuchs() {
    let textBox = document.createElement("p");
    textBox.innerText = rueckseitenTexte[2];
    textBox.id = "textBoxFuchs"
    fuchsElement.appendChild(textBox) 
}
// Funktion textHase wird aufgerufen
textHase();
textGans();
textFuchs ();


// Funktion text wird nach Click angezeigt

    haseElement.addEventListener ('click', function() {
        //lässt andere Tiere wieder erscheinen
        document.getElementById("textBoxHase").style.display = "block";
        document.getElementById("textBoxGans").style.display = "none";
        document.getElementById("textBoxFuchs").style.display = "none";
        // blendet angeclicktes Tier aus
        document.getElementById("haseBild").style.display = "none";
        // blendet Tier wieder ein nachdem anderes angeclickt wird
        document.getElementById("gansBild").style.display = "block";
        document.getElementById("fuchsBild").style.display = "block";
       
    })
   
    gansElement.addEventListener ('click', function() {
        document.getElementById("textBoxGans").style.display = "block";
        document.getElementById("textBoxHase").style.display = "none";
        document.getElementById("textBoxFuchs").style.display = "none";

        document.getElementById("gansBild").style.display = "none";
        
        document.getElementById("haseBild").style.display = "block";
        document.getElementById("fuchsBild").style.display = "block";
    })

    fuchsElement.addEventListener ('click', function() {
        document.getElementById("textBoxFuchs").style.display = "block";
        document.getElementById("textBoxHase").style.display = "none";
        document.getElementById("textBoxGans").style.display = "none";

        document.getElementById("fuchsBild").style.display = "none";
        
        document.getElementById("haseBild").style.display = "block";
        document.getElementById("gansBild").style.display = "block";
    })



// Seite wird neu geladen wenn in den Hintergrund geclickt wird
function reloadIfBackground(event) {
    // Überprüfen, ob das geklickte Element der Body ist (nicht die Elemente im Body)
    if (event.target === document.body) {
      location.reload(); // Seite neu laden, wenn Hintergrund geklickt wird
    }
  }





let haseElementAudio = document.getElementById('Hase');
let gansElementAudio = document.getElementById('Gans');
let fuchsElementAudio = document.getElementById('Fuchs');     

// Funktion Audio abspielen
function audioHase() {
         // Erstelle ein Audio-Objekt
         let audio = new Audio('haseAudio');
         // Starte die Wiedergabe
         audio.play();
         
}
function audioGans() {
    // Erstelle ein Audio-Objekt
    let audio = new Audio('audio/audioGans.mp3');
    // Starte die Wiedergabe
    audio.play();
    
}

function audioFuchs() {
    // Erstelle ein Audio-Objekt
    let audio = new Audio("audio/audioFuchs.mp3");
    // Starte die Wiedergabe
    audio.play();
    
}

//Funktion audioHase wird aufgerufen
audioHase() 
audioGans() 
audioFuchs() 

// Funktion Handle Touch (12, 27, 33)