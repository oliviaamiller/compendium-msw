import React from 'react'

export default function AnimalDropdown({ sortHandler }) {
    return (
        <select
          onChange={(e) => {
            sortHandler(e.target.value);
          }}
        >
          <option value="all">sort by ...</option>
          <option value="abc">alphabetical order</option>
          <option value="lifespan">lifespan short to long</option>
        </select>
      );
}
