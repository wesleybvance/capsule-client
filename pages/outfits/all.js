import React, { useEffect, useState } from 'react';
import { useAuth } from '../../utils/context/authContext';
import { getOutfitsByUser } from '../../utils/data/outfitData';
import OutfitCard from '../../components/Outfits/OutfitCard';

export default function AllOutfits() {
  const { user } = useAuth();
  const [outfits, setOutfits] = useState([]);

  const getUserOutfits = (uid) => {
    getOutfitsByUser(uid).then(setOutfits);
  };

  useEffect(() => {
    getUserOutfits(user.id);
    console.warn(outfits);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="rflex">
      {outfits ? outfits.map((outfit) => (
        <OutfitCard key={outfit.id} name={outfit.name} oid={outfit.id} />)) : 'You have no Outfits'}
    </div>
  );
}
