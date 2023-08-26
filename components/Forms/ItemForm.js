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

  // if (router.query) {
  //   initialState.categoryId = router.query.category_id;
  // }

  useEffect(() => {
    getAllCategories().then(setCategories);
    if (currentItem.id) {
      setFormInput({
        id: currentItem.id,
        uid: currentItem.uid.id,
        categoryId: currentItem.category_id.id,
        photoUrl: currentItem.photo_url,
        name: currentItem.name,
      });
    }
  }, [currentItem, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.warn(formInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentItem.id) {
      updateItem(formInput).then(() => router.push('/closet'));
    } else {
      const payload = { ...formInput, uid: user.id };
      console.warn(payload);
      createItem(payload).then(router.push('/closet'));
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingInput" label="Item Name" className="mt-4">
          <Form.Control onChange={handleChange} type="text" placeholder="" name="name" />
        </FloatingLabel>
        <Form.Select name="categoryId" onChange={handleChange} className="mt-4" aria-label="">
          <option>Select a Category</option>
          {categories ? categories.map((category) => (<CategorySelect key={category.id} id={category.id} name={category.name} />)) : (<option>No Categories Available</option>)}
        </Form.Select>
        <FloatingLabel controlId="floatingInput" label="Photo URL" className="mt-4">
          <Form.Control onChange={handleChange} type="text" placeholder="" name="photoUrl" />
        </FloatingLabel>
        <Button variant="light" className="btn-outline-dark" type="submit">{currentItem.id ? 'Update' : 'Create'} Item</Button>
      </Form>
    </div>
  );
}

ItemForm.propTypes = {
  currentItem: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    category_id: PropTypes.shape({
      id: PropTypes.number,
    }),
    photo_url: PropTypes.string,
    uid: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
};
ItemForm.defaultProps = {
  currentItem: initialState,
};
