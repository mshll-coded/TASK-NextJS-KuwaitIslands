"use client"

import { useState } from 'react';

import IslandForm from './IslandForm'
import IslandList from './IslandList'
import Search from './Search'

function IslandsContainer({ islandsData }) {
  const [query, setQuery] = useState("");
  const [currentIsland, setCurrentIsland] = useState(islandsData[0])
  const [islands, setIslands] = useState(islandsData)

  function handleSelectIsland(island) {
    setCurrentIsland(island)
  }

  function handleChange(e) {
    setQuery(e.target.value)
  }

  function addVisitor(island) {
    island.visitors++
    setIslands([...islands])
  }

  const fitleredIslands = islands
    .filter((island) => island.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className="islands-container">
      <div>
        <Search handleChange={handleChange} />
        <IslandList islands={fitleredIslands} handleSelectIsland={handleSelectIsland} />
      </div>
      <IslandForm island={currentIsland} addVisitor={() => addVisitor(currentIsland)} />
    </div>
  )
}

export default IslandsContainer