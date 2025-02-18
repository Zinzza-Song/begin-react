import React from "react";

function User({ user, onRemove, onToogle }) {
  const { username, email, id, active } = user;

  return (
    <div>
      <b
        onClick={() => onToogle(id)}
        style={{
          color: active ? "green" : "black",
          cursor: "pointer",
        }}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToogle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToogle={onToogle}
        />
      ))}
    </div>
  );
}

export default UserList;
