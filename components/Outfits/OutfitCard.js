import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getOutfitItemsByOutfitID } from '../../utils/data/outfitItemData';
import OutfitItemCard from './OutfitItemCard';

export default function OutfitCard({
  name, oid,
}) {
  const [outfitItems, setOutfitItems] = useState([]);

  const getOutfitItems = (outfitId) => {
    getOutfitItemsByOutfitID(outfitId).then(setOutfitItems);
  };

  useEffect(() => {
    getOutfitItems(oid);
  }, [oid]);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div className="rflex">
          {outfitItems ? outfitItems.map((oitem) => (
            <OutfitItemCard key={oitem.id} itid={oitem.item_id} />)) : 'This Outfit Is Empty'}
        </div>
      </Card.Body>
    </Card>
  );
}

OutfitCard.propTypes = {
  name: PropTypes.string.isRequired,
  oid: PropTypes.number.isRequired,
};
