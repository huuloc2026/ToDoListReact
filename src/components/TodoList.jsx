import React, { useState } from "react";
import ToDoData from "./ToDoData";
import ToDoNew from "./ToDoNew";

const TodoList = () => {
  const [toDoList, setLisTodoList] = useState([
    { id: 1, job: "Learning English" },
    { id: 2, job: "Meeting" },
  ]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addNewToDo = (nameTodo) => {
    const newtoDo = {
      id: random(1, 10000000),
      job: nameTodo,
    };
    setLisTodoList((prev) => [...prev, newtoDo]);
  };
  // HandleTask
  const handleDoneTask = (currentIdDone) => {
    if (completedTasks.includes(currentIdDone)) {
      // Nếu đã hoàn thành, xóa khỏi danh sách hoàn thành
      setCompletedTasks(completedTasks.filter((id) => id !== currentIdDone));
    } else {
      // Nếu chưa hoàn thành, thêm vào danh sách hoàn thành
      setCompletedTasks([...completedTasks, currentIdDone]);
    }
  };
  // HandleUpdate
  const handleUpdate = (currentIdDone) => {
    console.log(currentIdDone);
  };
  // HandleDel
  const handleDelete = (currentIdDelete) => {
    return setLisTodoList(
      toDoList.filter((item) => item.id !== currentIdDelete)
    );
  };

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="container mx-auto my-4 max-w-4xl">
      <h1 className="text-center text-2xl font-semibold">To do list</h1>

      <ToDoNew addNewToDo={addNewToDo} />

      {toDoList.length === 0 ? (
        <img
          src="https://static.vecteezy.com/system/resources/previews/009/468/413/original/buying-or-selling-nft-art-concept-illustration-man-flying-near-smartphone-holding-pixel-art-picture-vector.jpg"
          alt="imgLoading"
          className="h-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto mt-4"
        />
      ) : (
        <ToDoData
          toDoList={toDoList}
          completedTasks={completedTasks}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          handleDoneTask={handleDoneTask}
        />
      )}
    </div>
  );
};

export default TodoList;
