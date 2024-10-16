"use client"

import Island from "./Island";

function IslandList({ islands }) {
  const islandCards = islands.map((island) => <Island key={island.id} island={island} />);

  return (

    <div className="islandList">{islandCards}</div>

  );
}

export default IslandList
