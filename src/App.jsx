import "./App.css"
import React from 'react';
import MedicineForm from './components/MedicalForm';
import MedicineList from './components/MedicineList';
import Cart from './components/Cart/Cart';
import { MedicalProvider } from './context/MedicalContext';

function App() {
  return (
    <MedicalProvider>
      <div>
        <Cart />
        <h1>Medical Shop Admin Panel</h1>
        <MedicineForm />
        <MedicineList />
        
      </div>
    </MedicalProvider>
  );
}

export default App;
