//Declaration et initialisation des variables
let input = document.getElementById("txtinput");
let txtMeaning = document.getElementById("showWord");

const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

//Fonction du traitement des mots
async function getDefinition(word) {
    
    
}

//detectons la touche entrée
input.addEventListener("keydown", (event) => {
	if (event.key == "Enter") {
		event.preventDefault();
	}
});
