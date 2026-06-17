import React from 'react'

const CartContext = React.createContext();

const useCart = () => React.useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartitems, setCartItems] = React.useState([]);

  const addtoCart = (product) => {
    const existing = cartitems.find((item) => item.id === product.id);

    if (existing) {
      setCartItems(
        cartitems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartitems, { ...product, quantity: 1 }]);
    }
  };

  const removefromcart = (product) => {
    const existing = cartitems.find((item) => item.id === product.id);

    if (!existing) return;

    if (existing.quantity === 1) {
      setCartItems(cartitems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartitems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const updatequantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems(
      cartitems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartitems, addtoCart, removefromcart, updatequantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider, useCart };
