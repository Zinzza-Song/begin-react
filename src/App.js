import React, { useRef, useState } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    active: true,
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "zinzza",
      email: "zinzza@naver.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@naver.com",
      active: false,
    },
    {
      id: 3,
      username: "song",
      email: "song@naver.com",
      active: false,
    },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      ...inputs,
    };

    // setUsers([...users, user]); 추가 방법 1
    setUsers(users.concat(user)); // 추가 방법 2

    setInputs({
      username: "",
      email: "",
    });

    nextId.current += 1;
  };

  const onRemve = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToogle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemve} onToogle={onToogle} />
    </>
  );
}

export default App;
