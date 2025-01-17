export const addToCart = (product, selectedVariationId, selectedVariation) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      product,
      selectedVariationId,
      selectedVariation, 
    },
  };
};

export const increaseQuantity = (productId, selectedVariationId) => {
  return {
    type: "INCREASE_QUANTITY",
    payload: { productId, selectedVariationId },
  };
};

export const decreaseQuantity = (productId, selectedVariationId) => {
  return {
    type: "DECREASE_QUANTITY",
    payload: { productId, selectedVariationId },
  };
};

export const removeFromCart = (productId, selectedVariationId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: { productId, selectedVariationId },
  };
};


export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};