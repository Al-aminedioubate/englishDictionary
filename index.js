//Declaration et initialisation des variables
let input = document.getElementById("txtinput");
let txtInfo = document.getElementById("infoText");

let titleWord = document.getElementById("title");

//Fonction du traitement des mots
async function getDefinition(word) {
	try {
		const response = await fetch(
			`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
		);

		const data = await response.json();

		if (data.title) {
			txtInfo.style.display = "none";
			titleWord.innerText = word;
		}
	} catch (error) {}
}

//detectons la touche entrée
input.addEventListener("keydown", (event) => {
	if (event.key == "Enter") {
		event.preventDefault();
		getDefinition(input.value);
	}
});
