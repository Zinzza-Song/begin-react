import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: "zinzza",
      email: "zinzza@naver.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@naver.com",
    },
    {
      id: 3,
      username: "song",
      email: "song@naver.com",
    },
  ];

  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
