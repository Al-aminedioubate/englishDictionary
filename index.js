//Declaration et initialisation des variables
let input = document.getElementById("txtinput");
let txtMeaning = document.getElementById("showWord");

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
		console.log(input.value);
		getDefinition(input.value);
	}
});
