import React from "react";

function UserList({ users, handleDelete }) {
  return (
    <>
      {users.map((user) => (
        <React.Fragment key={user.id}>
          <h2>
            Name: {user.firstName} Age: {user.age}{" "}
          </h2>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </React.Fragment>
      ))}
    </>
  );
}

export default UserList;
