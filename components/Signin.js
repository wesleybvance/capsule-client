import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="sign-in-body text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        margin: '0 auto',
        zIndex: 1,
        minHeight: '25rem',
        width: '100%',
        minWidth: '30rem',
        paddingBlock: '0 5rem',
      }}
    >
      <h1 className="racing-sans font100">✰ capsule ✰</h1>
      <Button type="button" variant="light" size="lg" className="light-border copy-btn" onClick={signIn}>
        log in
      </Button>
    </div>
  );
}

export default Signin;
