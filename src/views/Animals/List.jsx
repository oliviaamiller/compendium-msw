import React from 'react'
import styles from '../../App.css';
import AnimalCard from '../../components/Animals/Card';
import { useEffect, useState } from 'react';

export default function AnimalsList() {
    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('');
    const [results, setResults] = useState([]);
    
  return (
    <div>AnimalsList</div>
  )
}
