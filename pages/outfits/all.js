/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useAuth } from '../../utils/context/authContext';
import { getOutfitsByUser } from '../../utils/data/outfitData';
import OutfitCard from '../../components/Outfits/OutfitCard';

export default function AllOutfits() {
  const { user } = useAuth();
  const [outfits, setOutfits] = useState([]);

  const getUserOutfits = () => {
    getOutfitsByUser(user.id).then(setOutfits);
  };

  useEffect(() => {
    getUserOutfits();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="cflex center m-5">
      <Head>
        <title>View All Outfits</title>
      </Head>
      <h2 className="racing-sans font30 m-3">✭ browse outfits ✭</h2>
      {outfits[0] ? outfits.map((outfit) => (
        <OutfitCard key={outfit.id} name={outfit.name} oid={outfit.id} onUpdate={getUserOutfits} />)) : (
          <div className="cflex center">
            <h1 className="handjet font30">You don't have any outfits!</h1>
            <h5 className="archivo"><Link passHref href="/outfits/new">☆ Click here ☆</Link> to add a new outfit to your closet :)</h5>
          </div>
      )}
    </div>
  );
}
