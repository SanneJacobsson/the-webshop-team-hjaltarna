import "./../scss/style.scss";
import { Product } from "./models/Product";

const blueJacket = new Product(
  "https://i.imgur.com/edRuvDw.jpg",
  "Blue Jacket",
  "In the biting embrace of a winter day, where the freezing winds dance with an unrelenting chill, finding solace in the warmth and coziness of the perfect jacket is a sanctuary like no other. Picture this: a jacket, not merely a garment, but a refuge against the relentless gusts, a shield against the cold's biting fingers.",
  1499,
  "100% Polyester",
  "Blue",
  null
);
const greenJacket = new Product(
  "https://i.imgur.com/hfp9itD.jpg",
  "Green Jacket",
  "In the heart of a Nordic winter, where the icy winds howl with the fury of ancient gods, finding comfort in the robustness and warmth of the perfect Viking cloak is a haven like no other. Envision this: a jacket, not merely a piece of attire, but a fortress against the relentless gales, a bulwark against the frost’s piercing touch.",
  1599,
  "100% Polyester",
  "Green",
  null
);
const redJacket = new Product(
  "https://i.imgur.com/v7IQGw6.jpg",
  "Red Jacket",
  " As the winter winds rage, the jacket stands firm, a beacon of warmth in the biting cold, a sanctuary amidst the storm. Just as the Vikings braved the elements, so too does this jacket weather the winter, offering a refuge as steadfast as a Viking longship facing the tempestuous ocean.",
  1399,
  "100% Polyester",
  "Red",
  null
);

const productsMain: Product[] = [blueJacket, greenJacket, redJacket];

const createHtmlMain = (): void => {
  const main__productsContainer = document.getElementById(
    "main__productsContainer"
  ) as HTMLElement;
  main__productsContainer.innerHTML = "";

  productsMain.forEach((product: Product) => {
    const main__productContainer = document.createElement("div");
    main__productContainer.className = "main__productContainer";

    const main__imgContainer = document.createElement("div");
    main__imgContainer.className = "main__imgContainer";
    const productImg = document.createElement("img");
    productImg.src = product.imgLink;
    const textContainer = document.createElement("div");
    textContainer.className = "main__productContainer_text";
    const productTitle = document.createElement("h3");
    productTitle.innerHTML = product.productName;
    const productPrice = document.createElement("p");
    productPrice.innerHTML = product.productPrice.toString();

    main__imgContainer.appendChild(productImg);
    textContainer.appendChild(productTitle);
    textContainer.appendChild(productPrice);

    main__productContainer.appendChild(main__imgContainer);
    main__productContainer.appendChild(textContainer);

    main__productContainer.addEventListener("click", () => {
      localStorage.setItem("selectedProductImage", product.imgLink);
      localStorage.setItem(
        "selectedProductPrice",
        product.productPrice.toString()
      );
      localStorage.setItem(
        "selectedProductDescription",
        product.productDescription
      );
      localStorage.setItem("selectedProductMaterial", product.productMaterial);
      localStorage.setItem("selectedProductColor", product.productColor);
      localStorage.setItem("selectedProductName", product.productName);
      window.location.href = "productpage.html";
    });

    main__productsContainer.appendChild(main__productContainer);
  });
};

createHtmlMain();
