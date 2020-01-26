/* Fetching the API */
async function getURL() {
	fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`)
	.then(response => response.json())
	.then(function(data) {
		showItems(data);
	});
}
/* Function to see more products */
function openMore() {
	fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=2`)
	.then(response => response.json())
	.then(function(data) {
		showItems(data);
	});
	
	document.getElementById(`show-more-button`).id = `show-less-button`;
	document.getElementById(`show-less-button`).innerHTML = `Mostrar menos`;
	document.getElementById(`show-less-button`).onclick = showLess;
}
/* Function to show less products */
function showLess() {
	for (let i = 15; i > 7; i--) {
		document.getElementsByClassName(`product-container`)[i].style.animation = `fade-out-anim 0.3s linear`;
		setTimeout(function(){document.getElementsByClassName(`product-container`)[i].remove();}, 300);
	}
	document.getElementById(`show-less-button`).id = `show-more-button`;
	document.getElementById(`show-more-button`).innerHTML = `Ainda mais produtos aqui!`;
	document.getElementById(`show-more-button`).onclick = openMore;
}

onload = getURL;