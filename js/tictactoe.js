var playerSquares = [];
var computerSquares = [];

/*Need to use the code in the comment below to change the color of the
winning squares.  Also need to do same for opponent winning squares.
When player wins, there is a delay before "You Win" appears.
Then, this message does not go away.
/*
square = document.getElementById("7");
			square.className = "win";*/

function PlayerChoice(squareToMarkID)
{
	if(document.getElementById(squareToMarkID)){
		var squareToMark = document.getElementById(squareToMarkID);
	}
	if(squareToMark.value==""){   //see if display property is set to none
                squareToMark.value="X";
                squareToMark.className = "pressed";
                squareToMark.style.display="X";
		playerSquares.push(squareToMarkID);
	}
	else{
		return true;
	}
	if (CheckForWinner(playerSquares, true)){
		DisplayWinner(true);
		return true;	
	}
	squareToMark.style.display="X";
	if(playerSquares.length === 5){
		DisplayWinner();
	}
	setTimeout(function() {ComputerChoice();},250);
}

function ComputerChoice()
{
	squareToMarkID = Math.floor(Math.random() * (9 - 1 + 1)) + 1; //lol
	
        var squareToMark = document.getElementById(squareToMarkID);
       	//Some Logic
	//Mark Square with O and make markedbyComputer
        if(squareToMark.value==""){   //see if display property is set to none
                squareToMark.value="O";
                squareToMark.className = "pressed";
                squareToMark.style.display="O";
                computerSquares.push(squareToMarkID);
        }
	else if(squareToMark.value != ""){
		ComputerChoice();
	}
	if (CheckForWinner(computerSquares, false)){
		DisplayWinner(false);
		return false;
	}
	if(computerSquares.length == 5){
		DisplayWinner();
	}
	return true;
	//else {ComputerChoice();} //not sure if needed
	

	//Check For Winner With ComputerSquares
}

function CheckForWinner(thisSideSquares, bool){
	if (squaresAreMarkedByThisSide(thisSideSquares,["1","2","3"])){	
		MarkSquares(["1","2","3"], bool);
		return true;
	}
        if (squaresAreMarkedByThisSide(thisSideSquares,["4","5","6"])){
		MarkSquares(["4","5","6"], bool);
		return true;
        }
        if (squaresAreMarkedByThisSide(thisSideSquares,["7","8","9"])){
		MarkSquares(["7","8","9"], bool);
                return true;
        }
        if (squaresAreMarkedByThisSide(thisSideSquares,["1","4","7"])){
		MarkSquares(["1","4","7"], bool);
		return true;
        }
        if (squaresAreMarkedByThisSide(thisSideSquares,["2","5","8"])){
		MarkSquares(["2","5","8"], bool);
		return true;
        }
        if (squaresAreMarkedByThisSide(thisSideSquares,["3","6","9"])){
		MarkSquares(["3","6","9"], bool);
		return true;
        }
        if (squaresAreMarkedByThisSide(thisSideSquares,["1","5","9"])){
		MarkSquares(["1","5","9"], bool);
		return true;
        }
        if (squaresAreMarkedByThisSide(thisSideSquares,["3","5","7"])){
		MarkSquares(["3","5","7"], bool);
		return true;
        }
	return false;
}

function MarkSquares(squares, bool){
	for (var i=0, l=squares.length; i < l; i++){
		var square = document.getElementById(squares[i]);
		if(bool){
			square.className = "win";
		}
		else if(bool == false){
			square.className = "loss";
		}
	}
	
}

function squaresAreMarkedByThisSide(thisSideSquares,squaresToCheck)
{
	var hasFirst, hasSecond, hasThird;
	for (var i=0; i < playerSquares.length; i++){
		if (thisSideSquares[i]==squaresToCheck[0]){
			hasFirst = true;
		}	
                if (thisSideSquares[i]==squaresToCheck[1]){
                        hasSecond = true;
                }
                if (thisSideSquares[i]==squaresToCheck[2]){
                        hasThird = true;
                }
	}
	return (hasFirst && hasSecond && hasThird);
}

function DisplayWinner(bool){
	//Clear the playing area for the current game (ragequit)
	if (bool == true){
		document.getElementById("winbox").value = "You Win!";
		document.getElementById("winCol").value ++;
		setTimeout(function() {refreshGame("game");},1250);
	}
	else if (bool == false){
		document.getElementById("winbox").value = "You Lose..";
		document.getElementById("lossCol").value ++;
		setTimeout(function() {refreshGame("game");},1250);
	}
	else{
		document.getElementById("winbox").value = "Draw";
		setTimeout(function() {refreshGame("game");},1250);
	}
}

function refreshGame(id){
	playerSquares = [];
	computerSquares = [];
    	
	for (var i=1; i<=9; i++){
		document.getElementById(i).value = "";
		document.getElementById(i).className = "square";
	}
	document.getElementById("winbox").value = "";
}

function resetScore(){
	
	document.getElementById("winCol").value = 0;
	document.getElementById("lossCol").value = 0;
		
}
