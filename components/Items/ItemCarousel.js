import { Carousel, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function ItemCarousel({
  photoUrl, name,
}) {
  return (
    <Carousel.Item>
      <Image src={photoUrl} />
      <Carousel.Caption>
        <h2>{name}</h2>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

ItemCarousel.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
};
