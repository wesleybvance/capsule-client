import React, { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useAuth } from '../../utils/context/authContext';
import { getSingleOutfit, updateOutfit } from '../../utils/data/outfitData';
import { getOutfitItemsByOutfitID, updateOutfitItem } from '../../utils/data/outfitItemData';
import OutfitItemSelect from '../Items/OutfitItemSelect';

const initialState = {
  name: '',
  userId: 0,
};

export default function EditOutfitForm({ outfitId }) {
  const { user } = useAuth();
  const router = useRouter();
  const [formInput, setFormInput] = useState(initialState);
  const [outfit, setOutfit] = useState({});
  const [outfitItems, setOutfitItems] = useState([]);
  const [outfitItemValues, setOutfitItemValues] = useState({
    outfitItem1: 0,
    outfitItem2: 0,
    outfitItem3: 0,
    outfitItem4: 0,
    outfitItem5: 0,
  });

  const getOutfit = (id) => {
    getSingleOutfit(id).then(setOutfit);
  };

  const getOutfitItems = (id) => {
    getOutfitItemsByOutfitID(id).then(setOutfitItems);
  };

  useEffect(() => {
    getOutfit(outfitId);
    getOutfitItems(outfitId);
    const newInput = {
      ...formInput, name: outfit.name,
    };
    console.warn(outfit);
    console.warn(outfitItems);
    setFormInput(newInput);
    if (outfitItems) {
      outfitItems.forEach((outfitItem) => {
        if (outfitItem.item_id.category_id === 1) {
          const updatedOutfitItem = {
            ...outfitItemValues, outfitItem1: outfitItem.item_id.id,
          };
          setOutfitItemValues(updatedOutfitItem);
        }
        if (outfitItem.item_id.category_id.id === 2) {
          const updatedOutfitItem = {
            ...outfitItemValues, outfitItem2: outfitItem.item_id.id,
          };
          setOutfitItemValues(updatedOutfitItem);
        }
        if (outfitItem.item_id.category_id.id === 3) {
          const updatedOutfitItem = {
            ...outfitItemValues, outfitItem3: outfitItem.item_id.id,
          };
          setOutfitItemValues(updatedOutfitItem);
        }
        if (outfitItem.item_id.category_id.id === 4) {
          const updatedOutfitItem = {
            ...outfitItemValues, outfitItem4: outfitItem.item_id.id,
          };
          setOutfitItemValues(updatedOutfitItem);
        }
        if (outfitItem.item_id.category_id.id === 5) {
          const updatedOutfitItem = {
            ...outfitItemValues, outfitItem5: outfitItem.item_id.id,
          };
          setOutfitItemValues(updatedOutfitItem);
        }
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectChange = (id, selectedValue) => {
    setOutfitItemValues((prevValues) => ({
      ...prevValues,
      [id]: selectedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn(outfitItemValues);
    const outfitPayload = {
      name: formInput.name,
      userId: user.id,
    };
    updateOutfit(outfitPayload).then(() => {
      if (outfitItemValues.outfitItem1) {
        updateOutfitItem(outfitItemValues.outfitItem1);
      }
      if (outfitItemValues.outfitItem2) {
        updateOutfitItem(outfitItemValues.outfitItem2);
      }
      if (outfitItemValues.outfitItem3) {
        updateOutfitItem(outfitItemValues.outfitItem3);
      }
      if (outfitItemValues.outfitItem4) {
        updateOutfitItem(outfitItemValues.outfitItem4);
      }
      if (outfitItemValues.outfitItem5) {
        updateOutfitItem(outfitItemValues.outfitItem5);
      }
      router.push('/outfits/all');
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Outfit Name"
          className="mt-3"
        >
          <Form.Control type="text" placeholder="Shopping at the Mall" name="name" onChange={({ target }) => setFormInput((prev) => ({ ...prev, [target.name]: target.value }))} />
        </FloatingLabel>
        <OutfitItemSelect id="outfitItem1" categoryId={1} handleChange={handleSelectChange} value={outfitItemValues.outfitItem1} />
        <OutfitItemSelect id="outfitItem2" categoryId={2} handleChange={handleSelectChange} value={outfitItemValues.outfitItem2} />
        <OutfitItemSelect id="outfitItem3" categoryId={3} handleChange={handleSelectChange} value={outfitItemValues.outfitItem3} />
        <OutfitItemSelect id="outfitItem4" categoryId={4} handleChange={handleSelectChange} value={outfitItemValues.outfitItem4} />
        <OutfitItemSelect id="outfitItem5" categoryId={5} handleChange={handleSelectChange} value={outfitItemValues.outfitItem5} />
        <Button variant="light" className="btn-outline-dark mt-4" type="submit">Create Outfit</Button>
      </Form>
    </div>
  );
}

EditOutfitForm.propTypes = {
  outfitId: PropTypes.number.isRequired,
};
