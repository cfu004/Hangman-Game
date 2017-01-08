var Letter = function(guessedLetter) {
  
  this.character = guessedLetter;
  this.characterAppear = false;
  this.letterDisplay = function() {
    return (this.characterAppear) ? this.character : " _ ";
  };

};

module.exports = Letter;

