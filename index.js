//Declaration et initialisation des variables
let input = document.getElementById("txtinput");
let txtInfo = document.getElementById("infoText");

//Fonction du traitement des mots
async function getDefinition(word) {
	const response = await fetch(
		`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
	);

	const data = await response.json();
	console.log(data);
}

//detectons la touche entrée
input.addEventListener("keydown", (event) => {
	if (event.key == "Enter") {
		event.preventDefault();
		getDefinition(input.value);
	}
});
