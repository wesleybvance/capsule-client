import React, { useEffect, useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getSingleCategory } from '../../utils/data/categoryData';

export default function ItemCarousel({
  categoryId, photoUrl, name,
}) {
  const [category, setCategory] = useState();

  const getCategoryInfo = (id) => {
    getSingleCategory(id).then(setCategory);
  };

  useEffect(() => {
    getCategoryInfo(categoryId);
  });

  return (
    <Carousel.Item>
      <Image src={photoUrl} />
      <Carousel.Caption>
        <h2>{name}</h2>
        {category ? (<h5>{category.name}</h5>) : ''}
      </Carousel.Caption>
    </Carousel.Item>
  );
}

ItemCarousel.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  categoryId: PropTypes.number.isRequired,
};
