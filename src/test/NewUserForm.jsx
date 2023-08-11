import { useState } from "react";

import "./NewUserForm.css";

const NewUserForm = ({ addUser }) => {
  const [firstName, setFirstName] = useState("");
  const [date, setDate] = useState("");
  const [age, setAge] = useState(null);

  const resetForm = () => {
    setFirstName("");
    setDate("");
    setAge("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //create employee
    const user = {
      firstName: firstName,
      date: date,
      id: Math.floor(Math.random() * 10000),
      age: age,
    };

    //add user
    addUser(user);

    //reset form
    resetForm();
  };
  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>User Name</span>
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
      </label>
      <label>
        <span>User Date</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>User Age</span>
        <input
          type="number"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default NewUserForm;
