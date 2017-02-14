// maak een functie voor het invoeren van een knop
var inputList = [];
var numberBuilder = "";

//verwerk de user input
function addNumber(number) {
	if (number >= 0 || number <= 9) {
		numberBuilder += number;
	}

// Ondersteuning van decimalen
	else if (number === '.') {
		//Controleren of numberBuilder iets bevat, want mag niet starten met een punt
		if (numberBuilder !== "") {
			//zoeken of er al een punt bestaat in de numberBuilder
			if (numberBuilder.indexOf(".") === -1) {
				// Er is geen punt, dus toevoegen!
				numberBuilder += number;
			}
		}
	}

	// Ondersteuning van operators
	// Je mag pas een operator pushen als numberBuilder niet leeg is, of niet eindigt op een "."
	else {
		if (numberBuilder !== "") {
			inputList.push(numberBuilder);
			numberBuilder = "";
		}
		// Als er al een operator staat, en je klikt op een nieuwe operator, VERVANGT hij de operator die er al staat.
		if (inputList.length > 0) {
			var lastInput = inputList[inputList.length -1];
			if (lastInput == "+" || lastInput == "-" || lastInput == "*" || lastInput == "/") {
				inputList.pop();
			}

			inputList.push(number);
		}	
		// zoeken of de laatste input al een operator is.
	}
	document.getElementById("screen").innerHTML = inputList.join("")+numberBuilder;
}

function emptyScreen(){
	document.getElementById("screen").innerHTML = ""; 
	numberBuilder = "";
	inputList = [""];
}

function calculate() {
	// lineair door de array lopen?
	// for-loop?
	// voorrangsregels nog negeren, komt later, eventueel.
}