"use client"

import Image from "next/image";

function IslandForm({ island }) {
  return (
    <div className="form">
      <h2>{island.name}</h2>
      <Image
        src={island.img}
        alt={island.name}
        width="300"
        height="300"
      />
      <h3>Book a trip to {island.name} island</h3>
      <form onSubmit={() => { }}>
        <input placeholder="Type Full Name" />
        <input placeholder="Type Phone Number" />
        <button type="submit" className="book">
          Book for today!
        </button>
      </form>
    </div>
  );
}

export default IslandForm
