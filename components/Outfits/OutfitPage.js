/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Toast } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { getOutfitItemsByOutfitID } from '../../utils/data/outfitItemData';
import { deleteOutfit } from '../../utils/data/outfitData';
import OutfitItemCard from './OutfitItemCard';

export default function OutfitPage({ name, outfitId }) {
  const router = useRouter();
  const [outfitItems, setOutfitItems] = useState([]);
  const [position, setPosition] = useState('top-start');
  const [show, setShow] = useState(true);
  const toggleShow = () => {
    setShow(!show);
  };

  const getOutfitItems = (id) => {
    getOutfitItemsByOutfitID(id).then(setOutfitItems);
  };

  useEffect(() => {
    getOutfitItems(outfitId);
  }, [outfitId]);

  return (
    <div className="toast-cont cflex">
      <Toast className="m-3 outfit-toast center center-me cflex" position="middle-center" show={show} onClose={toggleShow}>
        <Toast.Header className="toast-head rflex">
          <h3 className="archivo center-me">{name}</h3>
        </Toast.Header>
        <Toast.Body className="rflex center"> {outfitItems[0] ? outfitItems.map((outfitItem) => (
          <OutfitItemCard key={outfitItem.id} itid={outfitItem.item_id} />)) : <h3>This Outfit has no items. Click Below to add some!</h3>}
        </Toast.Body>
        <Button onClick={(e) => router.replace(`/outfits/edit/${outfitId}`)} variant="dark">Edit Outfit</Button>
      </Toast>
      <Button onClick={toggleShow} className="mb-5 toast-btn" variant="light">☆</Button>
    </div>
  );
}

OutfitPage.propTypes = {
  name: PropTypes.string.isRequired,
  outfitId: PropTypes.number.isRequired,
};
