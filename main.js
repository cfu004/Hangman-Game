var prompt = require('prompt');
var hangmanCurrWord = require('./word.js');
var hangmanGameWord = require('./game.js')();


var properties = [
  {
    name: 'enteredLetter', 
    //Only takes Uppercase letters, Space and numbers
    validator: /^[A-Z,\s,0-9]$/,

    warning: '****** Please enter only Uppercase letters, numbers, and Space.******',
    message: '****** TOP 50 MOVIES. HINT--IMDB-- ENTER UPPERCASE A - Z, Space, 0 - 9 ONLY******'
  }
];


hangmanGame = {

  guessesRemaining : 10, 

  randomWord : null, 

startGame : function() {
    
    this.randomWord = new hangmanCurrWord(hangmanGameWord.getRandomWord());

    this.randomWord.getLetterObj();

    this.askLetter();    
    },



  askLetter : function()  {

    var local = this;

    prompt.get(properties, function(err, result) {
      var cntOfLetter = local.randomWord.letterFound(result.enteredLetter);

      if (cntOfLetter == 0) {
        console.log('****** Wrong guess!******');
        local.guessesRemaining--;
      } else  {
        
        console.log('****** Correct guess!******');

        if ( local.randomWord.isWordFound() ){
          
          console.log('****** Congrats, you Won!!!******');
          return;

        }
      };
      
      console.log('                                  ');
      console.log('----------------------------------');
      console.log('                                  ');
      console.log('Guesses remaining: ' + local.guessesRemaining );
      
      console.log('                                  ');
      console.log('----------------------------------');
      console.log('                                  ');
      console.log('****** '+ local.randomWord.getWordToDisplay()+ ' ******');
      console.log('                                  ');
      
      if (( local.guessesRemaining > 0 ) && ( local.randomWord.found == false )){
        
        local.askLetter();

      } else if ( local.guessesRemaining == 0 )  {
        
        console.log('****** Game Over~ The answer was :  ******', local.randomWord.word.join(''));

      } 
    });
  }
};



hangmanGame.startGame();