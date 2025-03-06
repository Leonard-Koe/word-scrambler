const easy = ["Hello", "Test", "Flower", "Dog", "Cat"]
let wordSet = []
let word;
let difficulty;

function randomizeWord(){
    word = wordSet[Math.floor(Math.random() * (wordSet.length))]
    document.getElementById("wordDisplay").innerHTML = word;
}



function startGame(words){
    document.getElementById("gameStartButton").style.visibility = "hidden";
    wordSet = words;
    randomizeWord()
}

function guessFunction(){
    const form = document.getElementById("game");
    const submitter = document.getElementById("guessButton")

    const formData = new FormData(form, submitter);
    var guessValue = formData.get("guessValue")

    if (guessValue === word){
        console.log("Won the game!");
        document.getElementById("wrongMessage").style.visibility = "hidden"
        startGame(wordSet)
    } else{
        document.getElementById("wrongMessage").style.visibility = "visible"
    }
}