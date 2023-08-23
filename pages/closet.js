import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
// import { useAuth } from '../utils/context/authContext';
import ItemCarousel from '../components/Items/ItemCarousel';
import { getAllItems } from '../utils/data/itemData';

export default function Closet() {
  // const { user } = useAuth();
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState([]);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const getClosetItems = () => {
    getAllItems().then(setItems);
  };

  useEffect(() => {
    getClosetItems();
  });

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {items ? items.map((item) => (
        <ItemCarousel key={item.id} name={item.name} categoryId={item.category_id} photoUrl={item.photo_url} />
      )) : 'You have no items'}
    </Carousel>
  );
}
