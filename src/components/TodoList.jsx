import React, { useState } from "react";
import ToDoData from "./ToDoData";
import ToDoNew from "./ToDoNew";

const TodoList = () => {
  const [toDoList, setLisTodoList] = useState([
    { id: 1, job: "Learning English" },
    { id: 2, job: "Meeting" },
  ]);

  const addNewToDo = (nameTodo) => {
    const newtoDo = {
      id: random(1, 1000000),
      job: nameTodo,
    };
    setLisTodoList((prev) => [...prev, newtoDo]);
  };
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(toDoList);
  return (
    <div className="container mx-2 my-4">
      <h1 className="flex items-center justify-center ">To do list</h1>
      <ToDoNew addNewToDo={addNewToDo}></ToDoNew>
      <div>
        <ToDoData toDoList={toDoList}></ToDoData>
      </div>
    </div>
  );
};

export default TodoList;
