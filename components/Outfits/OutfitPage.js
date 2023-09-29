/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Card, Form, Toast,
} from 'react-bootstrap';
import { useRouter } from 'next/router';
import { getOutfitItemsByOutfitID } from '../../utils/data/outfitItemData';
import { deleteOutfit } from '../../utils/data/outfitData';
import OutfitItemCard from './OutfitItemCard';

export default function OutfitPage({ name, outfitId }) {
  const router = useRouter();
  const [outfitItems, setOutfitItems] = useState([]);
  const [position, setPosition] = useState('top-start');

  const getOutfitItems = (id) => {
    getOutfitItemsByOutfitID(id).then(setOutfitItems);
  };

  useEffect(() => {
    getOutfitItems(outfitId);
  }, [outfitId]);

  return (
    <Card className="m-3 box-border borderline p-2 toast-cont center center-me cflex">
      <Card.Title className="toast-head rflex center m-4">
        <h3 className="archivo center-me">{name}</h3>
      </Card.Title>
      <Card.Text className="rflex center"> {outfitItems[0] ? outfitItems.map((outfitItem) => (
        <OutfitItemCard text="big-text" key={outfitItem.id} width="width299" itid={outfitItem.item_id} />)) : <h3>This Outfit has no items. Click below to add some!</h3>}
      </Card.Text>
      <Button className="edit-btn" onClick={(e) => router.replace(`/outfits/edit/${outfitId}`)} variant="dark">edit</Button>
    </Card>
  );
}

OutfitPage.propTypes = {
  name: PropTypes.string.isRequired,
  outfitId: PropTypes.number.isRequired,
};
