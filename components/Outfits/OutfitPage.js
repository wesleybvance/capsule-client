/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { getOutfitItemsByOutfitID } from '../../utils/data/outfitItemData';
import { deleteOutfit } from '../../utils/data/outfitData';
import OutfitItemCard from './OutfitItemCard';

export default function OutfitPage({ name, outfitId }) {
  const router = useRouter();
  const [outfitItems, setOutfitItems] = useState([]);

  const getOutfitItems = (id) => {
    getOutfitItemsByOutfitID(id).then(setOutfitItems);
  };

  useEffect(() => {
    getOutfitItems(outfitId);
  }, [outfitId]);

  return (
    <div>
      <h3>{name}</h3>
      <div className="rflex">
        {outfitItems ? outfitItems.map((outfitItem) => (
          <OutfitItemCard key={outfitItem.id} itid={outfitItem.item_id} />)) : 'This Outfit has no items. Click Below to add some!'}
      </div>
      <Button onClick={(e) => router.replace(`/outfits/edit/${outfitId}`)} variant="dark">Edit Outfit</Button>
    </div>
  );
}

OutfitPage.propTypes = {
  name: PropTypes.string.isRequired,
  outfitId: PropTypes.number.isRequired,
};
