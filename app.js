const container = document.getElementById("container");

let cart = [];

products.forEach(prod =>{
  const item = document.createElement('div');
  item.classList.add("item");
  item.innerHTML = `
  <img src="https://battler.gg/wp-content/uploads/2021/04/comprar-pc-gamer-2021-battler.jpg" alt="#">
  <div class="information">
    <p class="name">Product 1</p>
    <p class="price">$1999 <span>.99</span></p>
    <button id="add${prod.id}" class="add">Add to Cart</button>
  </div>
  `;
  container.appendChild(item);
  const button = document.getElementById("add${product.id}");

  button.addEventListener("click", () => {
    addToCart(prod.id);
  })
});

const addToCart = (prodID) => {
  const content = products.find(prod => prod.id === prodID);
  cart.push(content);
}