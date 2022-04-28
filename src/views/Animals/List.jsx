import React from 'react';
import styles from '../../App.css';
import AnimalCard from '../../components/Animals/Card';
import { useEffect, useState } from 'react';
import AnimalDropdown from '../../components/Animals/Dropdown';

export default function AnimalsList() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('all');
  const [results, setResults] = useState([]);

//   const currentSort = !!sort.length;
//   const animalsList = currentSort ? results : animals;

//   const handleChange = (event) => {
//     setSort(event.target.value);
//   };

  useEffect(() => {
    const getAnimals = async () => {
      const res = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10');

      const results = await res.json();

      console.log(results);
      const animalData = results.map((animal) => ({
        img: animal.image_link,
        name: animal.name,
        latin: animal.latin_name,
        lifespan: animal.lifespan,
        habitat: animal.habitat,
      }));

      setAnimals(animalData);
      setLoading(false);
    };
    getAnimals();
  }, []);

  return (
    <>
      <h2>AnimalsList</h2>
      <div>
        <AnimalDropdown setResults={setResults} />
      </div>
      <div>
        {loading ? (
          <p>loading...</p>
        ) : (
          <div>
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
