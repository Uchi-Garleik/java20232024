// load body
// save up the shopping button in a variable
// replace content from the container with the one generated from JSON + stored shopping button


/* JS DEL BURGUER DE CERRAR*/

document.addEventListener('scroll', function () {
    var menuToggle = document.querySelector('.menu-toggle input');
    if (menuToggle.checked) {
      menuToggle.checked = false;
    }
  });


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
	}, 
];
//

// Ejecutar la función inicialmente con "All" seleccionado
sorting({ target: { value: "All" } });

function sorting(event) {
	console.log(productsJSON);
	if (event.target.value !== "All") { 
	  const categories = productsJSON.filter(category => category.hasOwnProperty(event.target.value)); 
	  var products = categories;
	  switch (event.target.value) {
		case "Coffees":
		  console.log(event.target.value);
		  products = categories.map(category => category.Coffees); 
		  break;
  
		case "Chocolates":
		  console.log(event.target.value);
		  products = categories.map(category => category.Chocolates);
		  break;
  
		case "Teas":
		  console.log(event.target.value);
		  products = categories.map(category => category.Teas);
		  break;
		  
		default:
		  break;
	  }
	  console.log("productsFilter" + products);
	  soldierBoy(products);
	} else {
	  // Haz algo si se selecciona "All" 
	  var allProducts = [];
	  productsJSON.forEach(category => {
		Object.values(category).forEach(productList => {
		  allProducts.push(...productList);
		});
	  });
	  console.log("productsAll", allProducts);
	  soldierBoy(allProducts);
	}
  }
  
  
  function soldierBoy(params) {
	productContainer.innerHTML = "";
	
	params.forEach(productList => {
	  productList.forEach(product => {
		const $product_name = product.Product_Name; // Nombre del producto
		const $product_description = product.Product_Description; // Descripción del producto
		const $product_price = product.Price; // Precio del producto
		const $product_image = product.Product_Image; // URL de la imagen del producto
		
		const productDiv = document.createElement('div');
		const productName = document.createElement('h1');
		const productDescription = document.createElement('p');
		const productPrice = document.createElement('p');
		const productImage = document.createElement('img');
		
		const addCartButton = document.createElement('button');
		const addCartIcon = document.createElement('span');
		
		productDiv.classList.add('product-container');
		productName.classList.add('product-name');
		productDescription.classList.add('product-description');
		productPrice.classList.add('product-price');
		productImage.classList.add('product-img');
		
		addCartButton.classList.add('btn', 'btn-success', 'btn-add-cart');
		addCartIcon.classList.add('glyphicon', 'glyphicon-shopping-cart');
		
		productName.innerHTML = $product_name;
		productDescription.innerHTML = $product_description;
		productPrice.innerHTML = '€' + $product_price;
		productImage.src = $product_image;
		
		addCartButton.append(addCartIcon);
		addCartButton.append('ADD');
		
		productDiv.append(productName, productDescription, productPrice, productImage, addCartButton);
		productContainer.append(productDiv);
	  });
	});
	
	addToCartButton();
	
  }

  
  

// soldierBoy();



var itemsInCart = 0;
var subTotal = 0;
const tax = 0.1;	// 10%
var totalPrice = 0;


window.onload = function() {
  	$('img').addClass('img-responsive');

	$('.img-container').append('<button class="btn btn-success btn-add-cart"><span class="glyphicon glyphicon-shopping-cart"></span> to cart</button>');

	productsJSON.forEach((category) => {
		const $product_category = Object.keys(category);
		Object.values(category).forEach((productList) => {
			productList.forEach((product) => {
				const $product_name = product.Product_Name; // Name of the product
				const $product_description = product.Product_Description; // Description of the product
				const $product_price = product.Price; // Price of the product
				const $product_image = product.Product_Image; // Image URL of the product


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
				productImage.src = $product_image;

				// Append all elements to their correspondent parents
				productInformationDiv.append(productPrice, productName, productDescription, addCartButton);
				productImageDiv.append(productImage);
				addCartButton.append(addCartIcon);
				addCartButton.append('ADD');

				// Append all the divs and elements to the productDiv
				productDiv.append(productImageDiv, productInformationDiv);

				// Append the productDiv to the container/Container that contains all the product
				console.log(productDiv);
				productContainer.append(productDiv);
			});
		});
	});




$('.btn-add-cart').click( (e) => { 
		//animation
		$(e.target).animateCss('pulse');
		// find out which item is clicked
		// if 'span' with cart symbol is clicked, then navigate one level up to the button
		let eventTarget;
		if ($(e.target).is('span')) eventTarget = $(e.target).parent();
			else eventTarget = $(e.target);
		let itemName = eventTarget.parent().parent().find('.product-name')[0].textContent ;
		let itemPrice = eventTarget.parent().parent().find('.product-price')[0].textContent ;
		addToCart(itemName, itemPrice);
	});

	$('#submit').click( () => {
		formSubmitted();
	});

}

function setRandomPrices() {
	// just for fun
	let items = document.querySelectorAll('.item');
	for (let item of items) {
		$(item).find('p')[1].textContent = '$' + (Math.floor(Math.random() * (199 - 0)) + 0) + '.' + (Math.floor(Math.random() * (99 - 10)) + 10);
	}
}

function addToCart(name, price) {
	let priceNumber = parseFloat(price.slice(1));
	if (itemsInCart === 0) $('#cart').text(" ");
	let newDiv = $('<div class="cart-item"></div>');
	newDiv.text(name + ' ... ' + price + ' ');
	newDiv.append('<button class="btn btn-danger btn-xs" onclick="deleteItem(this)">X</button>');
	newDiv.append('<hr>');
	newDiv.attr('name', name);
	newDiv.attr('price', priceNumber);
	$('#cart').append(newDiv);
	newDiv.animateCss('bounceInRight');
	itemsInCart++;
	$('#cartItems').text(itemsInCart);
	subTotal += priceNumber;
	updatePrice();
}

function deleteItem(e) {
	let price = $(e.parentElement).attr('price');
	subTotal -= price;
	$(e.parentElement).animateCss('bounceOutRight');
	$(e.parentElement).remove();
	itemsInCart--;
	$('#cartItems').text(itemsInCart);
	updatePrice();
	cartLonelyText();
}

function cartLonelyText() {
	if (itemsInCart === 0) 
		$('#cart').append('So lonely here, add something');
}

function updatePrice() {
	$('#prices').empty();
	if (itemsInCart === 0) return;
	let newDiv = $('<div></div>');
	newDiv.append('<strong>Subtotal: $' + subTotal.toFixed(2) + '<br>');
	newDiv.append('<strong>Tax: ' + tax * 100 + '%<br>');
	newDiv.append('<strong>Total Price: $' + (subTotal + (subTotal * tax)).toFixed(2) + '</strong>');

	newDiv.append('<button class="btn btn-info btn-block" onclick="openModal()">Continue</button>');

	$('#prices').append(newDiv);
	newDiv.animateCss('bounceInRight');
}


function cartToString() {
	let itemsString = "<small><p><strong>Your order:</strong><br>";
	let cartItems = document.querySelectorAll('.cart-item');
	for (let item of cartItems) {
		itemsString = itemsString + item.getAttribute('name') + " .. $" + item.getAttribute('price') + "<br>";
		};
	itemsString += '</p><p>Subtotal: $' + subTotal.toFixed(2) + '<br>';
	itemsString += 'Tax: ' + tax * 100 + '%<br>'
	itemsString += 'Total price with tax: <mark><strong>$' + (subTotal + (subTotal * tax)).toFixed(2) + '</strong></mark></p></small>';
	return itemsString;
}

function openModal() {
	$('#cartContentsModal').html(cartToString());
	$('#myModal').modal('show');
}


function formSubmitted() {
	if (!checkEmptyFields()) {		// if the fields arent empty
		sweetAlert("Thanks!", "Thanks for your order! We will contact you for more information", "success");
	} else { return; }
	// clear cart and do other cleaning if order is OK
	$('#myModal').modal('hide');
	totalPrice = 0; subTotal = 0; itemsInCart = 0;
	$('#cart').empty();
	$('#prices').empty();
	$('#cartItems').text(itemsInCart);
	cartLonelyText();
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