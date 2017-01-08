var Letter = require('./letter.js');

var Word = function(randomWord) {

  this.word = randomWord.split('');
  this.letters = [];
  this.found = false;

  this.getLetterObj = function() {

    var currentLetters = []; 

    this.word.forEach(function(a) {
      currentLetters.push(new Letter(a));
    });

    this.letters = currentLetters;

  };
  
  
  this.isWordFound = function() {
    
    this.found = this.letters.every(currentLetter => currentLetter.characterAppear);
    return this.found;

  };




  this.letterFound = function(userGuessedLetter) {
    var countOfLetterFnd = 0;

    this.letters.forEach( function(b) {
      if ( b.character == userGuessedLetter )  {
        b.characterAppear = true;
        countOfLetterFnd++;
      }
    });

    return countOfLetterFnd;
  };


  this.getWordToDisplay = function() {
    var wordToDisplay = '';

    this.letters.forEach( function(b) {
      wordToDisplay += b.letterDisplay();
    });

    return wordToDisplay;
  };
};

module.exports = Word;