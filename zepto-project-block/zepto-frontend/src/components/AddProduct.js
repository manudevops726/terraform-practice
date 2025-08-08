import React, { useState } from 'react';
import api from '../api';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  const submit = async () => {
    await api.post('/products', { name, image, price }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    alert("Product added!");
  };

  return (
    <div>
      <h3>Add New Product</h3>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Image URL" onChange={e => setImage(e.target.value)} />
      <input placeholder="Price" onChange={e => setPrice(e.target.value)} />
      <button onClick={submit}>Add Product</button>
    </div>
  );
};

export default AddProduct;
