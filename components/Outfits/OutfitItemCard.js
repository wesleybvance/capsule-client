/* eslint-disable react/forbid-prop-types */
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function OutfitItemCard({ itid }) {
  return (
    <Card className="width100 cflex margin5" style={{ width: '18rem' }}>
      <Card.Img className="outfit-item-image width100" variant="top" src={itid.photo_url} />
      <Card.Body className="outfit-item-card-body">
        <Card.Title className="small-text">{itid.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

OutfitItemCard.propTypes = {
  itid: PropTypes.object.isRequired,
};
