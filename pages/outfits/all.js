/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Form } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getOutfitsBySearch } from '../../utils/data/outfitData';
import OutfitCard from '../../components/Outfits/OutfitCard';

export default function AllOutfits() {
  const { user } = useAuth();
  const [outfits, setOutfits] = useState([]);
  const [formData, setFormData] = useState({
    searchTerm: '',
  });

  const getUserOutfits = () => {
    getOutfitsBySearch(user.id, formData.searchTerm).then(setOutfits);
  };

  useEffect(() => {
    getUserOutfits();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.searchTerm]);

  return (
    <div className="cflex center">
      <Head>
        <title>View All Outfits</title>
      </Head>
      <h2 className="racing-sans font30 m-3">✭ browse outfits ✭</h2>
      <Form.Control className="box-border borderline" type="text" name="searchTerm" required placeholder="Enter search term or tag name" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
      {outfits[0] ? outfits.map((outfit) => (
        <OutfitCard key={outfit.id} name={outfit.name} oid={outfit.id} onUpdate={getUserOutfits} />)) : (
          <div className="cflex center">
            <h1 className="handjet font30">No Outfit Results!</h1>
            <h5 className="archivo"><Link passHref href="/outfits/new">☆ Click here ☆</Link> to add a new outfit to your closet :)</h5>
          </div>
      )}
    </div>
  );
}
