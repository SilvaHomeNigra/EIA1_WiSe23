document.getElementById('startButton').addEventListener('click', function () {
    window.location.href = 'textadventure.html';
})

stories = [
"Du hast Antwort a. gewählt", 
"Du hast Antwort b. gewählt"
]

const input = document.querySelector ("Eingabe")
const output = document. getElementById ("content")

input.addEventListener("keydown", function (event) { 
    if (event.key == "Enter"){
        if (input.valeu == "a") {
            output.innerHTML = stories [0]
        if (input.valeu == "b")   {
            output.innerHTML = stories [1] 
        }
    }
}
})