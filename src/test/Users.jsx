import { useState } from "react";
import UserList from "./UserList";
import Title from "./Title";
import Modal from "./Modal";

const usersData = [
  {
    id: 11,
    firstName: "Marcel",
    age: 39,
  },
  {
    id: 12,
    firstName: "Assunta",
    age: 42,
  },
  {
    id: 13,
    firstName: "Trace",
    age: 26,
  },
  {
    id: 14,
    firstName: "Enoch",
    age: 21,
  },
  {
    id: 15,
    firstName: "Jeanne",
    age: 26,
  },
];

const Users = () => {
  const [users, setUsers] = useState(usersData);
  const [showUsers, setShowUsers] = useState(false);
  const [showModal, setShowModal] = useState(false);

  //deleting a user
  const handleDelete = (id) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => {
        return id !== user.id;
      });
    });
  };

  // Closing the modal
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className="p-2 m-0">
      <button
        onClick={() => setShowModal(true)}
        className={
          showModal
            ? "bg-green-700 fixed top-20"
            : "bg-red-900/0.5 fixed top-20 right-10"
        }
      >
        Employee of the month!!
      </button>

      <Title
        title={"Our Employees"}
        subTitle={"It is a privilege to work here!"}
      />
      <br />
      {!showUsers && (
        <button className="p-2 m-2" onClick={() => setShowUsers(true)}>
          Show Employees
        </button>
      )}

      {showUsers && (
        <button className="p-2 m-2" onClick={() => setShowUsers(false)}>
          Hide Employees
        </button>
      )}

      {showUsers && <UserList users={users} handleDelete={handleDelete} />}
      {showModal && (
        <Modal handleClose={handleClose}>
          <h2>Here is our employee of the month</h2>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            magni rerum ut nihil, tempore libero ea consequatur ullam suscipit.
          </p>
        </Modal>
      )}
    </div>
  );
};

export default Users;
