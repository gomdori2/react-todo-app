import { useRef, useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const initState = [
  {
    id: 1, // integer
    text: "리액트의 기초 알아보기", // string
    checked: true, // 불리언
  },
  {
    id: 2, // integer
    text: "컴포넌트의 이해", // string
    checked: false, // 불리언
  },
  {
    id: 3, // integer
    text: "할 일 앱 만들어보기", // string
    checked: true, // 불리언
  },
];

function App() {
  const [todos, setTodos] = useState(initState);

  // id : 3번까지 있으니 4번 들어오게.
  // id는 고유한 값이어야 한다. > pk
  const nextId = useRef(4);

  // todos 배열에 새 객체 추가
  const onInsert = text => {
    const todo = {
      // current nextId의 현재값.
      id: nextId.current,
      text,
      checked: false,
    };
    // 위에 초기값을 하는게 아니라. concat으로 복사 후 아래에 붙여준다.
    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  // 삭제 기능
  const onRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 토글 기능 ...todo 새로 복사하는거
  const onToggle = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };

  return (
    <TodoTemplate>
      {/* onInsert > 뒤에 있는 컴포넌트에서 선언한 펑션 > 뒤에꺼는 여기서 선언한 펑션 */}
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
