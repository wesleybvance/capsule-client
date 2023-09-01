/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { getOutfitItemsByOutfitID } from '../../utils/data/outfitItemData';
import OutfitItemCard from './OutfitItemCard';
import { deleteOutfit } from '../../utils/data/outfitData';

export default function OutfitCard({
  name, oid, onUpdate,
}) {
  const [outfitItems, setOutfitItems] = useState([]);
  const router = useRouter();

  const getOutfitItems = (outfitId) => {
    getOutfitItemsByOutfitID(outfitId).then(setOutfitItems);
  };

  const deleteThisOutfit = () => {
    if (window.confirm('Are you sure you want to delete this outfit from your collection?')) {
      deleteOutfit(oid).then(() => onUpdate());
    }
  };

  useEffect(() => {
    getOutfitItems(oid);
  }, [oid]);

  return (
    <Card style={{ width: '18rem' }}>
      <Button variant="light" className="btn btn-outline-danger" onClick={deleteThisOutfit}>x</Button>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div className="rflexnowrap">
          {outfitItems ? outfitItems.map((oitem) => (
            <OutfitItemCard key={oitem.id} itid={oitem.item_id} />)) : 'This Outfit Is Empty'}
        </div>
        <Button onClick={(e) => router.replace(`/outfits/edit/${oid}`)} variant="dark">edit</Button>
      </Card.Body>
    </Card>
  );
}

OutfitCard.propTypes = {
  name: PropTypes.string.isRequired,
  oid: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
