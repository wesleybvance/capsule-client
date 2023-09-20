import React from 'react';
import Head from 'next/head';
import ItemForm from '../../components/Forms/ItemForm';

export default function NewItem() {
  return (
    <div className="cflex center">
      <Head>
        <title>Add an Item to Your Closet</title>
      </Head>
      <h2 className="racing-sans font30 m-3">✻ add item to closet ✻</h2>
      <ItemForm />
    </div>
  );
}
