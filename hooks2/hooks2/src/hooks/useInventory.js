import { useEffect, useState } from "react";

const productList = [
    {name: "Wilson Basketball", price: 80},
    {name: "Coaching Clipboard", price: 30},
    {name: "Practice Pennies", price: 500},
    {name: "Contact Pads", price: 120}
]

export const useInventoryData = () => {

    const [products, setProducts] = useState(productList);
    
    const fetchProducts = () => {
        return products;
    };

    const removeProduct = (name) => {
        setProducts(products.filter(product => product.name !== name));
    };

    return {
        products: fetchProducts(),
        removeProduct
    };
};

export default useInventoryData;