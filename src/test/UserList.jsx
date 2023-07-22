import React from "react";
import styles from "./UserList.module.css";

function UserList({ users, handleDelete }) {
  return (
    <>
      {users.map((user) => (
        <div className={styles.card} key={user.id}>
          <h2>
            Name: {user.firstName} Age: {user.age}{" "}
          </h2>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default UserList;
