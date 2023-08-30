/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useAuth } from '../../utils/context/authContext';
import { getItemsByUserCategory } from '../../utils/data/itemData';
import { getSingleCategory } from '../../utils/data/categoryData';

export default function OutfitItemSelect({
  id, value, categoryId, handleChange,
}) {
  const [category, setCategory] = useState({});
  const [items, setItems] = useState([]);
  const { user } = useAuth();
  // const router = useRouter();

  const getCategoryInfo = (catid) => {
    getSingleCategory(catid).then(setCategory);
  };

  const getCategoryItems = (catid) => {
    getItemsByUserCategory(user.id, catid).then(setItems);
  };

  useEffect(() => {
    getCategoryInfo(categoryId);
    getCategoryItems(categoryId);
  }, [categoryId]);

  return (
    <div>
      <FloatingLabel controlId="floatingSelect" label={category.name}>
        <Form.Select value={value} onChange={(e) => handleChange(id, e.target.value)} className="mt-4" aria-label="">
          <option>None</option>
          {items ? items.map((item) => (<option key={`item--${item.id}`} value={Number(item.id)}>{item.name}</option>)) : (<option>You don't have any {category.name} in your closet yet.</option>)}
        </Form.Select>
      </FloatingLabel>
    </div>
  );
}

OutfitItemSelect.propTypes = {
  categoryId: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
