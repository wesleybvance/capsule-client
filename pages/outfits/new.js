import React from 'react';
import Head from 'next/head';
import OutfitForm from '../../components/Forms/OutfitForm';

export default function NewOutfit() {
  return (
    <div className="cflex center">
      <Head>
        <title>Create an Outfit</title>
      </Head>
      <h2 className="racing-sans font30 m-3">✰ create outfit ✰</h2>
      <OutfitForm />
    </div>
  );
}
