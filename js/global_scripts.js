/* Função de fetch da API */
async function getURL() {
	fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`)
	.then(response => response.json())
	.then(function(data) {
		showItems(data);
	});
}

async function openMore() {
	fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=2`)
	.then(response => response.json())
	.then(function(data) {
		showItems(data);
	});
	
	document.getElementById(`show-more-button`).id = `show-less-button`;
	document.getElementById(`show-less-button`).innerHTML = `Mostrar menos`;
	document.getElementById(`show-less-button`).onclick = showLess;
}

function showLess() {
	for (let i = 8; i < 16; i++) {
		document.getElementsByClassName(`product-container`)[8].remove();
	}
	
	document.getElementById(`show-less-button`).id = `show-more-button`;
	document.getElementById(`show-more-button`).innerHTML = `Ainda mais produtos aqui!`;
	document.getElementById(`show-more-button`).onclick = openMore;
}

onload = getURL;
