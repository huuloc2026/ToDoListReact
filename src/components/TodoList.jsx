import React, { useState } from "react";
import ToDoData from "./ToDoData";

const TodoList = () => {
  const exampleData = [
    { id: 1, job: "Learning English" },
    { id: 2, job: "Meeting" },
  ];

  const [todoList, setToDoList] = useState(exampleData);
  const [listInput, setListInput] = useState({ id: null, job: "" });

  const randomId = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const addToDo = (name) => {
    const newTodo = { id: randomId(1, 1000000), job: name };
    setListInput(newTodo); // Cập nhật listInput với đối tượng newTodo
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;
    addToDo(inputValue); // Gọi hàm addToDo với giá trị mới từ input
  };

  // Hàm thêm công việc mới vào danh sách
  const handleClick = () => {
    setToDoList([...todoList, listInput]);
    setListInput({ id: null, job: "" }); // Reset lại input sau khi thêm
  };

  return (
    <div className="justify-center items-center min-h-screen my-2">
      <div className="uppercase text-center">To Do List App</div>
      <div className="flex justify-center items-center">
        <input
          type="text"
          value={listInput.job}
          className="border"
          placeholder="nhập thông tin"
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 "
        >
          Add
        </button>
      </div>
      <div className="justify-center text-center">List to do:</div>

      <ToDoData todoList={todoList} />
    </div>
  );
};

export default TodoList;
