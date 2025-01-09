const productContainer = document.querySelector('.products');


const BASE_URL = `https://fakestoreapi.com`;
let products = [];
let categories = [];
const fetchAllProducts = async () => {
    const response = await fetch(`${BASE_URL}/products`)
    const data = await response.json();
    return data;
};
const fetchAllCategories = async () => {
    const response = await fetch(`${BASE_URL}/products/categories`)
    const data = await response.json();
    return data;
};
const fetchProductsByCategory = async (category) => {
    const response = await fetch(`${BASE_URL}/products/category/${category}`);
    const data = await response.json();
    return data;
};
products = await fetchAllProducts();
categories = await fetchAllCategories();


const renderProductCard = (product) => {
    const articleElement = document.createElement("article");

    const productImage = document.createElement("img");
    productImage.src = product.image;

    const h3Element = document.createElement("h3");
    h3Element.innerText = product.title;

    const priceElement = document.createElement("span");
    priceElement.innerText = product.price;

    articleElement.appendChild(productImage);
    articleElement.appendChild(h3Element);
    articleElement.appendChild(priceElement);
};

const showAllProducts = () => {
    products.forEach((product) => {
        renderProductCard(product);
        productContainer.appendChild(productCard);
    })
};

showAllProducts();