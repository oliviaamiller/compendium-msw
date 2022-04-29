import React from 'react';
import styles from '../../App.css';
import AnimalCard from '../../components/Animals/Card';
import { useEffect, useState } from 'react';
import AnimalDropdown from '../../components/Animals/Dropdown';
import { fetchAnimals } from '../../services/Animals/ApiFetch';

export default function AnimalsList() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('');
  const [results, setResults] = useState([]);

  const sortResults = results.length ? results : animals;

  const sortHandler = (e) => {
    e.preventDefault();
    console.log(sort);
    if (sort === 'abc') {
      const abc = animals.sort((a, b) => {
        let alower = a.name.toLowerCase();
        let blower = b.name.toLowerCase();

        if (alower < blower) {
          return -1;
        }
        if (alower > blower) {
          return 1;
        }
        return 0;
      });
      setResults(abc);
      console.log(abc);
    } else if (sort === 'lifespan') {
      setResults(
        animals.sort(function (a, b) {
          return a.lifespan - b.lifespan;
        })
      );
    }
  };

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
        <AnimalDropdown sortHandler={sortHandler} setSort={setSort} />
      </div>
      <div>
        {loading ? (
          <p>loading...</p>
        ) : (
          <div className={styles.list}>
            {sortResults.map((animal) => {
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
