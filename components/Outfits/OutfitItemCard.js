import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getSingleItem } from '../../utils/data/itemData';

export default function OutfitItemCard({ itid }) {
  const [item, setItem] = useState([]);

  const getItemItem = (id) => {
    getSingleItem(id).then(setItem);
  };

  useEffect(() => {
    getItemItem(itid);
  }, [itid]);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item?.photo_url} />
      <Card.Body>
        <Card.Title>{item?.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

OutfitItemCard.propTypes = {
  itid: PropTypes.number.isRequired,
};
