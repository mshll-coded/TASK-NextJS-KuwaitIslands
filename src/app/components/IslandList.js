"use client"

import Island from "./Island";

function IslandList({ islands, handleSelectIsland }) {
  const islandCards = islands.map((island) => <Island key={island.id} island={island} selectIsland={() => handleSelectIsland(island)} />);

  return (

    <div className="islandList">{islandCards}</div>

  );
}

export default IslandList
