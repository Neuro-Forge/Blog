import React, { useState, useEffect } from 'react';

function App() {
  // 1. Rename 'messege' to 'products' to match your JSX usage
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/products/')  
      .then(response => response.json())
      // 2. Update state using the renamed setter
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <div className="App">
        <h1 className="text-3xl font-bold underline">products</h1>
        <div className="grid grid-cols-3 gap-4">
          {/* 3. 'products' is now defined in the component scope */}
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-green-500 font-bold">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;