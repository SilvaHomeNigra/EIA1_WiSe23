function getNameAndDisplayPrompt() {
    var name = prompt("Gib deinen Namen ein:");
    displayPrompt(name);
}

function displayPrompt(name) {
    if (name !== null && name !== "") {
        alert("Hallo, " + name + "! Willkommen.");
        startStory(); // Beginne die Geschichte, nachdem der Name abgefragt wurde
    } else {
        alert("Du hast keinen Namen eingegeben. Das Spiel startet nicht.");
    }
}

function startStory() {
    const storyStart = "Du befindest dich in einem dunklen Raum. Es gibt zwei Türen. Welche Tür wählst du? Links oder Rechts?";
    const storyRoom1 = "Du befindest dich in einem Raum mit einem Monster. Was tust du? Kämpfen oder Wegrennen?";
    const storyRoom1Fight = "Du kämpfst gegen das Monster. Du bist tot. Spiel vorbei.";
    const StoryRoom1Run = "Du rennst durch die Tür vor dir. Das Monster folgt dir nicht. Du findest eine Schatztruhe. Du öffnest sie und findest eine Menge Gold. Du bist reich. Du gewinnst.";
    const WrongInput = "Falsche Eingabe. Spiel vorbei.";

    const storyRoom2 = "Du befindest dich in einem Raum mit einer sich verengenden Falle. Vor dir sind zwei Türen. Welche Tür wählst du? Links oder Rechts?";
    const StoryRoom2Left = "Du kannst der Falle ausweichen und bist in einem Raum mit einer Schatztruhe. Du öffnest sie und findest eine Menge Gold. Du bist reich. Du gewinnst.";
    const StoryRoom2Right = "Du kannst die Tür nicht öffnen und hast keine Zeit, der Falle auszuweichen. Du bist tot. Spiel vorbei.";

    const start = prompt(storyStart);

    if (start.toLowerCase() === "left") {
        const action = prompt(storyRoom1);
        if (action.toLowerCase() === "fight") {
            alert(storyRoom1Fight);
        } else if (action.toLowerCase() === "run") {
            alert(StoryRoom1Run);
        } else {
            alert(WrongInput);
        }
    } else if (start.toLowerCase() === "right") {
        const action = prompt(storyRoom2);
        if (action.toLowerCase() === "left") {
            alert(StoryRoom2Left);
        } else if (action.toLowerCase() === "right") {
            alert(StoryRoom2Right);
        } else {
            alert(WrongInput);
        }
    } else {
        alert(WrongInput);
    }
}

// Spiel starten, indem der Name abgefragt wird
getNameAndDisplayPrompt();
