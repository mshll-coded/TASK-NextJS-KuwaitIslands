'use client';

import Image from 'next/image';

function IslandForm({ island, incCurrentIslandVisitors }) {
  const handleForm = () => {
    event.preventDefault();
    if (window.confirm(`Are you sure you want to book ${island.name}?`)) {
      const name = document.getElementById('visitorName').value;
      const phone = document.getElementById('visitorPhone').value;
      event.target.reset();
      incCurrentIslandVisitors(island, name, phone);
    }
  };

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <Image src={island.img} alt={island.name} width="300" height="300" />
      <h3>Book a trip to {island.name} island</h3>
      <form onSubmit={handleForm}>
        <input placeholder="Type Full Name" type="text" id="visitorName" required minLength={4} />
        <input placeholder="Type Phone Number" type="tel" id="visitorPhone" required minLength={8} maxLength={8} />
        <button type="submit" className="book">
          Book for today!
        </button>
      </form>
    </div>
  );
}

export default IslandForm;
