import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/reducers/store";
import { todoActions } from "../redux/reducers/todo";
import { Todo } from "@/redux/types/todoInterface";
import TodoList from "../components/TodoList";
import TodoInsert from "../components/TodoInsert";

function TodoContainer() {
  const dispatch = useDispatch();
  let nextId = useRef(1);
  const todos = useSelector((state: RootState) => state.todos);
  const onInsert = (subject: string, text: string, writer: string) => {
    const todo: Todo = {
      id: nextId.current++,
      subject,
      text,
      writer,
      done: false,
      date: new Date().toString(),
    };
    dispatch(todoActions.addTodo(todo));
  };
  const onToggle = (id: number) => {
    dispatch(todoActions.toggleTodo(id));
  };

  const onRemove = (id: number) => {
    dispatch(todoActions.removeTodo(id));
  };

  return (
    <>
      <div className="container">
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </div>
    </>
  );
}

export default TodoContainer;
