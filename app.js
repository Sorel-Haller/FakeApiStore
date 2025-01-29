const productContainer = document.querySelector('.products');
const categoryContainer = document.querySelector('.categories');

const BASE_URL = 'https://fakestoreapi.com';
let products = [];
let categories = [];
const fetchProduct = async ()=> {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    return data;
};

const fetchAllCategories = async () => {
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
categories = await fetchAllCategories();

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

const renderCategoryButton = (category) => {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = category;
    buttonElement.classList.add('category-button')

    return buttonElement;

};

const showAllCategories = () => {
    categories.forEach((category) => {
        const button = renderCategoryButton(category);
        categoryContainer.appendChild(button);
    });
};

const showAllProducts = () => {
    products.forEach((product) => {
        const productCard = renderProductCard(product);
        productContainer.appendChild(productCard);
    });
};


showAllCategories();
showAllProducts();

categoryContainer.addEventListener('click',async (event) => {
    if(event.target.nodeName !== "BUTTON") return;

    console.log(event.target.innerText)
    products = await fetchProductByCategory(event.target.innerText);
    productContainer.innerHTML = '';
    showAllProducts();
});