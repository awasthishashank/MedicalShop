import React from 'react';
import { useMedicalContext } from '../context/MedicalContext';

function MedicineForm() {
  const { addMedicine } = useMedicalContext();
  const [medicine, setMedicine] = React.useState({ name: '', description: '', price: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicine({ ...medicine, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMedicine(medicine);
    setMedicine({ name: '', description: '', price: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Medicine Name"
        name="name"
        value={medicine.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={medicine.description}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Price"
        name="price"
        value={medicine.price}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default MedicineForm;
