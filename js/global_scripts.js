let trigger = false;
let url = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`;

/* Fetching the API */
async function getURL() {
	fetch(url)
	.then(response => response.json())
	.then(function(data) {
		if (!trigger) {
			showItems(data);
		}
		else {
			url = `https://` + data.nextPage;
			trigger = false;
			getURL();
		}
	});
}

/* Function to see more products */
function openMore(button) {
	button.disabled = true;
	trigger = true;
	getURL();
	// Comportamento anti-spam-clicking
	setTimeout(function() { button.disabled = false; }, 1000);
}

onload = getURL;