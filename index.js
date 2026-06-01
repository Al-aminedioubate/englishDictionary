//Declaration et initialisation des variables
let input = document.getElementById("txtinput");
let txtMeaning = document.getElementById("showWord");

//Fonction du traitement des mots
function findMeaning() {}

//detectons la touche entrée
input.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		event.preventDefault();
		console.log("la touche entree a ete pressee!");
	}
});
