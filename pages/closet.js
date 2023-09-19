import React, { useEffect, useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import Link from 'next/link';
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

  const getItemsAgain = () => {
    getItemsByUser(user.id).then(setItems);
  };

  // On page render, call to get all categories and set categories to all. The current state of the dropdown menu will conditionally render items with the chosen category

  useEffect(() => {
    getAllCategories().then((data) => setCategories(data));
    if (formSelect.category === 'none') {
      getItemsByUser(user.id).then(setItems);
    } else if (formSelect.category) {
      getItemsByCategory(formSelect.category);
    } else {
      getItemsByUser(user.id).then(setItems);
      console.warn(items);
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
          <div className="m-5">
            <FloatingLabel controlId="floatingInput1" label="Category">
              <Form.Select aria-label="Select Category" required name="category" onChange={handleChange}>
                <option value="none">All Clothing Items</option>
                {categories.map((category) => (<CategorySelect key={category.id} id={category.id} name={category.name} />))}
              </Form.Select>
            </FloatingLabel>
          </div>
        </Form>
      </div>
      <div className="rflex center">
        {items[0] ? items.map((item) => (
          <ItemCard key={item.id} iid={item.id} name={item.name} categoryId={item.category_id} photoUrl={item.photo_url} onUpdate={getItemsAgain} />)) : (
            <div className="cflex center">
              <h1 className="handjet font30">Your closet is empty!</h1>
              <h5 className="archivo"><Link passHref href="/items/new">Click here</Link> to add something to your closet :)</h5>
            </div>
        )}
      </div>
    </div>
  );
}
