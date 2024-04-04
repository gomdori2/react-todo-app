import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdOutlineRemoveCircleOutline,
} from "react-icons/md";

import "../styles/TodoListItem.scss";

import classNames from "classnames";

import { useState } from "react";

// import {}
const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  // 태그에 아이디 줘도 불러들이질 못함.
  // let a = document.getElementById("ab");
  // a.addEventListener("click", function (checked) {
  //   checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />;
  // });

  // const a = () => {
  // 뭔지 안알려줬음
  //   console.log(todo.checked);
  //   // todo.checked == "false" ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />;
  //   return todo.checked;
  // };

  return (
    <div className="TodoListItem">
      {/* onClick={a} */}
      <div
        className={classNames("checkbox", { checked })}
        onClick={() => onToggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}

        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdOutlineRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
