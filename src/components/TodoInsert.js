import { MdAdd } from "react-icons/md";
import { useState } from "react";
import React from "react";
import "../styles/TodoInsert.scss";
const TodoInsert = () => {
  const [value, setValue] = useState("");

  const onChange = event => {
    setValue(event.target.value);
    //console.log(value);
  };

  const onSubmit = event => {
    // 새로고침 방지
    event.preventDefault();
    // 값 초기화
    setValue("");
  };

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        id="a"
        placeholder="할 일 입력하세요."
        onChange={onChange}
        value={value}
      />

      <button type="button" onClick={onSubmit}>
        {/* 리액트 아이콘 */}
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
