/* eslint-disable react-hooks/exhaustive-deps */
// import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useAuth } from '../../utils/context/authContext';
import { getAllCategories } from '../../utils/data/categoryData';
import CategorySelect from '../Items/CategorySelect';
import { createItem, updateItem } from '../../utils/data/itemData';

const initialState = {
  name: '',
  categoryId: 0,
  photoUrl: '',
  id: 0,
  userId: 0,
};

export default function ItemForm({ currentItem }) {
  const [formInput, setFormInput] = useState(initialState);
  const [categories, setCategories] = useState([]);
  // const router = useRouter();
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    getAllCategories().then(setCategories);
    if (currentItem.id) {
      console.warn(currentItem);
      setFormInput({
        id: currentItem.id,
        userId: user.id,
        categoryId: currentItem.category_id,
        photoUrl: currentItem.photo_url,
        name: currentItem.name,
      });
    }
  }, [currentItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentItem.id) {
      updateItem(formInput).then(() => router.push('/closet'));
    } else {
      const payload = { ...formInput, uid: user.id };
      console.warn(payload);
      createItem(payload).then(router.replace('/closet'));
    }
  };

  return (
    <div>
      <Form className="cflex center" onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingInput" label="Item Name" className="mt-4">
          <Form.Control className="box-border borderline form-input-500" value={formInput.name} onChange={handleChange} type="text" placeholder="" name="name" />
        </FloatingLabel>
        <Form.Select value={formInput.categoryId} name="categoryId" onChange={handleChange} className="mt-4 form-input-500 box-border borderline" aria-label="">
          <option>Select a Category</option>
          {categories ? categories.map((category) => (<CategorySelect key={category.id} id={category.id} name={category.name} />)) : (<option>No Categories Available</option>)}
        </Form.Select>
        <FloatingLabel controlId="floatingInput" label="Photo URL" className="mt-4">
          <Form.Control className="box-border borderline form-input-500" value={formInput.photoUrl} onChange={handleChange} type="text" placeholder="" name="photoUrl" />
        </FloatingLabel>
        <Button variant="light" className="box-border btn-outline-dark m-3" type="submit">{currentItem.id ? 'update' : 'add'}</Button>
      </Form>
    </div>
  );
}

ItemForm.propTypes = {
  currentItem: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    category_id: PropTypes.number,
    photo_url: PropTypes.string,
    uid: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
};
ItemForm.defaultProps = {
  currentItem: initialState,
};
