import React, { useEffect, useState } from 'react';
// import { Carousel } from 'react-bootstrap';
// import { useAuth } from '../utils/context/authContext';
// import ItemCarousel from '../components/Items/ItemCarousel';
import { getAllItems } from '../utils/data/itemData';
import ItemCard from '../components/Items/ItemCard';

export default function Closet() {
  // const { user } = useAuth();
  const [items, setItems] = useState([]);

  const getClosetItems = () => {
    getAllItems().then(setItems);
    console.warn(items);
  };

  useEffect(() => {
    getClosetItems();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {items ? items.map((item) => (
        <ItemCard key={item.id} name={item.name} categoryId={item.category_id} photoUrl={item.photo_url} />)) : 'You have no items'}
    </div>
    // <Carousel className="mt-5">
    //   {items ? items.map((item) => (
    //     <ItemCarousel key={item.id} name={item.name} categoryId={item.category_id} photoUrl={item.photo_url} />
    //   )) : 'You have no items'}
    // </Carousel>
  );
}
