document.getElementById('startButton').addEventListener('click', function () {
    window.location.href = 'textadventure.html';
})

stories = [
"Du hast Antwort a. gewählt", 
"Du hast Antwort b. gewählt"
]

const input = document.getElementById ("eingabe")
const output = document. querySelector (".content")

input.addEventListener("keydown", function (event) { 
    if (event.key == "Enter"){
        if (input.value == "a") {
            output.innerHTML = stories [0]
        if (input.value == "b")   {
            output.innerHTML = stories [1] 
        }
    }
}
})

