//Randon Number Generator for Computer
//If Statements for results
// 1 = rock, 2 = paper, 3 = scissors 
//Button to refresh page
//User should have 3 turns - Can use a For Loop here
//Computer should stop if User win - in other words break out of Loop - Need to track wins + add a if Statement
//
 
			var wins = 0;//track wins during game - loop kept breaking so tested moving
		
    function playGame() {
			event.preventDefault();
			for (var i = 0; i < 3; i++) { 
            var user = parseInt(document.getElementById("option").value);
            var computer = getComputer();
            var resultText = "";
			//var wins = 0;//track wins during game
			
			
			//Ensure user choses rock paper or scissors
			var userOption = document.getElementById("option");
			if (userOption.value === '0') {
			alert("Please select an option.");
			return;//breaks/stops function
			}

            // Determine computer's choice
            var computerChoiceText;
            if (computer === 1) {
                computerChoiceText = "Rock";
            } else if (computer === 2) {
                computerChoiceText = "Paper";
            } else if (computer === 3) {
                computerChoiceText = "Scissors";
            } else {
                computerChoiceText = "---";
            }

            document.getElementById("computerChoice").innerText = computerChoiceText;

            if ((user == 1 && computer == 3) || (user == 2 && computer == 1) || (user == 3 && computer == 2)) {
                resultText = "You have won";
                wins++;
            } else if ((computer == 1 && user == 3) || (computer == 2 && user == 1) || (computer == 3 && user == 2)) {
                resultText = "You have lost";
            } else if ((computer == 1 && user == 1) || (computer == 2 && user == 2) || (computer == 3 && user == 3)) {
                resultText = "This game was a draw";
            }

            document.getElementById("result").innerText = resultText;
            document.getElementById("roundCount").innerText = "The game ended in Round " + (i + 1);
			
			console.log("Round:", (i + 1), "Wins:", wins);

            if (wins > 0) {
                break; // Exit loop if the user wins
            } //- removed, loop kept breaking after first run
			

			
			// Check if it's the last round and the user hasn't won yet
			if (i === 2 && wins === 0) {
            alert("Game Over! You lost all rounds.");
            document.getElementById("option").disabled = true; // Disable selection after game over
            return; // Exit the function
			}
    
        }

        var gameResult = wins > 0 ? "You won" : "You lost"; //https://www.w3schools.com/js/js_comparisons.asp terenaryoperator
        alert("Game Over! " + gameResult + " " + wins + " out of 3 rounds.");
        document.getElementById("option").disabled = true;
    }

    function getComputer() {
        return Math.floor(Math.random() * 3) + 1;
    }

    function playAgain() {
        location.reload();
    }


