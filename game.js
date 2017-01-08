var wordChoice = ["INCEPTION", "THE GODFATHER", "THE MATRIX", "FORREST GUMP", "12 ANGRY MEN", "PULP FICTION", "THE LORD OF THE RINGS", "FIGHT CLUB"];

var newWord = wordChoice[Math.floor(Math.random() * wordChoice.length)];



module.exports = function()  {
  return {

    getRandomWord: function() {
    	
       return newWord;
    }

 };
};