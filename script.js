const easy = ["Journey", "Thunder", "Lantern", "Bicycle", "Whisper", "Diamond", "Courage", "Glacier", "Picture", "Harvest", "Firefly", "Mountain", "Cactus", "Library", "Fortune", "Freedom", "Crimson", "Giraffe", "Rainbow", "Parasol", "Compass", "Galaxy", "Emerald", "Sandbox", "Lantern", "Meadow", "Phoenix", "Notebook", "Serpent", "Wintery", "Justice", "Plummet", "Vortex", "Blossom", "Spectra", "Harmony", "Journey", "Timber", "Fortune", "Miracle"]
let wordSet = []
let word;
let difficulty;

function randomizeWord(){
    word = wordSet[Math.floor(Math.random() * (wordSet.length))]
    for (let i = 0; i < word.length; i++){
        var shuffled = word.split('').sort(function(){return 0.5-Math.random()}).join('');
    }

    document.getElementById("wordDisplay").innerHTML = shuffled;
    document.getElementById("solution").innerHTML = word;
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