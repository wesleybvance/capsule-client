/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import EditOutfitForm from '../../../components/Forms/EditOutfitForm';
import { getSingleOutfit } from '../../../utils/data/outfitData';
import { getOutfitItemsByOutfitID } from '../../../utils/data/outfitItemData';
import UpdateTest from '../../../components/Outfits/test';

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
    <div>
      {/* <EditOutfitForm outfitId={Number(router.query.id)} /> */}
      <UpdateTest outfit={outfit} outfitItems={outfitItems} />
    </div>
  );
}
