import React from 'react';
import PropTypes from 'prop-types';

export default function CategorySelect({ id, name }) {
  return (
    <option key={`select--${id}`} value={id}>{name}</option>
  );
}

CategorySelect.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
