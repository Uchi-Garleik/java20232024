document.body.addEventListener("DOMContentLoaded", initComponents());

function initComponents(){
    document.querySelector('#categories').addEventListener("change",filter);
}

function filter(){
    const categoryData = "category=" + document.querySelector('#categories').value;
    const actionData = 'action=PRODUCT.FILTER';
    const data = categoryData + '&' + actionData;
    console.log(data);
    $.ajax({
        url: "/CAFETERIA_EL_GRANO/Controller",
        data: data,
        type: 'GET',
        success: function (data, textStatus, jqXHR) {
            console.log(data);
            redrawProducts(data);
        }
    });
}

function redrawProducts(productsData){
    const productsJSON = JSON.parse(productsData);
    const $productsContainer = document.querySelector('#products');
    $productsContainer.innerHTML = "";
    console.log(productsJSON);
    productsJSON.forEach((product)=>{
				const $product_name = product.nombre; // Name of the product
				const $product_description = product.descripcion; // Description of the product
				const $product_price = product.precio; // Price of the product
				const $product_image = product.imagen; // Image URL of the product


				// create the div containers
				const productDiv = document.createElement('div');
				const productInformationDiv = document.createElement('div');
				const productImageDiv = document.createElement('div');

				// create the elements themselves which will contain the data
				const productName = document.createElement('h1');
				const productDescription = document.createElement('p');
				const productPrice = document.createElement('p');
				const productImage = document.createElement('img');

				const addCartButton = document.createElement('button');
				const addCartIcon = document.createElement('span');

				// we assign the classes to each element
				productDiv.classList.add('product-container');
				productImageDiv.classList.add('product-image');
				productInformationDiv.classList.add('product-information');
				productName.classList.add('product-name');
				productDescription.classList.add('product-description');
				productPrice.classList.add('product-price');
				productImage.classList.add('product-img');

				addCartButton.classList.add('btn', 'btn-success', 'btn-add-cart');
				addCartIcon.classList.add('glyphicon', 'glyphicon-shopping-cart');

				// we assign the values to each element
				productName.innerHTML = $product_name;
				productDescription.innerHTML = $product_description;
				productPrice.innerHTML = '€' + $product_price;
                console.log($product_image);
				productImage.src = $product_image;

				// Append all elements to their correspondent parents
				productInformationDiv.append(productPrice, productName, productDescription, addCartButton);
				productImageDiv.append(productImage);
				addCartButton.append(addCartIcon);
				addCartButton.append('ADD');

				// Append all the divs and elements to the productDiv
				productDiv.append(productImageDiv, productInformationDiv);

				// Append the productDiv to the container/Container that contains all the product
				$productsContainer.append(productDiv);
    });
    $('.btn-add-cart').click( (e) => {
		//animation
		$(e.target).animateCss('pulse');
		// find out which item is clicked
		// if 'span' with cart symbol is clicked, then navigate one level up to the button
		let eventTarget;
		if ($(e.target).is('span')) eventTarget = $(e.target).parent();
			else eventTarget = $(e.target);
		let itemName = eventTarget.parent().parent().find('.product-name')[0].textContent;
		let itemPrice = eventTarget.parent().parent().find('.product-price')[0].textContent;
		addToCart(itemName, itemPrice);
	});
}