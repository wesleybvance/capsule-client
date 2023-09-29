/* eslint-disable react/forbid-prop-types */
import { Card, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function OutfitItemCard({ itid, width, text }) {
  return (
    <Card className={`${width} box-border cflex margin5`}>
      {/* <Card.Img className="outfit-item-image width100" variant="top" src={itid.photo_url} /> */}
      <Image className={`outfit-item-image box-border ${width}`} variant="top" thumbnail src={itid.photo_url} />
      <Card.Body className="outfit-item-card-body flex center">
        <Card.Title className={text}>{itid.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

OutfitItemCard.propTypes = {
  itid: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
