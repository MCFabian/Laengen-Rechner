// JavaScript Document


// 1 == Zentimeter
// 2 == Yard
// 3 == Fuß
// 4 == Zoll

var fromValue;
var toValue;
var sizeValue;
var ergebnis;

function checkvalue() {
/* 	if(isNaN(sizeValue)) {
		alert("Keine Zahl");
	}  */

	if (ergebnis <= 0) {
		alert("Keine zahl");
	}

	else {
		
	}
}

function calculate(){
	// Einheiten und Wert weden aus dem HTML "gelesen"
	fromValue = document.getElementById("from").value; // Einheit "von"
	toValue = document.getElementById("to").value;	// Einheit "nach"
	sizeValue = document.getElementById("input").value;	// Wert


	sizeValue = sizeValue.replace(",", ".");

	// Select Zentimeter

	if (fromValue == 1 && toValue == 1) {
		var ergebnis = sizeValue;
		document.getElementById("output").value=ergebnis; // Ausgabe
		alert("Fehler");
	}

	else if(fromValue == 1 && toValue == 2) {
		var ergebnis = "" + (sizeValue / 91.44);
		checkvalue();
		ergebnis = ergebnis.replace(".", ",");
		document.getElementById("output").value=ergebnis; // Ausgabe

	}

	else if (fromValue == 1 && toValue == 3) {
		var ergebnis = "" + (sizeValue / 30.48);
		document.getElementById("output").value=ergebnis; // Ausgabe
	}

	else if (fromValue == 1 && toValue == 4) {
		var ergebnis = "" + (sizeValue / 2.54);
		document.getElementById("output").value=ergebnis; // Ausgabe
	}

	// Select Yard 

	else if (fromValue == 2 && toValue == 1) {
		var ergebnis = "" + (sizeValue * 91.44);
		document.getElementById("output").value=ergebnis; // Ausgabe
	}

	else if (fromValue == 2 && toValue == 2) {
		var ergebnis = sizeValue;
		document.getElementById("output").value=ergebnis; // Ausgabe
		alert("Fehler");
	}

	else if (fromValue == 2 && toValue == 3) {
		var ergebnis = "" + (sizeValue * 3);
		document.getElementById("output").value=ergebnis; // Ausgabe
	}

	else if (fromValue == 2 && toValue == 4) {
		var ergebnis = "" + (sizeValue * 36);
		document.getElementById("output").value=ergebnis; // Ausgabe
	}

	// Select Fuß

	else if (fromValue == 3 && toValue == 1) {
		var ergebnis = "" + (sizeValue * 30.48);
		document.getElementById("output").value=ergebnis; // Ausgabe
	}

	else if (fromValue == 3 && toValue == 2) {
		var ergebnis = "" + (sizeValue / 3);
		document.getElementById("output").value=ergebnis; // Ausgabe
	}

	else if (fromValue == 3 && toValue == 3) {
		var ergebnis = sizeValue;
		document.getElementById("output").value=ergebnis; // Ausgabe
		alert("Fehler");
	}

	else if (fromValue == 3 && toValue == 4) {
		var ergebnis = "" + (sizeValue * 12);
		document.getElementById("output").value=ergebnis; // Ausgabe
	}

	// Select Zoll

	else if (fromValue == 4 && toValue == 1) {
		var ergebnis = "" + (sizeValue * 2.54);
		document.getElementById("output").value=ergebnis; // Ausgabe
	}

	else if (fromValue == 4 && toValue == 2) {
		var ergebnis = "" + (sizeValue / 36);
		document.getElementById("output").value=ergebnis; // Ausgabe
	}

	else if (fromValue == 4 && toValue == 3) {
		var ergebnis = "" + (sizeValue / 12);
		document.getElementById("output").value=ergebnis; // Ausgabe
	}

	else if (fromValue == 4 && toValue == 4) {
		var ergebnis = sizeValue;
		document.getElementById("output").value=ergebnis; // Ausgabe
		alert("fehler");
	}

	// Wenn was anderes ist

	else {
		alert("Hier ist etwas schiefgelaufen");
	}





}