/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import OutfitItemSelect from '../Items/OutfitItemSelect';
import { updateOutfit } from '../../utils/data/outfitData';
import { createOutfitItem, deleteOutfitItem, updateOutfitItem } from '../../utils/data/outfitItemData';

const initialOutfitState = {
  name: '',
  id: 0,
  userId: 0,
};

export default function UpdateOutfitFormOld({ outfit, outfitItems }) {
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
  const router = useRouter();

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
        id: outfit.id,
      });
    }
    if (outfitItems[0]) {
      outfitItems.forEach((outfitItem) => {
        if (outfitItem.item_id.category_id.id === 1) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    updateOutfit(outfitInput);
    // first check for pre-existing outfitItem inputs that have either 1. changed to none (delete), 2. stayed the same (do nothing), or changed (update outfitItem)
    const categoryArray = [1, 2, 3, 4, 5];
    if (outfitItems) {
      outfitItems.forEach((outfitItem) => {
        if (outfitItem.item_id.category_id.id === 1) {
          let i = 0;
          while (i < categoryArray.length) {
            if (categoryArray[i] === 1) {
              categoryArray.splice(i, 1);
            } else {
              i++;
            }
          }

          const input = parseInt(item1Input.itemId, 10);
          if (input === 0) {
            deleteOutfitItem(outfitItem.id);
          } else if (input === outfitItem.item_id.id) {
            console.warn('none');
          } else {
            const payload = {
              id: outfitItem.id,
              itemId: input,
              outfitId: outfit.id,
            };
            updateOutfitItem(payload);
          }
        }
        if (outfitItem.item_id.category_id.id === 2) {
          let i = 0;
          while (i < categoryArray.length) {
            if (categoryArray[i] === 2) {
              categoryArray.splice(i, 1);
            } else {
              i++;
            }
          }
          const input = parseInt(item2Input.itemId, 10);
          if (input === 0) {
            deleteOutfitItem(outfitItem.id);
          } else if (input === outfitItem.item_id.id) {
            console.warn('none');
          } else {
            const payload = {
              id: outfitItem.id,
              itemId: input,
              outfitId: outfit.id,
            };
            updateOutfitItem(payload);
          }
        }
        if (outfitItem.item_id.category_id.id === 3) {
          let i = 0;
          while (i < categoryArray.length) {
            if (categoryArray[i] === 3) {
              categoryArray.splice(i, 1);
            } else {
              i++;
            }
          }
          const input = parseInt(item3Input.itemId, 10);
          if (input === 0) {
            deleteOutfitItem(outfitItem.id);
          } else if (input === outfitItem.item_id.id) {
            console.warn('none');
          } else {
            const payload = {
              id: outfitItem.id,
              itemId: input,
              outfitId: outfit.id,
            };
            updateOutfitItem(payload);
          }
        }
        if (outfitItem.item_id.category_id.id === 4) {
          let i = 0;
          while (i < categoryArray.length) {
            if (categoryArray[i] === 4) {
              categoryArray.splice(i, 1);
            } else {
              i++;
            }
          }

          const input = parseInt(item4Input.itemId, 10);
          if (input === 0) {
            deleteOutfitItem(outfitItem.id);
          } else if (input === outfitItem.item_id.id) {
            console.warn('none');
          } else {
            const payload = {
              id: outfitItem.id,
              itemId: input,
              outfitId: outfit.id,
            };
            updateOutfitItem(payload);
          }
        }
        if (outfitItem.item_id.category_id.id === 5) {
          console.warn(categoryArray);
          console.warn('i SHOULD be removing 5 from the array bc an outfitItem w category 5 exists');
          let i = 0;
          while (i < categoryArray.length) {
            if (categoryArray[i] === 5) {
              categoryArray.splice(i, 1);
            } else {
              i++;
            }
          }
          const input = parseInt(item5Input.itemId, 10);
          if (input === 0) {
            deleteOutfitItem(outfitItem.id);
          } else if (input === outfitItem.item_id.id) {
            console.warn('none');
          } else {
            const payload = {
              id: outfitItem.id,
              itemId: input,
              outfitId: outfit.id,
            };
            updateOutfitItem(payload);
          }
        }
      });
    }
    console.warn(categoryArray);
    categoryArray.forEach((num) => {
      if (num === 1) {
        const itid = parseInt(item1Input.itemId, 10);
        if (itid) {
          const payload = {
            itemId: itid,
            outfitId: outfit.id,
          };
          createOutfitItem(payload);
        }
      } else if (num === 2) {
        const itid = parseInt(item2Input.itemId, 10);
        if (itid) {
          const payload = {
            itemId: itid,
            outfitId: outfit.id,
          };
          createOutfitItem(payload);
        }
      } else if (num === 3) {
        const itid = parseInt(item3Input.itemId, 10);
        if (itid) {
          const payload = {
            itemId: itid,
            outfitId: outfit.id,
          };
          createOutfitItem(payload);
        }
      } else if (num === 4) {
        const itid = parseInt(item4Input.itemId, 10);
        if (itid) {
          const payload = {
            itemId: itid,
            outfitId: outfit.id,
          };
          createOutfitItem(payload);
        }
      } else if (num === 5) {
        const itid = parseInt(item5Input.itemId, 10);
        if (itid) {
          const payload = {
            itemId: itid,
            outfitId: outfit.id,
          };
          createOutfitItem(payload);
        }
      }
    });
    router.push('/outfits/all');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Outfit Name"
          className="mt-3"
        >
          <Form.Control required type="text" placeholder="Shopping at the Mall" name="name" onChange={handleOutfitChange} value={outfitInput.name} />
        </FloatingLabel>
        {/* <div className="rflex">
          <div className="cflex">
            <SelectItemCarousel id="itemId" name="itemId" value={item5Input.itemId} categoryId={5} handleChange={handleSelect5Change} />
            <SelectItemCarousel id="itemId" name="itemId" value={item4Input.itemId} categoryId={4} handleChange={handleSelect4Change} />
          </div>
          <div className="cflex">
            <SelectItemCarousel id="itemId" name="itemId" value={item1Input.itemId} categoryId={1} handleChange={handleSelect1Change} />
            <SelectItemCarousel id="itemId" name="itemId" value={item2Input.itemId} categoryId={2} handleChange={handleSelect2Change} />
            <SelectItemCarousel id="itemId" name="itemId" value={item3Input.itemId} categoryId={3} handleChange={handleSelect3Change} />
          </div>
        </div> */}
        <OutfitItemSelect id="itemId" name="itemId" value={item1Input.itemId} categoryId={1} handleChange={handleSelect1Change} />
        <OutfitItemSelect id="itemId" name="itemId" value={item2Input.itemId} categoryId={2} handleChange={handleSelect2Change} />
        <OutfitItemSelect id="itemId" name="itemId" value={item3Input.itemId} categoryId={3} handleChange={handleSelect3Change} />
        <OutfitItemSelect id="itemId" name="itemId" value={item4Input.itemId} categoryId={4} handleChange={handleSelect4Change} />
        <OutfitItemSelect id="itemId" name="itemId" value={item5Input.itemId} categoryId={5} handleChange={handleSelect5Change} />
        <Button variant="light" className="btn-outline-dark mt-4" type="submit">Update Outfit</Button>
      </Form>
    </div>
  );
}

UpdateOutfitFormOld.propTypes = {
  outfit: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    userId: PropTypes.number,
  }),
  // eslint-disable-next-line react/forbid-prop-types
  outfitItems: PropTypes.array,
};

UpdateOutfitFormOld.defaultProps = {
  outfit: initialOutfitState,
  outfitItems: [],
};
