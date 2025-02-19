import React, { useEffect } from "react";

const User = React.memo(function User({ user, onRemove, onToogle }) {
  const { username, email, id, active } = user;

  // useEffect(() => {
  //   console.log("컴포넌트가 화면에 나타남");
  //   // 마운트 시 작동 마운트? -> 화면이 나타남
  //   // props -> state
  //   // REST API
  //   // D3 Video.js
  //   // setInterval, setTimeout
  //   return () => {
  //     // 언마운트시 작동
  //     // clearInterval, clearTimeout
  //     // 라이브러리 인스턴스 제거
  //     console.log("컴포넌트가 화면에서 사라짐");
  //   };
  // }, []);

  useEffect(() => {
    console.log("user 값이 설정됨");
    console.log(user);

    return () => {
      console.log("user 값이 바뀌기 전");
      console.log(user);
    };
  }, [user]);

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
});

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

export default React.memo(
  UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.users
);
