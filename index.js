//Declaration et initialisation des variables
let input = document.getElementById("txtinput");
let txtInfo = document.getElementById("infoText");

let titleWord = document.getElementById("title");
let meaningWord = document.getElementById("meaning");

//Fonction du traitement des mots
async function getDefinition(word) {
	try {
		txtInfo.innerText = `Searching the meaning of "${word}"`;
		const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
		const response = await fetch(URL).then((res) => res.json());

		if (response.title) {
			txtInfo.style.display = "none";
			titleWord.innerText = word;
			meaningWord.innerText = "N/A";
		}else{
            
        }
	} catch (error) {
		console.log(error);
		txtInfo.textContent = "An error happen";
	}
}

//detectons la touche entrée
input.addEventListener("keyup", (event) => {
	if (event.target.value && event.key === "Enter") {
		event.preventDefault();
		getDefinition(event.target.value);
	}
});
