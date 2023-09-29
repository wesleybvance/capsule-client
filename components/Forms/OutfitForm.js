import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import { createOutfit } from '../../utils/data/outfitData';
import { createOutfitItem } from '../../utils/data/outfitItemData';
import SelectItemCarousel from '../Items/SelectItemCarousel';

const initialState = {
  name: '',
  userId: 0,
};

export default function OutfitFormTest() {
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <div className="cflex center">
      <Form onSubmit={handleSubmit}>
        <div className="rflex center">
          <h3 className="m-3 racing-sans">name this outfit:</h3>
          <FloatingLabel
            controlId="floatingTextarea"
            label=""
            className="m-2 light-border width300"
          >
            <Form.Control required type="text" className="box-border inter-tight font20 center" name="name" onChange={({ target }) => setFormInput((prev) => ({ ...prev, [target.name]: target.value }))} />
          </FloatingLabel>
        </div>
        <div className="rflex">
          <div className="cflex">
            <SelectItemCarousel id="outfitItem5" categoryId={5} handleChange={handleSelectChange} value={outfitItemValues.outfitItem5} />
            <SelectItemCarousel id="outfitItem3" categoryId={3} handleChange={handleSelectChange} value={outfitItemValues.outfitItem3} />
          </div>
          <div className="cflex">
            <SelectItemCarousel id="outfitItem1" categoryId={1} handleChange={handleSelectChange} value={outfitItemValues.outfitItem1} />
            <SelectItemCarousel id="outfitItem2" categoryId={2} handleChange={handleSelectChange} value={outfitItemValues.outfitItem2} />
            <SelectItemCarousel id="outfitItem4" categoryId={4} handleChange={handleSelectChange} value={outfitItemValues.outfitItem4} />
          </div>
        </div>
        <div className="cflex center">
          <Button variant="light" className="inter-tight btn-outline-dark m-4 d-inline-block box-border" type="submit">Create Outfit</Button>
        </div>
      </Form>
    </div>
  );
}
