import { useStoreDispatch } from "./useStoreDispatch";
import {
  addTodo,
  changePreviewContent,
} from "../redux/features/todos/todosSlice";

export default function useStore() {
  const dispatch = useStoreDispatch();

  const addTodos = () => {
    dispatch(addTodo());
  };

  const changePreview = () => {
    dispatch(changePreviewContent());
  };

  return { addTodos, changePreview };
}
