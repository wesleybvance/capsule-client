/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
  Carousel, FloatingLabel, Form, Image,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useAuth } from '../../utils/context/authContext';
import { getItemsByUserCategory } from '../../utils/data/itemData';
import { getSingleCategory } from '../../utils/data/categoryData';

export default function SelectItemCarousel({
  id, value, categoryId, handleChange, selectedItemId,
}) {
  const [category, setCategory] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [selectedDropdownValue, setSelectedDropdownValue] = useState(value);
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState([]);
  const { user } = useAuth();

  const getCategoryInfo = (catid) => {
    getSingleCategory(catid).then(setCategory);
  };

  const getCategoryItems = (catid) => {
    getItemsByUserCategory(user.id, catid).then(setItems);
  };

  const getCarouselItems = (selectedItem) => {
    const selectedIndex = items.findIndex((item) => item?.id === selectedItem);
    setIndex(selectedIndex >= 0 ? selectedIndex + 1 : 0);
  };

  useEffect(() => {
    getCategoryInfo(categoryId);
    getCategoryItems(categoryId);
    getCarouselItems(selectedItemId);
  }, [selectedItemId]);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    setSelectedDropdownValue(items[Number(selectedIndex - 1)]?.id || 0);
    handleChange(id, items[Number(selectedIndex - 1)]?.id || 0);
  };

  const handleDropdownChange = (newId, newValue) => {
    const val = Number(newValue);
    setSelectedDropdownValue(val);
    const selectedIndex = items.findIndex((item) => item.id === val);
    setIndex(selectedIndex + 1);
    handleChange(id, val);
  };

  return (
    <div className="cflex m-3">
      <h5>{category.name}</h5>
      <Carousel interval={null} variant="dark" className="carousel" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item value={0} className="text-center">
          <Image
            className="caropic"
            src="https://i.pinimg.com/736x/01/e1/02/01e102dbde9816612d607b72426efb4a.jpg"
          />
          <Carousel.Caption>
            <p>None</p>
          </Carousel.Caption>
        </Carousel.Item>
        {items ? items.map((item, selectedIndex) => (
          // eslint-disable-next-line react/no-array-index-key
          <Carousel.Item className="text-center" value={Number(item.id)} key={selectedIndex}>
            <Image
              className="caropic"
              src={item.photo_url}
              alt={item.name}
            />
          </Carousel.Item>
        )) : ''}
      </Carousel>
      <div className="item-dropd">
        <FloatingLabel controlId="floatingSelect" label={category.name}>
          <Form.Select value={value} onChange={(e) => handleDropdownChange(id, e.target.value)} className="mt-4" aria-label="">
            <option value={0}>None</option>
            {items ? items.map((item) => (<option key={`item--${item.id}`} value={Number(item.id)}>{item.name}</option>)) : (<option>You don't have any {category.name} in your closet yet.</option>)}
          </Form.Select>
        </FloatingLabel>
      </div>
    </div>
  );
}

SelectItemCarousel.propTypes = {
  categoryId: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  selectedItemId: PropTypes.number,
};

SelectItemCarousel.defaultProps = {
  selectedItemId: 0,
};
