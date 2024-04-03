import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdOutlineRemoveCircleOutline,
} from "react-icons/md";
import "../styles/TodoListItem.scss";
import classNames from "classnames";
import { useState } from "react";

// import {}
const TodoListItem = () => {
  // 임시 상태관리 코드 삭제요망
  const [checked, setChecked] = useState(true);
  return (
    <div className="TodoListItem">
      <div className={(classNames("checkbox"), { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}

        <div className="text">리액트 공부하기</div>
      </div>
      <div className="remove">
        <MdOutlineRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
