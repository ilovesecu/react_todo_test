import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/reducers/store";
import { todoActions } from "@/redux/reducers/todo";
import { Todo } from "@/redux/types/todoInterface";

function TodoFormContainer() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  const onInsert = (text: string, writer: string) => {};

  return <div></div>;
}

export default TodoFormContainer;
