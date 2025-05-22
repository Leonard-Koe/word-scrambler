const easy = ["Apple", "Banana", "Orange", "Table", "Chair", "Window", "Door", "House", "Garden", "Flower",   
"Tree", "Water", "River", "Sunset", "Cloud", "Happy", "Smile", "Friend", "Family", "School",  
"Pencil", "Book", "Paper", "Music", "Dance", "Jump", "Laugh", "Bread", "Cheese", "Pizza",  
"Dog", "Cat", "Bird", "Fish", "Car", "Bus", "Train", "Ball", "Game", "Clock"]

const medium = ["Puzzle", "Winter", "Summer", "Autumn", "Spring", "Bottle", "Rocket", "Travel", "Planet", "Castle",  
"Bridge", "Thunder", "Lantern", "Journey", "Candle", "Breeze", "Guitar", "Painter", "Garden", "Meadow",  
"Library", "Fortune", "Diamond", "Whisper", "Harvest", "Freedom", "Luggage", "Mailbox", "Serpent", "Cactus",  
"Parasol", "Firefly", "Timber", "Crimson", "Notebook", "Harmony", "Festival", "Lantern", "Giraffe", "Miracle"]

const hard = ["Obscure", "Zephyr", "Labyrinth", "Cryptic", "Nebulous", "Quixotic", "Ephemeral", "Melancholy", "Ubiquitous", "Euphoria",  
"Serendipity", "Chrysanthemum", "Obfuscate", "Abyss", "Eloquent", "Perspicacious", "Sycophant", "Esoteric", "Conundrum", "Pernicious",  
"Obsequious", "Lugubrious", "Ineffable", "Eccentric", "Mellifluous", "Surreptitious", "Propensity", "Redolent", "Cacophony", "Juxtaposition",  
"Paradox", "Incandescent", "Recalcitrant", "Discombobulate", "Grandiloquent", "Resplendent", "Idiosyncrasy", "Magnanimous", "Quintessential", "Preposterous", "penis"]

let wordSet = easy;
let word;
let difficulty;
let score = 0;
let health = 3;


function randomizeWord(){
    word = wordSet[Math.floor(Math.random() * (wordSet.length))]
    for (let i = 0; i < word.length; i++){
        var shuffled = word.split('').sort(function(){return 0.5-Math.random()}).join('');
    }
    document.getElementById("wordDisplay").innerHTML = shuffled;
    document.getElementById("solution").innerHTML = word;
}

function chooseDifficulty(diff){
    difficulty = diff;
    if (difficulty === "easy"){
        wordSet = easy;
        document.getElementById("easy").style.color = "white"
        document.getElementById("medium").style.color = "black"
        document.getElementById("hard").style.color = "black"
    }
    if (difficulty === "medium"){
        wordSet = medium;
        document.getElementById("easy").style.color = "black"
        document.getElementById("medium").style.color = "white"
        document.getElementById("hard").style.color = "black"
    }
    if (difficulty === "hard"){
        wordSet = hard;
        document.getElementById("easy").style.color = "black"
        document.getElementById("medium").style.color = "black"
        document.getElementById("hard").style.color = "white"
    }
}


function startGame(){
    document.getElementById("gameStartButton").style.visibility = "hidden";
    document.getElementById("gameStartButton").style.margin = "0px";
    document.getElementById("scoreDisplay").style.visibility = "visible";
    document.getElementById("gameStartButton").style.height = "0px";
    document.getElementById("gameStartButton").style.width = "0px";
    document.getElementById("wordDisplay").style.border = "3px solid black";
    randomizeWord()
}

function guessFunction(){
    const form = document.getElementById("game");
    const submitter = document.getElementById("guessButton")

    const formData = new FormData(form, submitter);
    var guessValue = formData.get("guessValue")

    if (guessValue === word){
        score++;
        document.getElementById("scoreDisplay").innerHTML = "Score: " + score;
        document.getElementById("wrongMessage").style.visibility = "hidden"
        startGame(wordSet)
    } else{
        document.getElementById("wrongMessage").style.visibility = "visible"
        health--;
        console.log(health);
        document.getElementById("health").value = health;
        if (health<=0){
            window.location.href = "lostScreen.html";
        }
    }
    document.getElementById("game").reset();
}