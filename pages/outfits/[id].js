import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import OutfitPage from '../../components/Outfits/OutfitPage';
import { getSingleOutfit } from '../../utils/data/outfitData';

export default function ViewOutfit() {
  const [outfit, setOutfit] = useState();
  const router = useRouter();
  const oid = router.query.id;

  const getOutfit = () => {
    getSingleOutfit(oid).then(setOutfit);
  };

  useEffect(() => {
    getOutfit();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {outfit ? (<OutfitPage name={outfit.name} outfitId={outfit.id} />) : ''}
    </div>
  );
}
