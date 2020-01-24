/* Function to create the products cards */
function showItems(data) {
	/* 8 products max */
	for (let i = 0; i < 8; i++) {
		/* Creating the elements that will populate the productContainer later */
		const productContainer = document.getElementsByClassName(`shop-container`)[0];
		const productContainerCreat = document.createElement(`div`);
		const productImg = document.createElement(`div`);
		const productName = document.createElement(`h5`);
		const productDescription = document.createElement(`p`);
		const productOriginalPrice = document.createElement(`p`);
		const productCurrentPrice = document.createElement(`h6`);
		const productPriceSubdivision = document.createElement(`p`);
		const productBuyButton = document.createElement(`button`);
		const valueStr = data.products[i].installments.value;
		/* Classname in each element */
		productContainerCreat.className = `product-container`;
		productImg.className = `product-image`;
		productName.className = `product-name`;
		productDescription.className = `product-description`;
		productOriginalPrice.className = `product-original-price`;
		productCurrentPrice.className = `product-current-price`;
		productPriceSubdivision.className = `product-price-subdivision`;
		productBuyButton.className = `buy-button`;
		/* Using appendChild to append the elements in their parent */
		productContainer.appendChild(productContainerCreat);
		productContainerCreat.appendChild(productImg);
		productContainerCreat.appendChild(productName);
		productContainerCreat.appendChild(productDescription);
		productContainerCreat.appendChild(productOriginalPrice);
		productContainerCreat.appendChild(productCurrentPrice);
		productContainerCreat.appendChild(productPriceSubdivision);
		productContainerCreat.appendChild(productBuyButton);
		/* Using API values */
		productImg.style.backgroundImage = `url("https:` + data.products[i].image + `")`;
		productName.innerHTML = data.products[i].name;
		productDescription.innerHTML = data.products[i].description;
		productOriginalPrice.innerHTML = `De: R$` + data.products[i].oldPrice + `,00`;
		productCurrentPrice.innerHTML = `Por: R$` + data.products[i].price + `,00`;
		/* Treating the money values */
		if (Number.isInteger(valueStr)) {
			productPriceSubdivision.innerHTML = `ou ` + data.products[i].installments.count + `x de R$` + data.products[i].installments.value + `,00`;
		}
		else {
			productPriceSubdivision.innerHTML = (`ou ` + data.products[i].installments.count + `x de R$` + data.products[i].installments.value).replace(`.`, `,`) + `0`;
		}
		/* */
		productBuyButton.innerHTML = `Comprar`;
	}
}
