import React, { createContext } from "react";
import products from "../components/library/products";

export const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
