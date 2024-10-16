'use client';

import { useState } from 'react';

import IslandForm from './IslandForm';
import IslandList from './IslandList';
import Search from './Search';

function IslandsContainer({ islands }) {
  const [query, setQuery] = useState('');
  const [currentIsland, setCurrentIsland] = useState(islands[1]);
  const [currentIslandVisitors, setCurrentIslandVisitors] = useState(0);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleCurrentIsland(island) {
    setCurrentIslandVisitors(island.visitors.length);
    setCurrentIsland(island);
  }

  function incCurrentIslandVisitors(island, name, phone) {
    island.visitors.push({ name: name, phone: phone });
    setCurrentIslandVisitors(island.visitors.length);
    console.log(island.visitors);
  }

  const fitleredIslands = islands.filter((island) => island.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="islands-container">
      <div>
        <Search handleChange={handleChange} />
        <IslandList
          islands={fitleredIslands}
          handleCurrentIsland={handleCurrentIsland}
          currentIsland={currentIsland}
          currentIslandVisitors={currentIslandVisitors}
        />
      </div>
      <IslandForm island={currentIsland} incCurrentIslandVisitors={incCurrentIslandVisitors} />
    </div>
  );
}

export default IslandsContainer;
