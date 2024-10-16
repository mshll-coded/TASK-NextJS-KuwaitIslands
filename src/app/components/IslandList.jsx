'use client';

import Island from './Island';

function IslandList({ islands, handleCurrentIsland }) {
  const islandCards = islands.map((island) => <Island key={island.id} island={island} handleCurrentIsland={handleCurrentIsland} />);

  return <div className="islandList">{islandCards}</div>;
}

export default IslandList;
