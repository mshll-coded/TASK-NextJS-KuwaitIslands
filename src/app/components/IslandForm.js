"use client"

import Image from "next/image";
import { useState } from "react";

function IslandForm({ island, addVisitor }) {
  const [booking, setBooking] = useState({
    name: "",
    phone: ""
  })

  function handleChange(e) {
    setBooking({ ...booking, [e.target.name]: e.target.value })
  }

  function handleBooking(e) {
    e.preventDefault()

    const confirmation = confirm(`Are you sure you want to book the island ${island.name} with the name: ${booking.name} and phone: ${booking.phone}`)

    if (confirmation) {
      addVisitor()
      setBooking({ name: "", phone: "" })
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
      <form onSubmit={handleBooking}>
        <input
          name="name"
          onChange={handleChange}
          value={booking.name}
          placeholder="Full Name"
        />
        <input
          name="phone"
          onChange={handleChange}
          value={booking.phone}
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
