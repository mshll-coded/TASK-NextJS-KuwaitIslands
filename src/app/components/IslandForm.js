"use client"

import Image from "next/image";
import { useState } from "react";

function IslandForm({ island, addVisitor }) {
  const [visitor, setVisitor] = useState({
    name: "",
    phone: ""
  })

  function handleChange(e) {
    setVisitor({ ...visitor, [e.target.name]: e.target.value })
  }

  function handlevisitor(e) {
    e.preventDefault()

    const confirmation = confirm(`Are you sure you want to book the island ${island.name} with the name: ${visitor.name} and phone: ${visitor.phone}`)

    if (confirmation) {
      addVisitor(island, visitor)
      setVisitor({ name: "", phone: "" })
    }
  }

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
      <form onSubmit={handlevisitor}>
        <input
          name="name"
          onChange={handleChange}
          value={visitor.name}
          placeholder="Full Name"
        />
        <input
          name="phone"
          onChange={handleChange}
          value={visitor.phone}
          type="tel"
          pattern="[0-9]{8}"
          title="8 digit phone number"
          placeholder="Phone Number" />
        <button type="submit" className="book">
          Book for today!
        </button>
      </form>
    </div>
  );
}

export default IslandForm
