var operatorEnabled = false;
var decimalEnabled = true;
var memory = 0;
function handleNumbers(id){
	if(document.getElementById(id)){    //check the element exists and can be accessed
		var numClicked = document.getElementById(id).value;
		var onScreen = document.getElementById("display").value;
		if(onScreen === 0 || onScreen ==="0"){
			// if number on screen is 0, then set number to be the number clicked.
			document.getElementById("display").value = numClicked;
		}else{
			// otherwise, concatenate the number.
			document.getElementById("display").value += numClicked;
		}
		// after a number is entered, allow entering operator.
		operatorEnabled = true;
	}
}

function clearAll(){

	// reset to initial states.
	document.getElementById("display").value = "0";
	operatorEnabled = false;
	decimalEnabled = true;
	
}

function lastIndexOperator(str){
	var indexToBeReturned = -1;
	if(str.lastIndexOf("+") != -1){
		indexToBeReturned = str.lastIndexOf("+");
	}
	if(str.lastIndexOf("-") > indexToBeReturned){
		indexToBeReturned = str.lastIndexOf("-");
	}
	if(str.lastIndexOf("*") > indexToBeReturned){
		indexToBeReturned = str.lastIndexOf("*");
	}
	if(str.lastIndexOf("/") > indexToBeReturned){
		indexToBeReturned = str.lastIndexOf("/");
	}
	return indexToBeReturned;
}
function clearEntry(){
	var str = document.getElementById("display").value;
	var lastIndex = lastIndexOperator(str);
	if(lastIndex == str.length-1){
		// delete the operator and allow user to enter an operator.
		document.getElementById("display").value = str.substring(0,lastIndex);
		operatneEnabled = true;
		decimalEnabled = false;
	}else if(lastIndex == -1 || lastIndex == 0){
		// if we only have one number left. It could be both positve or negative.
		clearAll();
	}
	else{
		// operator is not the last token, so number is the last token.
		document.getElementById("display").value = str.substring(0,lastIndex+1);
		operatorEnabled = false;
		decimalEnabled = true;
	}
	
}

function isOperator(last){
	if(last == "+" || last == "-" || last == "*" || last == "/"){
		return true;
	}
}

function setState(str){
	if(lastIndexOperator(str) == str.length-1){
		// if the last character is an operator.
		operatorEnabled = false;
	}else{
		operatorEnabled = true;
	}
	if(str.lastIndexOf(".")>lastIndexOperator(str)){
		if(str.lastIndexOf(".") == str.length-1){
			operatorEnabled = false;
		}
		// if decimal point comes after operator.
		decimalEnabled = false;
	}else{
		decimalEnabled = true;	
	}
}
function backSpace(){
	var onScreen = document.getElementById("display").value;
	if(onScreen.length > 1){
	// if the number is longer than 1 digit,take the substring 0 to length-1.
	
	document.getElementById("display").value = onScreen.substring(0,onScreen.length-1);
	setState(document.getElementById("display").value);
	}else{
	// if it is a one-digit number, clear all.
		clearAll();
	}

}


function handleOperators(id){
	if(operatorEnabled){
		// if we can add an operator, then concatenate it to the string appearing on the screen.
		document.getElementById("display").value += id;
		// do not allow another operator, a decimal point can be entered. For example 1+.3 is considered to be valid.
		operatorEnabled = false;
		decimalEnabled = true;
	}
}
function negate(){
	// simply flip the sign.
	var numOnScreen = document.getElementById("display").value;
	document.getElementById("display").value = (-1)*Number(eval(numOnScreen));


}

function handleDecimal(id){
	if(decimalEnabled){
		// if we are allowed to add a decimal point, concatenate it with string on the screen.
		document.getElementById("display").value += id;
		// do not allow another decimal point or an operator since {1..} and {1.+} are not valid.
		decimalEnabled = false;
		operatorEnabled = false;
	}
}

function equals(){
	// evaluate the string.
	document.getElementById("display").value = eval(document.getElementById("display").value);
	if(document.getElementById("display").value.indexOf('.') == -1){
		// if the result has no decimal point, allow adding a decimal point.
		decimalEnabled = true;
	}
}
	//memory part
function memclr(){
	// clear memory
	memory = 0;
	clearAll();
}

function memR(){
	// retreive the value from memory.
	document.getElementById("display").value = memory;
}

function memS(){
	// save the value.
	memory = Number(eval(document.getElementById("display").value));
	clearAll();
}
function memPlus(){
	// add number on screen with value in memory and save the result to memory.
	var temp1 = Number(memory);
	var temp2 = Number(document.getElementById("display").value);
	memory = temp1 + temp2;
	document.getElementById("display").value = memory;
	
}
	
	
	