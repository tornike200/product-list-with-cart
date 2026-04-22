const data = [
  {
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "./assets/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "./assets/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "./assets/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "./assets/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "./assets/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "./assets/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];

const productsInCart = [];

const containerElement = document.querySelector(".container");
let finalString = "";

data.forEach((item) => {
  let template = ` <div class="card">
        <img src="${item.image.desktop}" alt="image" />
        <div class="info">
          <h2 class="category">${item.category}</h2>
          <h2 class="name">${item.name}</h2>
          <h2 class="price">$${item.price.toFixed(2)}</h2>
        </div>

        <button class="add-btn">
          <img src="./assets/images/icon-add-to-cart.svg" alt="product image" /> add to cart
        </button>

        <button class="quantity-btn hidden">
          <span class="decrease">➖</span>
          <span>1</span>
          <span class="increase">➕</span>
        </button>
      
      </div> `;

  finalString += template;
});

containerElement.innerHTML = finalString;

const cardElems = document.querySelectorAll(".card");
// console.log(cardElems);

for (let item of cardElems) {
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-btn")) {
      e.target.classList.add("hidden");
      e.target.nextElementSibling.classList.remove("hidden");

      const card = e.target.parentElement;
      console.log(card.children[1].children[0].textContent);
      let name = card.children[1].children[1].textContent;
      let price = +card.children[1].children[2].textContent.substring(1);

      productsInCart.push({ name, price, quantity: 1 });

      renderCart();
    } else if (e.target.classList.contains("decrease")) {
      console.log(e.target);
      console.log(e.target.nextElementSibling);
    } else if (e.target.classList.contains("increase")) {
      console.log(e.target);
      console.log(e.target.previousElementSibling);
      const productName = e.target.parentElement.parentElement.children[1].children[1].textContent;
      const quantity = productsInCart.map((item) => {
        if (item.name === productName) {
          return item.quantity;
        }
      });

      console.log(quantity);
    }
  });
}

function renderCart() {
  let emptyCart = "";

  if (productsInCart.length !== 0) {
    productsInCart.forEach((item) => {
      let templateString = `   <div class="product">
        <h3 class="product-name">${item.name}</h3>
        <div>
          <span>${item.quantity}x</span>
          <span>${item.price}$</span>
          <span>${item.price * item.quantity}</span>
        </div>
      </div> `;

      emptyCart += templateString;
    });
  }

  const cartDiv = document.querySelector(".cart");
  cartDiv.innerHTML = emptyCart;
}
