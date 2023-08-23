import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getSingleCategory } from '../../utils/data/categoryData';

export default function ItemCard({
  categoryId, photoUrl, name,
}) {
  const [category, setCategory] = useState();

  const getCategoryInfo = (id) => {
    getSingleCategory(id).then(setCategory);
  };

  useEffect(() => {
    getCategoryInfo(categoryId);
  }, [categoryId]);
  return (
    <Card style={{ width: '18rem' }}>
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
};
