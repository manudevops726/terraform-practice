import React, { useState } from 'react';
import OTPLogin from './components/OTPLogin';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));

  return (
    <div style={{ padding: '20px' }}>
      <h1>🛒 Zepto Clone – Grocery Store</h1>
      {loggedIn ? (
        <>
          <ProductList />
          <AddProduct />
        </>
      ) : (
        <OTPLogin onLogin={() => setLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
