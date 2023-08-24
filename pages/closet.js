import React, { useEffect, useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { getItemsByUser, getItemsByUserCategory } from '../utils/data/itemData';
import ItemCard from '../components/Items/ItemCard';
import { useAuth } from '../utils/context/authContext';
import { getAllCategories } from '../utils/data/categoryData';
import CategorySelect from '../components/Items/CategorySelect';

export default function Closet() {
  const { user } = useAuth();
  const [formSelect, setFormSelect] = useState({
    category: '',
  });
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const getItemsByCategory = (categoryId) => {
    getItemsByUserCategory(user.id, categoryId).then(setItems);
  };

  useEffect(() => {
    getAllCategories().then((data) => setCategories(data));
    if (formSelect.category === 'none') {
      getItemsByUser(user.id).then(setItems);
    } else if (formSelect.category) {
      console.warn(formSelect);
      getItemsByCategory(formSelect.category);
    } else {
      getItemsByUser(user.id).then(setItems);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formSelect.category]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormSelect((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="main-closet-cont">
      <div className="closet-select">
        <Form>
          <FloatingLabel controlId="floatingInput1" label="Category" className="mb-3">
            <Form.Select aria-label="Select Category" required name="category" onChange={handleChange}>
              <option value="none">All Clothing Items</option>
              {categories.map((category) => (<CategorySelect key={category.id} id={category.id} name={category.name} />))}
            </Form.Select>
          </FloatingLabel>
        </Form>
      </div>
      <div className="rflex">
        {items ? items.map((item) => (
          <ItemCard key={item.id} name={item.name} categoryId={item.category_id} photoUrl={item.photo_url} />)) : 'You have no items'}
      </div>
    </div>
  );
}
