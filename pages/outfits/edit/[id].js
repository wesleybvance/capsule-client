/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import EditOutfitForm from '../../../components/Forms/EditOutfitForm';
import Head from 'next/head';
import { getSingleOutfit } from '../../../utils/data/outfitData';
import { getOutfitItemsByOutfitID } from '../../../utils/data/outfitItemData';
import UpdateOutfitForm from '../../../components/Forms/UpdateOutfitForm';

export default function EditOutfit() {
  const router = useRouter();
  const [outfit, setOutfit] = useState({});
  const [outfitItems, setOutfitItems] = useState([]);
  const outfitId = router.query.id;

  const getOutfitInfo = (oid) => {
    getSingleOutfit(oid).then(setOutfit);
  };

  const getOutfitItemInfo = (oid) => {
    getOutfitItemsByOutfitID(oid).then(setOutfitItems);
  };

  useEffect(() => {
    getOutfitInfo(outfitId);
    getOutfitItemInfo(outfitId);
    console.warn(outfitItems);
  }, [outfitId]);

  return (
    <div className="cflex center">
      <Head>
        <title>View All Outfits</title>
      </Head>
      <h2 className="racing-sans font30 m-3">✰ update outfit ✰</h2>
      <UpdateOutfitForm outfit={outfit} outfitItems={outfitItems} />
    </div>
  );
}
