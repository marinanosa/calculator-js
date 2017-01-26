// maak een functie voor het invoeren van een knop
var inputList = [];
var numberBuilder = "";

//verwerk de user input
function addNumber(number) {
	if (number >= 0 || number <= 9) {
		numberBuilder += number;
		console.log(numberBuilder);
	}

// Ondersteuning van decimalen
	else if (number === '.') {
		//Controleren of numberBuilder iets bevat, want mag niet starten met een punt
		if (numberBuilder !== "") {
			//zoeken of er al een punt bestaat in de numberBuilder
			if (numberBuilder.indexOf(".") === -1) {
				// Er is geen punt, dus toevoegen!
				numberBuilder += number;
				console.log(numberBuilder);
			}
		}
	}
	else {
		if (numberBuilder !== "") {
			inputList.push(numberBuilder);
			numberBuilder = "";
		}
		inputList.push(number);
		console.log(inputList);
	}
	document.getElementById("screen").innerHTML = inputList.join("")+numberBuilder;
}

function emptyScreen(){
	document.getElementById("screen").innerHTML = ""; 
	numberBuilder = "";
	inputList = [""];

}

// Als er al een operator staat, en je klikt op een nieuwe operator, VERVANGT hij de operator die er al staat.

				

// Nu de operators -----------------------------------------------------------------------------------------------------------

