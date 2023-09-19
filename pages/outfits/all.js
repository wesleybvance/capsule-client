import React, { useEffect, useState } from 'react';
import Link from 'next/link';
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
    <div className="cflex">
      {outfits[0] ? outfits.map((outfit) => (
        <OutfitCard key={outfit.id} name={outfit.name} oid={outfit.id} onUpdate={getUserOutfits} />)) : (<h3>You have no outfits. Click <Link passHref href="/outfits/new">here</Link> to add a new outfit to your closet!</h3>)}
    </div>
  );
}
