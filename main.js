"use strict";

let products = [];
let cart = [];

const header = document.querySelector("#header");
const container = document.querySelector("#container");
const body = document.querySelector("body");
// cuando detectes scroll en window ejecuta la siguiente funcion
window.addEventListener("scroll", () => {
	// en caso de que container detecte que se hizo scroll 10 pixeles hacia abajo entonces añade al header la clase de scroll
	if (container.getBoundingClientRect().top < 10) {
		header.classList.add("scroll");
	} // en otro caso quitale a header la clase scroll
	else {
		header.classList.remove("scroll");
	}
});

const fetchProducts = async () => {
	const product = await fetch("./data/products.json");
	const response = await product.json();
	console.log(response.products);
	products.push(response.products);
	renderCartByCategories(response.products);
};

fetchProducts();

/* products */

const renderCartByCategories = (products) => {
	const container = document.querySelector("#container");

	products.forEach((e) => {
		const item = document.createElement("div");
		item.classList.add("item");


		item.innerHTML = `
   <img src=${e.thumbnail} alt=${e.title}>
  <div class="information">
    <p class="name">${e.title}</p>
    <p class="price">${e.price}</p>
    <button id=add${e.id} class="add" value=${e.id}>Add to Cart</button>
  </div>
  `;
		container.appendChild(item);
	});
};

document.addEventListener("click", (e) => {
	if (e.target.matches(".add")) {
		const id = e.target.value;
		const item = products[0].find((prod) => prod.id === Number(id));
		cart.push(item);
	}

	console.log(cart);
});
