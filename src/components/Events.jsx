import React, { useState } from "react";

const Events = () => {
  //State
  const [name, setName] = useState("Mario");
  const [count, setCount] = useState(0);
  const [events, setEvents] = useState([
    { title: "Mario birthday bash", id: 1 },
    { title: "Browser live streaming", id: 2 },
    { title: "Race on farm", id: 3 },
  ]);

  const handleClick = () => {
    setName("Luigi");
    console.log(name);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleDelete = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };
  return (
    <>
      <h1>
        My name is {name} and my count is {count}
      </h1>
      <button onClick={handleClick}>Change Name</button>
      <h2>Count: {count} </h2>
      <button className="button" onClick={handleIncrement}>
        Increment
      </button>
      <button className="button" onClick={handleDecrement}>
        Decrement
      </button>

      {events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>
            {index + 1} - {event.title}
          </h2>
          <button onClick={() => handleDelete(event.id)}>Delete</button>
        </React.Fragment>
      ))}
    </>
  );
};

export default Events;
