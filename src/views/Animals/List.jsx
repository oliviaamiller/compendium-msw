import React from 'react';
import styles from '../../App.css';
import AnimalCard from '../../components/Animals/Card';
import { useEffect, useState } from 'react';
import AnimalDropdown from '../../components/Animals/Dropdown';

export default function AnimalsList() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getAnimals = async () => {
      const res = await fetch(
        'https://zoo-animal-api.herokuapp.com/animals/rand/10'
      );
      const { results } = await res.json();
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
      <div>AnimalsList</div>
      <div>
        <AnimalDropdown setResults={setResults} />
      </div>
    </>
  );
}
