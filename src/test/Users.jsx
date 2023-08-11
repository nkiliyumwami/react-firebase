import { useState } from "react";
import UserList from "./UserList";
import Title from "./Title";
import Modal from "./Modal";
import NewUserForm from "./NewUserForm";

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
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);
  const [showModal, setShowModal] = useState(false);

  //add a user
  const addUser = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
    //Close the model after adding a user
    setShowModal(false);
  };

  //deleting a user
  const handleDelete = (id) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => {
        return id !== user.id;
      });
    });
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
        Add a new user!
      </button>

      <Title
        title={"Our Employees"}
        subTitle={"It is a privilege to work here!"}
      />
      <br />
      {!showUsers && (
        <button className="p-2 m-2" onClick={() => setShowUsers(true)}>
          Show Users
        </button>
      )}

      {showUsers && (
        <button className="p-2 m-2" onClick={() => setShowUsers(false)}>
          Hide Users
        </button>
      )}

      {showUsers && <UserList users={users} handleDelete={handleDelete} />}
      {showModal && (
        <Modal>
          <h2>Add new user</h2>
          <NewUserForm addUser={addUser} />
        </Modal>
      )}
    </div>
  );
};

export default Users;
