import React, { useState } from "react";
import ToDoData from "./ToDoData";
import ToDoNew from "./ToDoNew";

const TodoList = () => {
  const [toDoList, setLisTodoList] = useState([]);

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
  const handleDelete = (currentIdDelete) => {
    return setLisTodoList(
      toDoList.filter((item) => item.id !== currentIdDelete)
    );
  };

  return (
    <div className="container mx-2 my-4">
      <h1 className="flex items-center justify-center ">To do list</h1>
      <ToDoNew addNewToDo={addNewToDo}></ToDoNew>

      {toDoList.length === 0 ? (
        <img
          src="https://static.vecteezy.com/system/resources/previews/009/468/413/original/buying-or-selling-nft-art-concept-illustration-man-flying-near-smartphone-holding-pixel-art-picture-vector.jpg"
          alt="imgLoading"
          className="h-[400px] w-[400px] ml-[450px]"
        />
      ) : (
        <ToDoData toDoList={toDoList} handleDelete={handleDelete}></ToDoData>
      )}
    </div>
  );
};

export default TodoList;
