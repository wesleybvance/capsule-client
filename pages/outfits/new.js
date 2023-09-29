import React from 'react';
import Head from 'next/head';
import OutfitForm from '../../components/Forms/OutfitForm';
import ToastVideo from '../../components/ToastVideo';

export default function NewOutfit() {
  return (
    <div className="cflex">
      <ToastVideo />
      <Head>
        <title>Create an Outfit</title>
      </Head>
      <h2 className="racing-sans font30 center-me m-3">✰ create outfit ✰</h2>
      <OutfitForm />
    </div>
  );
}
