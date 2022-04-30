import React from 'react';

export default function AnimalDropdown({ sortHandler, setSort }) {
  return (
  <form
    onSubmit={sortHandler}>
        <select onChange={(e) => {setSort(e.target.value)}}>
      <option value="all">sort by ...</option>
      <option value="abc">alphabetical order</option>
      <option value="lifespan">lifespan short to long</option>
    </select>
    <button>sort</button>
  </form>
  );
}
