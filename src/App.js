import React, { useRef, useState, useMemo, useCallback } from "react";
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

  //useCallback를 활용하여 함수 재활용
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

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

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      ...inputs,
    };

    // setUsers([...users, user]); 추가 방법 1
    setUsers((users) => users.concat(user)); // 추가 방법 2

    setInputs({
      username: "",
      email: "",
    });

    nextId.current += 1;
  }, [inputs]);

  const onRemve = useCallback((id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  const onToogle = useCallback((id) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);

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
