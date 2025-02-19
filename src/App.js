import React, { useRef, useState, useMemo } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function countActiveUsers(users) {
  console.log("확성 사용자 수를 세는중...");

  return users.filter((user) => user.active).length;
}

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

  const count = useMemo(() => countActiveUsers(users), [users]);
  // useMemo를 사용안하면 화면이 리렌더링 될 때마다 계속 연산이됨
  // useMemo를 사용하면 해당 값이 변할 때만 연산(기존의 값을 재사용 하여 최적화)

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemve} onToogle={onToogle} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
