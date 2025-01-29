const productContainer = document.querySelector('.products');

const BASE_URL = 'https://fakestoreapi.com';
let products = [];
let categories = [];
const fetchProduct = async ()=> {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    return data;
};

const fetchAllGategories = async () => {
    const response = await fetch(`${BASE_URL}/products/categories`);
    const data = await response.json();
    return data;
};
const fetchProductByCategory = async (category) =>{
    const response = await fetch(`${BASE_URL}/products/category/${category}`);
    const data = await response.json()
    return data;
};

products = await fetchProduct();
categories = await fetchAllGategories();

const renderProductCard = (product) => {
    const articleElement = document.createElement('article');
    
    
    const productImage = document.createElement('img');
    productImage.src = product.image;
    
    const h3Element = document.createElement('h3');
    h3Element.innerText = product.title;
    
    const priceElement = document.createElement('span');
    priceElement.innerText = product.price;
    
    articleElement.appendChild(productImage);
    articleElement.appendChild(h3Element);
    articleElement.appendChild(priceElement);
    
    return articleElement;
};

const showAllProducts = () => {
    products.forEach((product) => {
        const productCard = renderProductCard(product);
        productContainer.appendChild(productCard);
    });
};

showAllProducts();