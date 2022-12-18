"use strict";

let products = [];

const header = document.querySelector("#header");
const container = document.querySelector("#container");
const body = document.querySelector("body");
// cuando detectes scroll en window ejecuta la siguiente funcion
window.addEventListener("scroll", () => {
  // en caso de que container detecte que se hizo scroll 10 pixeles hacia abajo entonces añade al header la clase de scroll
  if(container.getBoundingClientRect().top<10){header.classList.add("scroll");
  } // en otro caso quitale a header la clase scroll
  else {
    header.classList.remove("scroll");
  }
})

const fetchProducts = async () => {
	const product = await fetch("./data/products.json");
	const response = await product.json();
	console.log(response);
	products.push(response);
};
console.log(products);

fetchProducts();
console.log(products);
