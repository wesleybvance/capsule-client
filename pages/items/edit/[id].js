import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ItemForm from '../../../components/Forms/ItemForm';
import { getSingleItem } from '../../../utils/data/itemData';

export default function EditItem() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();

  const getItemInfo = (itid) => {
    getSingleItem(itid).then(setEditItem);
  };

  useEffect(() => {
    getItemInfo(router.query.id);
  }, [router.query.id]);

  return (
    <div>
      <ItemForm currentItem={editItem} />
    </div>
  );
}
