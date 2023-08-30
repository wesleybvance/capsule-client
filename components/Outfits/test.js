import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import OutfitItemSelect from '../Items/OutfitItemSelect';

const initialOutfitState = {
  name: '',
  id: 0,
  userId: 0,

};

export default function UpdateTest({ outfit, outfitItems }) {
  const [outfitInput, setOutfitInput] = useState(initialOutfitState);
  const [item1Input, setItem1Input] = useState({
    itemId: 0,
  });
  const [item2Input, setItem2Input] = useState({
    itemId: 0,
  });
  const [item3Input, setItem3Input] = useState({
    itemId: 0,
  });
  const [item4Input, setItem4Input] = useState({
    itemId: 0,
  });
  const [item5Input, setItem5Input] = useState({
    itemId: 0,
  });
  const { user } = useAuth();

  const handleOutfitChange = (e) => {
    const { name, value } = e.target;
    setOutfitInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelect1Change = (id, selectedValue) => {
    setItem1Input((prevValues) => ({
      ...prevValues,
      [id]: selectedValue,
    }));
  };

  const handleSelect2Change = (id, selectedValue) => {
    setItem2Input((prevValues) => ({
      ...prevValues,
      [id]: selectedValue,
    }));
  };

  const handleSelect3Change = (id, selectedValue) => {
    setItem3Input((prevValues) => ({
      ...prevValues,
      [id]: selectedValue,
    }));
  };

  const handleSelect4Change = (id, selectedValue) => {
    setItem4Input((prevValues) => ({
      ...prevValues,
      [id]: selectedValue,
    }));
  };

  const handleSelect5Change = (id, selectedValue) => {
    setItem5Input((prevValues) => ({
      ...prevValues,
      [id]: selectedValue,
    }));
  };

  useEffect(() => {
    if (outfit.id) {
      setOutfitInput({
        name: outfit.name,
        userId: user.id,
      });
    }
    if (outfitItems) {
      outfitItems.forEach((outfitItem) => {
        if (outfitItem.item_id.category_id === 1) {
          setItem1Input({
            itemId: outfitItem.item_id.id,
          });
        }
        if (outfitItem.item_id.category_id.id === 2) {
          setItem2Input({
            itemId: outfitItem.item_id.id,
          });
        }
        if (outfitItem.item_id.category_id.id === 3) {
          setItem3Input({
            itemId: outfitItem.item_id.id,
          });
        }
        if (outfitItem.item_id.category_id.id === 4) {
          setItem4Input({
            itemId: outfitItem.item_id.id,
          });
        }
        if (outfitItem.item_id.category_id.id === 5) {
          setItem5Input({
            itemId: outfitItem.item_id.id,
          });
        }
      });
    }
  }, [outfit.id, user.id, outfit.name, outfitItems]);

  return (
    <div>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Outfit Name"
        className="mt-3"
      >
        <Form.Control required type="text" placeholder="Shopping at the Mall" name="name" onChange={handleOutfitChange} value={outfitInput.name} />
      </FloatingLabel>
      <OutfitItemSelect id="itemId" name="itemId" value={item1Input.itemId} categoryId={1} handleChange={handleSelect1Change} />
      <OutfitItemSelect id="itemId" name="itemId" value={item2Input.itemId} categoryId={2} handleChange={handleSelect2Change} />
      <OutfitItemSelect id="itemId" name="itemId" value={item3Input.itemId} categoryId={3} handleChange={handleSelect3Change} />
      <OutfitItemSelect id="itemId" name="itemId" value={item4Input.itemId} categoryId={4} handleChange={handleSelect4Change} />
      <OutfitItemSelect id="itemId" name="itemId" value={item5Input.itemId} categoryId={5} handleChange={handleSelect5Change} />
    </div>
  );
}

UpdateTest.propTypes = {
  outfit: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    userId: PropTypes.number,
  }),
  // eslint-disable-next-line react/forbid-prop-types
  outfitItems: PropTypes.array,
};

UpdateTest.defaultProps = {
  outfit: initialOutfitState,
  outfitItems: [],
};
