import React, { useEffect, useState } from 'react';
import api from '../api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products').then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>Grocery Items</h2>
      {products.map(p => (
        <div key={p.id}>
          <img src={p.image} alt={p.name} width="100" />
          <h4>{p.name} - ₹{p.price}</h4>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
