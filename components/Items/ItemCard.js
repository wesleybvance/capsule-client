/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Card, CloseButton } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { getSingleCategory } from '../../utils/data/categoryData';
import { deleteItem } from '../../utils/data/itemData';

export default function ItemCard({
  iid, categoryId, photoUrl, name, onUpdate,
}) {
  const [category, setCategory] = useState();
  const router = useRouter();

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
    <Card style={{ width: '18rem' }} className="box-border borderline m-2 item-card">
      <CloseButton className="m-2 btn btn-outline-danger" onClick={deleteThisItem} />
      <Card.Img variant="top" className="box-border" src={photoUrl} />
      <Card.Body className="cflex center">
        <Card.Title className="archivo bold title-text">{name}</Card.Title>
        {category ? (<Card.Text className="archivo body-text">{category.name}</Card.Text>) : ''}
      </Card.Body>
      <Button className="mt-2 edit-btn" onClick={(e) => router.replace(`/items/edit/${iid}`)} variant="dark">edit</Button>
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
