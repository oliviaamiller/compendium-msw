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

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    const getAnimals = async () => {
      const animalData = await fetchAnimals();
      setAnimals(animalData);
      setLoading(false);
    };
    getAnimals();
  }, []);

  useEffect(() => {
    if (value === 'abc') {
      setResults(animals.name.sort());
    } else if (value === 'lifespan') {
      setResults(
        animals.lifespan.sort(function (a, b) {
          return a - b;
        })
      );
    }
  }, [sort]);

  return (
    <>
      <h2>Animals List</h2>
      <p className={styles.latin}>* refresh page for new animals!</p>
      <div>
        <AnimalDropdown sortHandler={sortHandler} />
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
