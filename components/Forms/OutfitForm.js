import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import ItemSelect from '../Items/OutfitItemSelect';
import { useAuth } from '../../utils/context/authContext';
import { createOutfit } from '../../utils/data/outfitData';
import { createOutfitItem } from '../../utils/data/outfitItemData';

const initialState = {
  name: '',
  userId: 0,
};

export default function OutfitForm() {
  const { user } = useAuth();
  const router = useRouter();
  const [formInput, setFormInput] = useState(initialState);
  const [outfitItemValues, setOutfitItemValues] = useState({
    outfitItem1: 0,
    outfitItem2: 0,
    outfitItem3: 0,
    outfitItem4: 0,
    outfitItem5: 0,
  });

  const handleSelectChange = (id, selectedValue) => {
    setOutfitItemValues((prevValues) => ({
      ...prevValues,
      [id]: selectedValue,
    }));
    console.warn(selectedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn(outfitItemValues);
    const outfitPayload = {
      name: formInput.name,
      userId: user.id,
    };
    createOutfit(outfitPayload).then((data) => {
      if (outfitItemValues.outfitItem1) {
        const payload = {
          outfitId: data.id,
          itemId: outfitItemValues.outfitItem1,
        };
        console.warn(payload);
        createOutfitItem(payload);
      }
      if (outfitItemValues.outfitItem2) {
        const payload = {
          outfitId: data.id,
          itemId: outfitItemValues.outfitItem2,
        };
        createOutfitItem(payload);
      }
      if (outfitItemValues.outfitItem3) {
        const payload = {
          outfitId: data.id,
          itemId: outfitItemValues.outfitItem3,
        };
        createOutfitItem(payload);
      }
      if (outfitItemValues.outfitItem4) {
        const payload = {
          outfitId: data.id,
          itemId: outfitItemValues.outfitItem4,
        };
        createOutfitItem(payload);
      }
      if (outfitItemValues.outfitItem5) {
        const payload = {
          outfitId: data.id,
          itemId: outfitItemValues.outfitItem5,
        };
        console.warn(payload);
        createOutfitItem(payload);
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
          <Form.Control required type="text" placeholder="Shopping at the Mall" name="name" onChange={({ target }) => setFormInput((prev) => ({ ...prev, [target.name]: target.value }))} />
        </FloatingLabel>
        <ItemSelect id="outfitItem1" categoryId={1} handleChange={handleSelectChange} value={outfitItemValues.outfitItem1} />
        <ItemSelect id="outfitItem2" categoryId={2} handleChange={handleSelectChange} value={outfitItemValues.outfitItem2} />
        <ItemSelect id="outfitItem3" categoryId={3} handleChange={handleSelectChange} value={outfitItemValues.outfitItem3} />
        <ItemSelect id="outfitItem4" categoryId={4} handleChange={handleSelectChange} value={outfitItemValues.outfitItem4} />
        <ItemSelect id="outfitItem5" categoryId={5} handleChange={handleSelectChange} value={outfitItemValues.outfitItem5} />
        <Button variant="light" className="btn-outline-dark mt-4" type="submit">Create Outfit</Button>
      </Form>
    </div>
  );
}
