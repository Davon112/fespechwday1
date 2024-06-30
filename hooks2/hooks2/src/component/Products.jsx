import React from 'react'
import useInventoryData from '../hooks/useInventory';

const Products = () => {
    const { products, removeProduct } = useInventoryData();


  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
            <li key={product.name}>
                {product.name}: ${product.price}
                <button onClick={() => removeProduct(product.name)}>Delete</button>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Products