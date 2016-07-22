var hangmanWords = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];

// declared variables

var randomNumber = Math.floor(Math.random() * 100);
var randomWord = hangmanWords[randomNumber];
var underscoreCount = randomWord.length;
var underscoreArr = [];
var counter = randomWord.length +3;
var numberTest = 0;
var lettersGuessedArr = [];


var lettersGuessedClass = document.querySelector('.letters-guessed');
var li = document.getElementsByClassName('tester');
var textValue = document.querySelector('.text-value');
var attemptTitle = document.querySelector('.attempt-title');
var hangmanWordClass = document.querySelector('.hangman-word');
var hangmanLettersClass = document.querySelector('.hangman-letters');

// actions

attemptTitle.innerHTML = "You have this many attempts left: " + counter;
console.log(randomWord);

function setGuess(guess) {
  personGuess = guess;
}

for (i=0;i<underscoreCount;i+=1) {
  underscoreArr.push("_ ");
  underscoreArr.join(" ");
  var underscoreArrString = underscoreArr.toString();
  var underscoreArrEdited = underscoreArrString.replace(/,/g," ");
  hangmanLettersClass.innerHTML = underscoreArrEdited;
}

function pushGuess () {
      lettersGuessedArr.push(personGuess);
      var lettersGuessedArrString = lettersGuessedArr.toString();
      var lettersGuessedArrEdited = lettersGuessedArrString.replace(/,/g," ");
      lettersGuessedClass.innerHTML = lettersGuessedArrEdited;
}

function checkGuess() {
  for (var i=0;i<randomWord.length;i+=1) {
    if (personGuess === randomWord[i]) {
        console.log(personGuess);
        numberTest = i;
        li[i].textContent = randomWord[i];
        // i += 20;
        textValue.value= "";
    } else if ((randomWord.length - 1) > i ) {
        console.log("works");
    } else {
        pushGuess();
        counter -= 1;
        attemptTitle.innerHTML = "You have made this many attempts: " + counter;
        textValue.value= "";
    }
  }
};