import React from 'react'

export default function AnimalDropdown({ setResults }) {
    return (
        <select
          onChange={(e) => {
            setResults(e.target.value);
          }}
        >
          <option>sort by ...</option>
          <option value="abc">alphabetical order</option>
          <option value="lifespan">lifespan short to long</option>
        </select>
      );
}
