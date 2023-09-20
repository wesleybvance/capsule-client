/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Card, CloseButton } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Link from 'next/link';
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
    <Card className="outfit-card mt-3">
      <CloseButton className="btn btn-outline-danger m-1" onClick={deleteThisOutfit} />
      <Card.Body className="cflex center">
        <Card.Title className="mb-5 archivo font35 outfit-card-title"><Link href={`/outfits/${oid}`}>{name}</Link></Card.Title>
        <div className="rflex center">
          {outfitItems ? outfitItems.map((oitem) => (
            <OutfitItemCard key={oitem.id} itid={oitem.item_id} />)) : 'This Outfit Is Empty'}
        </div>
        <div className="cflex"><Button onClick={(e) => router.replace(`/outfits/edit/${oid}`)} variant="dark">edit outfit</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

OutfitCard.propTypes = {
  name: PropTypes.string.isRequired,
  oid: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
