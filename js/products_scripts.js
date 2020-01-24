/* Função para apresentar os produtos */
function showItems(data) {
	/* Repetição que dura até a length dos dados passado pela API */
	for (let i = 0; i < 8; i++) {
		/* Criando os elementos que vão compor o container dos produtos */
		const productContainer = document.getElementsByClassName(`shop-container`)[0];
		const productContainerCreat = document.createElement(`div`);
		const productImg = document.createElement(`div`);
		const productName = document.createElement(`h5`);
		const productDescription = document.createElement(`p`);
		const productOriginalPrice = document.createElement(`p`);
		const productCurrentPrice = document.createElement(`h6`);
		const productPriceSubdivision = document.createElement(`p`);
		const productBuyButton = document.createElement(`button`);
		/* Atribuindo a classname de cada elemento criado */
		productContainerCreat.className = `product-container`;
		productImg.className = `product-image`;
		productName.className = `product-name`;
		productDescription.className = `product-description`;
		productOriginalPrice.className = `product-original-price`;
		productCurrentPrice.className = `product-current-price`;
		productPriceSubdivision.className = `product-price-subdivision`;
		productBuyButton.className = `buy-button`;
		/* AppendChild dos subelementos no container de produtos */
		productContainer.appendChild(productContainerCreat);
		productContainerCreat.appendChild(productImg);
		productContainerCreat.appendChild(productName);
		productContainerCreat.appendChild(productDescription);
		productContainerCreat.appendChild(productOriginalPrice);
		productContainerCreat.appendChild(productCurrentPrice);
		productContainerCreat.appendChild(productPriceSubdivision);
		productContainerCreat.appendChild(productBuyButton);
		/* Atribuir valores da API aos elementos */
		productImg.style.backgroundImage = `url("https:` + data.products[i].image + `")`;
		productName.innerHTML = data.products[i].name;
		productDescription.innerHTML = data.products[i].description;
		productOriginalPrice.innerHTML = `De: R$` + data.products[i].oldPrice + `,00`;
		productCurrentPrice.innerHTML = `Por: R$` + data.products[i].price + `,00`;
		productPriceSubdivision.innerHTML = (`ou ` + data.products[i].installments.count + `x de R$` + data.products[i].installments.value).replace(`.`, `,`);
		productBuyButton.innerHTML = `Comprar`;
	}
}
