import React from 'react';
import styles from '../../App.css';
import AnimalCard from '../../components/Animals/Card';
import { useEffect, useState } from 'react';
import AnimalDropdown from '../../components/Animals/Dropdown';
import { fetchAnimals } from '../../services/Animals/ApiFetch';

export default function AnimalsList() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('all');
  const [results, setResults] = useState([]);


  useEffect(() => {
    const getAnimals = async () => {
      const animalData = await fetchAnimals();
      setAnimals(animalData);
      setLoading(false);
    };
    getAnimals();
  }, []);

  return (
    <>
      <h2>Animals List</h2>
      <p className={styles.latin}>* refresh page for new animals!</p>
      <div>
        <AnimalDropdown setResults={setResults} />
      </div>
      <div>
        {loading ? (
          <p>loading...</p>
        ) : (
          <div className={styles.list}>
            {animals.map((animal) => {
              return (
                <AnimalCard
                  img={animal.img}
                  name={animal.name}
                  latin={animal.latin}
                  lifespan={animal.lifespan}
                  habitat={animal.habitat}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
