import React, { useState, useRef } from "react";
// useState : 값이 동적으로 변할 때 사용하는 React Hook
// useRef : 렌더링에 쓰이지 않을 값을 참조할 때 사용하는 Reackt Hook

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const nameInput = useRef();
  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({ ...inputs, [name]: value }); // ...객체 -> 객체를 복사 / [name] -> 각 태그의 name 별로 넣기위함 (ex name이 a, b이면 a, b가 자동으로 대입됨)
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
