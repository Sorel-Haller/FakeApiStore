const BASE_URL = "https://fakestoreapi.com/";

const fetchAllProducts = async () => () {
    const response = await fetch("{BASE_URL}/products");
    const data = await response.json();
    return data;
};

const fetchAllCategories = async () => {
    const response = await fetch("${BASE_URL}/categories");
    const data = await response.json();
    return data
};

const fetchAllProductsByCategory = async (category) => {
    const response = await fetch("${BASE_URL}/categories/${category}");
    const data = await response.json();
    return data
};



await fetchAllProducts();