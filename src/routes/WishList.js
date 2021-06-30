import React, { useEffect, useState } from 'react';
import { dbService } from 'fBase';

const WishList = () => {
  
  const [wishLists, setWishLists] = useState([]);

  useEffect(() => {
    dbService.collection('wishlists').orderBy('lastUpdatedTm', 'desc').onSnapshot(snapShot => {
      const tempList = snapShot.docs.map(row => ({ id: row.id, onEdit: false, ...row.data() }));
      console.log(tempList);
    });
  }, []);

  return (<div>wish</div>);
};

export default WishList;