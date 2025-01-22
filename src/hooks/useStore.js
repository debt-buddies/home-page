import { useStoreDispatch } from "./useStoreDispatch";
import {
  addTodo,
  changePreviewContent,
  getData
} from "@features/todos/todosSlice";

export default function useStore() {
  const dispatch = useStoreDispatch();

  const addTodos = (todo) => {
    dispatch(addTodo(todo));
  };

  const changePreview = (typePreview) => {
    dispatch(changePreviewContent(typePreview));
  };

  const getDataDetail = (detail) => {
    dispatch(getData(detail));
  }

  return { addTodos, changePreview, getDataDetail };
}
