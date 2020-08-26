// JavaScript Document


// 1 == Zentimeter
// 2 == Yard
// 3 == Fuß
// 4 == Zoll

// globale Variablen

var fromValue;
var toValue;
var sizeValue;
var ergebnis;


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
		var ergebnis = sizeValue;
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Zentimeter"; // Ausgabe
		callerror();
	}

	else if(fromValue == 1 && toValue == 2) {
		var ergebnis = "" + (sizeValue / 91.44);
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Yard"; // Ausgabe
	}

	else if (fromValue == 1 && toValue == 3) {
		var ergebnis = "" + (sizeValue / 30.48);
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").value=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Fuß"; // Ausgabe
	}

	else if (fromValue == 1 && toValue == 4) {
		var ergebnis = "" + (sizeValue / 2.54);
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Zoll"; // Ausgabe
	}

	// Select Yard 

	else if (fromValue == 2 && toValue == 1) {
		var ergebnis = "" + (sizeValue * 91.44);
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Zentimeter"; // Ausgabe
	}

	else if (fromValue == 2 && toValue == 2) {
		var ergebnis = sizeValue;
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Yard"; // Ausgabe
		callerror();
	}

	else if (fromValue == 2 && toValue == 3) {
		var ergebnis = "" + (sizeValue * 3);
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Fuß"; // Ausgabe
	}

	else if (fromValue == 2 && toValue == 4) {
		var ergebnis = "" + (sizeValue * 36);
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Zoll"; // Ausgabe
	}

	// Select Fuß

	else if (fromValue == 3 && toValue == 1) {
		var ergebnis = "" + (sizeValue * 30.48);
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Zentimeter"; // Ausgabe
	}

	else if (fromValue == 3 && toValue == 2) {
		var ergebnis = "" + (sizeValue / 3);
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Yard"; // Ausgabe
	}

	else if (fromValue == 3 && toValue == 3) {
		var ergebnis = sizeValue;
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Fuß"; // Ausgabe
		callerror();
	}

	else if (fromValue == 3 && toValue == 4) {
		var ergebnis = "" + (sizeValue * 12);
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Zoll"; // Ausgabe
	}

	// Select Zoll

	else if (fromValue == 4 && toValue == 1) {
		var ergebnis = "" + (sizeValue * 2.54);
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Zentimeter"; // Ausgabe
	}

	else if (fromValue == 4 && toValue == 2) {
		var ergebnis = "" + (sizeValue / 36);
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Yard"; // Ausgabe
	}

	else if (fromValue == 4 && toValue == 3) {
		var ergebnis = "" + (sizeValue / 12);
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").innerHTML=ergebnis; // Ausgabe
		document.getElementById("sizer").innerHTML = "Fuß"; // Ausgabe
	}

	else if (fromValue == 4 && toValue == 4) {
		var ergebnis = sizeValue;
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