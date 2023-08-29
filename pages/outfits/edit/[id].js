/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useRouter } from 'next/router';
import EditOutfitForm from '../../../components/Forms/EditOutfitForm';

export default function EditOutfit() {
  const router = useRouter();

  return (
    <div>
      <EditOutfitForm outfitId={Number(router.query.id)} />
    </div>
  );
}
