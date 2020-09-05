// JavaScript Document


// 1 == Zentimeter
// 2 == Yard
// 3 == Fuß
// 4 == Zoll

// Globale Variablen

var fromValue;
var toValue;
var sizeValue;
var ergebnis;


// Falls das Ergebnis NaN ist 
function proof(){
	if(isNaN(ergebnis)){
		hint.classList.add("hint");
		hint.innerHTML = "Bitte Zahl eintragen!";
		ergebnis = "Bitte Zahl eintragen!";

		// Fehlermeldung enfernen
		document.getElementById("input").addEventListener("click", function() {
			hint.classList.remove("hint");
			hint.innerHTML = "";
		});
	}
}


// Falls Einheiten gleich sind
function callerror () {
	var hint = document.getElementById("hint");

	hint.classList.add("hint");
	hint.innerHTML = "Ausgangseinheit entspricht der gewählten Umrechnungseinheit.";

	document.getElementById("from").addEventListener("click", function() {
		hint.classList.remove("hint");
		hint.innerHTML = "";
	});

	document.getElementById("to").addEventListener("click", function() {
		hint.classList.remove("hint");
		hint.innerHTML = "";
	});

}

// Call Calculator Function

document.getElementById("action").addEventListener("click", function(){
	calculate();
});

// Calculator Function

function calculate(){
	// Einheiten und Wert weden aus dem HTML "gelesen"
	fromValue = document.getElementById("from").value; // Einheit "von"
	toValue = document.getElementById("to").value;	// Einheit "nach"
	sizeValue = document.getElementById("input").value;	// Wert

	// ersetzt , durch .
	sizeValue = sizeValue.replace(",", ".");

	// Select Zentimeter

	if (fromValue == 1 && toValue == 1) {
		ergebnis = sizeValue;
		proof();
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Zentimeter"; // Ausgabe
		callerror();
	}

	else if(fromValue == 1 && toValue == 2) {
		ergebnis = "" + (sizeValue / 91.44);
		proof();
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Yard"; // Ausgabe
	}

	else if (fromValue == 1 && toValue == 3) {
		ergebnis = "" + (sizeValue / 30.48);
		proof();
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").value=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Fuß"; // Ausgabe
	}

	else if (fromValue == 1 && toValue == 4) {
		ergebnis = "" + (sizeValue / 2.54);
		proof();
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Zoll"; // Ausgabe
	}

	// Select Yard 

	else if (fromValue == 2 && toValue == 1) {
		ergebnis = "" + (sizeValue * 91.44);
		proof();
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Zentimeter"; // Ausgabe
	}

	else if (fromValue == 2 && toValue == 2) {
		ergebnis = sizeValue;
		proof();
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Yard"; // Ausgabe
		callerror();
	}

	else if (fromValue == 2 && toValue == 3) {
		ergebnis = "" + (sizeValue * 3);
		proof();
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Fuß"; // Ausgabe
	}

	else if (fromValue == 2 && toValue == 4) {
		ergebnis = "" + (sizeValue * 36);
		proof();
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Zoll"; // Ausgabe
	}

	// Select Fuß

	else if (fromValue == 3 && toValue == 1) {
		ergebnis = "" + (sizeValue * 30.48);
		proof();
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Zentimeter"; // Ausgabe
	}

	else if (fromValue == 3 && toValue == 2) {
		ergebnis = "" + (sizeValue / 3);
		proof();
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Yard"; // Ausgabe
	}

	else if (fromValue == 3 && toValue == 3) {
		ergebnis = sizeValue;
		proof();
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Fuß"; // Ausgabe
		callerror();
	}

	else if (fromValue == 3 && toValue == 4) {
		ergebnis = "" + (sizeValue * 12);
		proof();
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Zoll"; // Ausgabe
	}

	// Select Zoll

	else if (fromValue == 4 && toValue == 1) {
		ergebnis = "" + (sizeValue * 2.54);
		proof();
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Zentimeter"; // Ausgabe
	}

	else if (fromValue == 4 && toValue == 2) {
		ergebnis = "" + (sizeValue / 36);
		proof();
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Yard"; // Ausgabe
	}

	else if (fromValue == 4 && toValue == 3) {
		ergebnis = "" + (sizeValue / 12);
		proof();
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Fuß"; // Ausgabe
	}

	else if (fromValue == 4 && toValue == 4) {
		ergebnis = sizeValue;
		proof();
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Zoll"; // Ausgabe
		callerror();
	}

	// Wenn was anderes ist

	else {
		alert("Hier ist etwas schiefgelaufen");
	}

}