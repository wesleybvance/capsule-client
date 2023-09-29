/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Button, Toast } from 'react-bootstrap';
import Image from 'next/image';
import { useAuth } from '../utils/context/authContext';

export default function ToastVideo() {
  const { user } = useAuth();
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className="absolute">
      <Toast className="toast m-4 toast-vid fixed" show={show} onClose={toggleShow}>
        <Toast.Header>
          <Image width="20" height="20" src={user.profile_image} />
          <strong className="me-auto m-2">capsule</strong>
        </Toast.Header>
        <Toast.Body>
          <Image width="700" height="350" src="https://media4.giphy.com/media/l0IulEDITBSPyt1BK/giphy.gif" />
        </Toast.Body>
      </Toast>
      <Button onClick={toggleShow} className="mb-5 toast-btn" variant="light">♡</Button>
    </div>
  );
}
