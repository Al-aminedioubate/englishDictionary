//Declaration et initialisation des variables
let inputValue = document.getElementById("txtinput");
let txtInfoEl = document.getElementById("infoText");

let titleWord = document.getElementById("title");
let meaningWord = document.getElementById("meaning");
let meaningContainerEl = document.getElementById("meaning-container");

//Fonction du traitement des mots
async function getDefinition(word) {
	try {
		txtInfoEl.style.display = "block";
		meaningContainerEl.style.display = "none";
		txtInfoEl.innerText = `Searching the meaning of "${word}"`;

		const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
		const data = await fetch(URL).then((res) => res.json());

		if (data.title) {
			meaningContainerEl.style.display = "block";
			txtInfoEl.style.display = "none";
			titleWord.innerText = word;
			meaningWord.innerText = "N/A";
		} else {
			txtInfoEl.style.display = "none";
			meaningContainerEl.style.display = "block";
			titleWord.innerText = data[0].word;
			meaningWord.textContent = data[0].meanings[0].definitions[0].definition;
		}
	} catch (error) {
		txtInfo.textContent = "An error happen";
	}
}

//detectons la touche entrée
input.addEventListener("keyup", (event) => {
	if (event.target.value && event.key === "Enter") {
		event.preventDefault();
		getDefinition(input.value);
	}
});
