import React, { createContext, useContext, useState } from 'react';

const MedicalContext = createContext();

export const useMedicalContext = () => useContext(MedicalContext);

export const MedicalProvider = ({ children }) => {
  const [medicines, setMedicines] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addMedicine = (medicine) => {
    setMedicines([...medicines, medicine]);
  };

  const addToCart = (medicine) => {
    setCartItems([...cartItems, medicine]);
    setTotal(total + parseFloat(medicine.price));
  };

  const clearCart = () => {
    alert("Bill Generated Succesfully")
    setCartItems([]);
    setTotal(0);
  };

  return (
    <MedicalContext.Provider value={{ medicines, cartItems, total, addMedicine, addToCart, clearCart }}>
      {children}
    </MedicalContext.Provider>
  );
};
