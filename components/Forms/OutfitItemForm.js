import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../../utils/data/categoryData';
import ItemSelect from '../Items/ItemSelect';

const initialState = {
  categoryId: 0,
};

export default function OutfitItemForm() {
  const [categories, setCategories] = useState([]);
  const [formInput, setFormInput] = useState(initialState);

  const getOutfitCategories = () => {
    getAllCategories().then(setCategories);
  };

  useEffect(() => {
    getOutfitCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.warn(formInput);
  };

  return (
    <div>
      <div>{categories ? (categories.map((category) => (<ItemSelect key={`select--${category.id}`} category={category} handleChange={handleChange} />))) : ''}</div>
    </div>
  );
}
