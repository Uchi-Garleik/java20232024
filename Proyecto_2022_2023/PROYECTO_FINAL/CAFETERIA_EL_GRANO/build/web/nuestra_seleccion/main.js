// load body
// save up the shopping button in a variable
// replace content from the container with the one generated from JSON + stored shopping button


let productArray = [];

/* JS DEL BURGUER DE CERRAR*/

// JSON product listing functionality

const productContainer = document.querySelector('#products');

const productsJSON = [
	{
		"Coffees": [
			{
				"ID": "001",
				"Product_Name": "Colombian Coffee",
				"Product_Description": "100% Arabica coffee beans grown in the mountains of Colombia.",
				"Price": 12.99,
				"Available_Amount": 50,
				"Product_Image": "./img/capsula1.webp"
			},
			{
				"ID": "004",
				"Product_Name": "Espresso Coffee",
				"Product_Description": "Rich, bold espresso made from 100% Arabica beans.",
				"Price": 14.99,
				"Available_Amount": 30,
				"Product_Image": "./img/capsula1.webp"
			},
			{
				"ID": "008",
				"Product_Name": "Cappuccino Coffee",
				"Product_Description": "A classic Italian coffee drink made with espresso and frothed milk.",
				"Price": 16.99,
				"Available_Amount": 25,
				"Product_Image": "./img/capsula1.webp"
			}
		]
	},
	{
		"Chocolates": [
			{
				"ID": "003",
				"Product_Name": "Dark Chocolate",
				"Product_Description": "Intensely flavored dark chocolate made from 70% cocoa beans.",
				"Price": 9.99,
				"Available_Amount": 20,
				"Product_Image": "./img/capsula1.webp"
			},
			{
				"ID": "006",
				"Product_Name": "Milk Chocolate",
				"Product_Description": "Smooth and creamy milk chocolate made with 35% cocoa beans.",
				"Price": 8.99,
				"Available_Amount": 15,
				"Product_Image": "./img/capsula1.webp"
			},
			{
				"ID": "009",
				"Product_Name": "Mint Chocolate",
				"Product_Description": "Rich dark chocolate infused with natural peppermint oil.",
				"Price": 10.99,
				"Available_Amount": 35,
				"Product_Image": "./img/capsula1.webp"
			}
		]
	},
	{
		"Teas": [
			{
				"ID": "002",
				"Product_Name": "Matcha Green Tea",
				"Product_Description": "Premium grade Japanese green tea powder with a rich, earthy flavor.",
				"Price": 18.99,
				"Available_Amount": 100,
				"Product_Image": "./img/capsula1.webp"
			},
			{
				"ID": "005",
				"Product_Name": "Chai Tea",
				"Product_Description": "A blend of black tea, cinnamon, cardamom, and other spices with a sweet and spicy flavor.",
				"Price": 15.99,
				"Available_Amount": 40,
				"Product_Image": "./img/capsula1.webp"
			},
			{
				"ID": "007",
				"Product_Name": "Earl Grey Tea",
				"Product_Description": "A black tea blend flavored with bergamot oil for a distinctive aroma and taste.",
				"Price": 12.99,
				"Available_Amount": 60,
				"Product_Image": "./img/capsula1.webp"
			},
			{
				"ID": "010",
				"Product_Name": "Green Tea",
				"Product_Description": "A light and refreshing tea made from steamed green tea leaves.",
				"Price": 14.99,
				"Available_Amount": 70,
				"Product_Image": "./img/capsula1.webp"
			}
		]
	}
];
//

var itemsInCart = 0;
var subTotal = 0;
const tax = 0.1;	// 10%
var totalPrice = 0;


window.onload = function() {
	let productId = 0;
  	$('img').addClass('img-responsive');

	$('.img-container').append('<button class="btn btn-success btn-add-cart"><span class="glyphicon glyphicon-shopping-cart"></span> to cart</button>');
	const data = "action=PRODUCT.FILTER&category=all"
	$.ajax({
        url: "/CAFETERIA_EL_GRANO/Controller",
        data: data,
        type: 'GET',
        success: function (data, textStatus, jqXHR) {
            console.log(data);
            redrawProducts(data);
        }
    });

	// productsJSON.forEach((category) => {
	// 	const $product_category = Object.keys(category);
	// 	Object.values(category).forEach((productList) => {
	// 		productList.forEach((product) => {
	// 			let $product_ID = productId;
	// 			const $product_name = product.Product_Name; // Name of the product
	// 			const $product_description = product.Product_Description; // Description of the product
	// 			const $product_price = product.Price; // Price of the product
	// 			const $product_image = product.Product_Image; // Image URL of the product


	// 			// create the div containers
	// 			const productDiv = document.createElement('div');
	// 			const productInformationDiv = document.createElement('div');
	// 			const productImageDiv = document.createElement('div');

	// 			// create the elements themselves which will contain the data
	// 			const productName = document.createElement('h1');
	// 			const productDescription = document.createElement('p');
	// 			const productPrice = document.createElement('p');
	// 			const productImage = document.createElement('img');

	// 			const addCartButton = document.createElement('button');
	// 			const addCartIcon = document.createElement('span');

	// 			// we assign the classes to each element
	// 			productDiv.classList.add('product-container', $product_ID);
	// 			productImageDiv.classList.add('product-image');
	// 			productInformationDiv.classList.add('product-information');
	// 			productName.classList.add('product-name');
	// 			productDescription.classList.add('product-description');
	// 			productPrice.classList.add('product-price');
	// 			productImage.classList.add('product-img');

	// 			addCartButton.classList.add('btn', 'btn-success', 'btn-add-cart');
	// 			addCartIcon.classList.add('glyphicon', 'glyphicon-shopping-cart');

	// 			// we assign the values to each element
	// 			productName.innerHTML = $product_name;
	// 			productDescription.innerHTML = $product_description;
	// 			productPrice.innerHTML = '€' + $product_price;
	// 			productImage.src = $product_image;

	// 			// Append all elements to their correspondent parents
	// 			productInformationDiv.append(productPrice, productName, productDescription, addCartButton);
	// 			productImageDiv.append(productImage);
	// 			addCartButton.append(addCartIcon);
	// 			addCartButton.append('ADD');

	// 			// Append all the divs and elements to the productDiv
	// 			productDiv.append(productImageDiv, productInformationDiv);

	// 			// Append the productDiv to the container/Container that contains all the product
	// 			productContainer.append(productDiv);
	// 			productId++;
	// 		});
	// 	});
	// });




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

	$('#submit').click( () => {
		formSubmitted();
	});

}


function addToCart(name, price) {
	if (checkLoggedUser()) {
		const product = [name, price];
		productArray.push(product);
		sessionStorage.setItem("cart",JSON.stringify(productArray));
		updateShoppingCart();
	}else{
		console.log("madre mia")
	}

	let basketButton = $('.basket-button');
	basketButton.addClass('highlight');
  
	setTimeout(function() {
	  basketButton.removeClass('highlight');
	}, 1000); 

}

function updateShoppingCart() {
	let productId = 0;
	const $cart = document.querySelector('#cart');
	$cart.innerHTML = "";
	const cart = JSON.parse(sessionStorage.getItem("cart"));
	const products = document.createElement("div");
	const productInfo = document.createElement("div")
	products.classList.add("products");

	cart.forEach((product)=>{
		// CREATE THE CONTENT CONTAINERS
		const productContainer = document.createElement("div");
		productContainer.classList.add(productId);

		// CREATE THE PRODUCT ITSELF
			const productName = document.createElement("span");
			const productPrice = document.createElement("span");

		// CREATE BUTTON // newDiv.append('<button class="btn btn-danger btn-xs" onclick="deleteItem(this)">X</button>');
			const removeProductButton = document.createElement("button");
			removeProductButton.classList.add("remove-product-button");
			removeProductButton.addEventListener("click",(event) => deleteItem(event.target));
			removeProductButton.value = product[0];
			removeProductButton.innerHTML = "X";

		productName.innerHTML = product[0];
		productPrice.innerHTML = product[1];

		productContainer.append(productName, productPrice);
		productContainer.append(removeProductButton);
		productId++;
		products.append(productContainer)
	});
	$cart.append(products);
	updatePrice();
	appendModelButton();
}


function deleteItem(productButton) {
	const cart = JSON.parse(sessionStorage.getItem("cart"));
	let i = 0;
	console.log("PRODUCT BUTTON::")
	console.log(productButton.value)
	// TODO: REMOVE ITEMS FROM PRODUCT ARRAY TOO
	cart.every((product)=>{
		console.log("PRODUCTO::")
		console.log(product[0]);
		if ( productButton.value == product[0] ) {
			cart.splice(i,1);
			productArray.splice(i,1);
			sessionStorage.setItem("cart",JSON.stringify(cart));
			return false;
		}else{
			i++;
			return true;
		}
	});
	updateShoppingCart();
	cartEmptyText();
}

function cartEmptyText() {
	if ( productArray.length == 0 ) {
		document.querySelector('#cart').innerHTML = "Add Something To The Cart!";
	}
}

function updatePrice() {
	const $cart = document.querySelector('#cart');
	const cart = JSON.parse(sessionStorage.getItem("cart"));
	const cartExtraInfo = document.createElement("div");
	const totalPriceSpan = document.createElement("span");

	totalPrice = 0;
	cart.forEach((product)=>{
		const $productPrice = Number(product[1].split("€")[1])
		totalPrice += $productPrice;
	});
	totalPriceSpan.innerHTML = "Total Price: " + totalPrice.toFixed(2);
	cartExtraInfo.append(totalPriceSpan);
	cartExtraInfo.classList.add("cart-info");
	$cart.append(cartExtraInfo);
}

function appendModelButton() {
	const $cart = document.querySelector('#cart');
	const button = document.createElement('button');
	button.classList.add('btn', 'btn-info', 'btn-block');
	button.addEventListener("click",openModal);
	button.innerHTML = "Continue";
	$cart.append(button);
}


function cartToString() {
	let itemsString = "<small><p><strong>Your order:</strong><br>";
	let cartItems = document.querySelectorAll('.cart-item');
	for (let item of cartItems) {
		itemsString = itemsString + item.getAttribute('name') + " .. $" + item.getAttribute('price') + "<br>";
		};
	itemsString += '</p><p>Subtotal:' + totalPrice.toFixed(2) + '€<br>';
	itemsString += 'Tax: ' + tax * 100 + '%<br>'
	itemsString += 'Total price with tax: <mark><strong>' + (totalPrice + (totalPrice * tax)).toFixed(2) + '€</strong></mark></p></small>';
	return itemsString;
}

function openModal() {
	$('#cartContentsModal').html(cartToString());
	$('#myModal').modal('show');
}

function checkLoggedUser() {
	if (getCookie("username") == "NULL") {
		alert("You need to log in before adding products to your cart!")
		console.log("NO HAY USUARIOS CONECTADOS. NO PODES COMPRAR CACHO PAN")
		return false;
	}else{
		console.log("vamo a comprar papu")
		return true;
	}
}

function formSubmitted() {
	if (!checkEmptyFields()) {		// if the fields arent empty
		sweetAlert("Thanks!", "Thanks for your order! We will contact you for more information", "success");
	} else { return; }
	// clear cart and do other cleaning if order is OK
	$('#myModal').modal('hide');
	totalPrice = 0; sessionStorage.removeItem("cart"); productArray = [];
	// $('#cart').empty();
	// $('#prices').empty();
	// $('#cartItems').text(itemsInCart);
	console.log("wtf");
	updateShoppingCart();
	// updatePrice();
}

function checkEmptyFields() {
	let somethingEmpty = false;
  
	if ( !$.trim( $('#formName').val() ).length) { 
		$('#formName').animateCss('animated jello');
		somethingEmpty = true;
	}

	if ( !$.trim( $('#formAddress').val() ).length) { 
		$('#formAddress').animateCss('animated jello');
		somethingEmpty = true;
	}

	return somethingEmpty;
}

$.fn.extend({
//		https://github.com/daneden/animate.css
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});