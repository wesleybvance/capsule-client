/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getItemsByUser } from '../../utils/data/itemData';

export default function SelectItemCarousel() {
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState([]);
  const { user } = useAuth();

  const getItems = () => {
    getItemsByUser(user.id).then(setItems);
  };

  useEffect(() => {
    getItems();
  }, [user]);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel variant="dark" className="carousel" slide activeIndex={index} onSelect={handleSelect}>
        {items ? items.map((item, selectedIndex) => (
          // eslint-disable-next-line react/no-array-index-key
          <Carousel.Item className="text-center" key={selectedIndex}>
            <Image
              className="caropic"
              src={item.photo_url}
              alt={item.name}
            />
            <Carousel.Caption>
              <p>{item.name}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )) : ''}
      </Carousel>
    </div>
  );
}
