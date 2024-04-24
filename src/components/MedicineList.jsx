import React from 'react';
import { useMedicalContext } from '../context/MedicalContext';

function MedicineList() {
  const { medicines, addToCart } = useMedicalContext();

  return (
    <div>
      {medicines.map((medicine, index) => (
        <div key={index}>
          <p>Medicine Name: {medicine.name}</p>
          <p>Description: {medicine.description}</p>
          <p>Price: {medicine.price}</p>
          <button onClick={() => addToCart(medicine)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default MedicineList;
