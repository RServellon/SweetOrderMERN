const getCartFromLocalStorage = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  };
  
  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  const addToCart = (productId, quantity) => {
    const cart = getCartFromLocalStorage();
    const existingProduct = cart.find((item) => item.productId === productId);
  
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.push({ productId, quantity });
    }
  
    saveCartToLocalStorage(cart);
  };
  
  const getCart = () => {
    return getCartFromLocalStorage();
  };
  
  export { addToCart, getCart };
  