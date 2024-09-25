import React from "react";
import TodoList from "./components/TodoList";
import UserList from "./components/Test/UserList";

const App = () => {
  return (
    <div className="container">
      <TodoList></TodoList>
      <UserList />
    </div>
  );
};

export default App;
