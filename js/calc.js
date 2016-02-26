
var op1 = 0;
var op2 = 0;
var mem = 0;

function display(id){
	
	var display = document.getElementById("display").value;
	if(document.getElementById(id)){    //check the element exists and can be accessed
		var num = document.getElementById(id).value;
		if (display == 0){
			document.getElementById("display").value = num;
		}
		else{
			document.getElementById("display").value = display.concat(num);
		}
	}
}

function clearAll(){
	
	document.getElementById("display").value = "0";
		
}

/*       Arithmetic     */

function plus(){
	var display = document.getElementById("display").value;
	op1 = document.getElementById("display").value;
	document.getElementById("display").value = 0;
	alert(op1);
}

function minus(){
	alert(op1);
}

function multiply(){}

function divide(){}
