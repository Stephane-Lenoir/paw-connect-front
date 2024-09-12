'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

import Cards from './Cards';
import Filtres from './Filtres';
import Rules from './Rules';

export default function Animals() {
  const [animals, setAnimals] = useState([]);
  const [error, setError] = useState(null);

  const [reload, setReload] = useState(false);

  const handleReload = () => {
    setReload(!reload);
  };

  // const fetchData = async () => {
  //   try {
  // Get the token from the local storage
  //     const token = localStorage.getItem('jwt_token');

  //     const res = await axios.post(
  //       'http://localhost:3000/api/animals',
  //       {},
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         withCredentials: true,
  //       },
  //     );

  //     setAnimals(res.data);
  //     console.log(res.data);
  //   } catch (err) {
  //     console.error('Error fetching animals:', err);
  //     setError(err.message || 'Failed to fetch animals');
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Rules />
      <div className="flex flex-wrap gap-5 justify-center  mb-5">
        <Filtres onReload={handleReload} />
        <Cards onReload={reload} />
      </div>
    </>
  );
}
