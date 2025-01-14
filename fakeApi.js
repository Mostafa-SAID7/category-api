let products = {
  data: [
    {
      productName: "jacket Man",
      category: "Man",
      price: "55",
      image: "image/products/Man/man-1.png",
    },
    {
      productName: "jacket Man",
      category: "Man",
      price: "50",
      image: "image/products/Man/man-2.png",
    },
    {
      productName: "jacket Woman",
      category: "Woman",
      price: "70",
      image: "image/products/Woman/woman-1.jpg",
    },
    {
      productName: "jacket Woman",
      category: "Woman",
      price: "70",
      image: "image/products/Woman/woman-2.png",
    },
    {
      productName: "jacket Kid's",
      category: "Kid's",
      price: "30",
      image: "image/products/Kid's/kid-1.jpg",
    },
    {
      productName: "jacket Kid's",
      category: "Kid's",
      price: "40",
      image: "image/products/Kid's/kid-2.jpg",
    },
  ],
};

for (let i of products.data) {
  let card = document.createElement("div");
  card.classList.add("card", i.category, "hide");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let container = document.createElement("div");
  container.classList.add("container");

  let name = document.createElement("h3");
  name.classList.add("product-name");
  name.innerHTML = i.productName.toUpperCase();
  container.appendChild(name);

  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}
// search button
document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".cards");

  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});
// filter Gallery products
function filterProduct(value) {
  let buttons = document.querySelectorAll("button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}
window.onload = () => {
  filterProduct("all");
};
