import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Button, Form, Image, Toast,
} from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';

export default function CursorForm({ handleRadioChange }) {
  const { user } = useAuth();
  const [selectedOption, setSelectedOption] = useState('');
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };

  const handleCursorChange = (e) => {
    setSelectedOption(e.target.value);
    handleRadioChange(e.target.value);
    console.warn(selectedOption);
  };

  return (
    <>
      <Toast className="center-me m-2 toast-vid" show={show} onClose={toggleShow} position="bottom-center">
        <Toast.Header>
          <Image width="20" height="20" src={user.profile_image} />
          <strong className="me-auto m-2">choose ur cursor :)</strong>
        </Toast.Header>
        <Form className="rflex center">
          <Form.Check inline type="radio" label={<Image src="http://www.rw-designer.com/cursor-view/170652.png" />} value="cursor" checked={selectedOption === 'cursor'} onChange={handleCursorChange} />
          <Form.Check inline type="radio" label={<Image src="https://cursors3.totallyfreecursors.com/thumbnails/apple-tm.gif" />} value="cursor1" checked={selectedOption === 'cursor1'} onChange={handleCursorChange} />
          <Form.Check inline type="radio" label={<Image src="https://cur.cursors-4u.net/cursors/cur-1/cur8.png" />} value="cursor2" checked={selectedOption === 'cursor2'} onChange={handleCursorChange} />
          <Form.Check inline type="radio" label={<Image src="https://cur.cursors-4u.net/special/spe-2/spe191.png" />} value="cursor3" checked={selectedOption === 'cursor3'} onChange={handleCursorChange} />

        </Form>
      </Toast>
      <Button onClick={toggleShow} className="mb-5 toast-btn" variant="light">✌︎</Button>
    </>
  );
}

CursorForm.propTypes = {
  handleRadioChange: PropTypes.func.isRequired,
};
