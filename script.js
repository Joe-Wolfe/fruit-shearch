const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions span');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	if (str.length < 2) {
		showSuggestions([])
		return
	}
	let results = [];
	results = fruit.filter(function (el) {
		return el.toLowerCase().indexOf(str) > -1;
	})
	showSuggestions(results);
}

function searchHandler(e) {
	search(e.target.value.toLowerCase());
}

//clear suggestions and populate it with all fruit that contains the search value
function showSuggestions(results) {
	suggestions.innerHTML = "";
	results.forEach(suggestedFruit => {
		const newFruit = document.createElement("div")
		newFruit.innerText = suggestedFruit;
		suggestions.append(newFruit)

	});
}

function useSuggestion(e) {
	fruitChoice = e.target.innerText;
	input.value = fruitChoice;
	input.focus()
	showSuggestions([])
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);