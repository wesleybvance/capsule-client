import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
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
    <div className="cflex center">
      <Head>
        <title>View Outfit</title>
      </Head>
      <h2 className="racing-sans font30 m-3">♡ view outfit ♡</h2>
      {outfit ? (<OutfitPage name={outfit.name} outfitId={outfit.id} />) : ''}
    </div>
  );
}
