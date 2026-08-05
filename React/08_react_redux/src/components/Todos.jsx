import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../feature/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch(0);
  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
        </li>
      ))}
    </>
  );
}

export default Todos;
