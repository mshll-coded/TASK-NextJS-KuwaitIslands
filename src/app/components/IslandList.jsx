'use client';

import Island from './Island';

function IslandList({ islands, handleCurrentIsland, currentIsland, currentIslandVisitors }) {
  const islandCards = islands.map((island) => (
    <Island
      key={island.id}
      island={island}
      handleCurrentIsland={handleCurrentIsland}
      currentIsland={currentIsland}
      currentIslandVisitors={currentIslandVisitors}
    />
  ));

  return <div className="islandList">{islandCards}</div>;
}

export default IslandList;
