import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getSingleCategory } from '../../utils/data/categoryData';
import { deleteItem } from '../../utils/data/itemData';

export default function ItemCard({
  iid, categoryId, photoUrl, name, onUpdate,
}) {
  const [category, setCategory] = useState();

  const getCategoryInfo = (id) => {
    getSingleCategory(id).then(setCategory);
  };

  const deleteThisItem = () => {
    if (window.confirm('Are you sure you want to delete this item from your closet? This will remove the item from any outfits it is in.')) {
      deleteItem(iid).then(() => onUpdate());
    }
  };

  useEffect(() => {
    getCategoryInfo(categoryId);
  }, [categoryId]);
  return (
    <Card style={{ width: '18rem' }}>
      <Button variant="light" className="btn btn-outline-danger" onClick={deleteThisItem}>x</Button>
      <Card.Img variant="top" src={photoUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        {category ? (<Card.Text>{category.name}</Card.Text>) : ''}
      </Card.Body>
    </Card>
  );
}

ItemCard.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  categoryId: PropTypes.number.isRequired,
  iid: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
