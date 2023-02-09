import React from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

const App: React.FC = () => {
  const todos = [{ id: "t1", text: "Finish the course" }];

  const AddTodoHandler = (text: string) => {
    console.log(text);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={AddTodoHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
