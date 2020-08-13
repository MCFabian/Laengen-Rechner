// JavaScript Document

function calculate(){
	// Einheiten und Wert weden aus dem HTML "gelesen"
	var fromValue = document.getElementById("selectIn").value; // Einheit "von"
	var toValue = document.getElementById("selectOut").value;	// Einheit "nach"
	var sizeValue = document.getElementById("inputIn").value;	// Wert
	
	// Umrechnung von Yard nach Fuss
	if(fromValue == 2 && toValue == 3){
		var ergebnis = sizeValue * 3; // Berechnung
		document.getElementById("inputOut").value=ergebnis; // Ausgabe
	}
}