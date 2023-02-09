import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./components/Todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const AddTodoHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...todos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const DeleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={AddTodoHandler} />
      <TodoList items={todos} onDeleteTodo={DeleteTodoHandler} />
    </div>
  );
};

export default App;
