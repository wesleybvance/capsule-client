/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useAuth } from '../../utils/context/authContext';
import { getItemsByUserCategory } from '../../utils/data/itemData';

export default function ItemSelect({ category, handleChange }) {
  const [items, setItems] = useState([]);
  const { user } = useAuth();

  const getCategoryItems = (catid) => {
    getItemsByUserCategory(user.id, catid).then(setItems);
  };

  useEffect(() => {
    getCategoryItems(category.id);
  }, [category]);

  return (
    <div>
      <FloatingLabel controlId="floatingSelect" label={category.name}>
        <Form.Select name="categoryId" onChange={handleChange} className="mt-4" aria-label="">
          <option>None</option>
          {items ? items.map((item) => (<option value={item.id}>{item.name}</option>)) : (<option>You don't have any {category.name} in your closet yet.</option>)}
        </Form.Select>
      </FloatingLabel>
    </div>
  );
}

ItemSelect.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};
