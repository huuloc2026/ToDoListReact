import React, { useState } from "react";

const ToDoNew = (props) => {
  const { addNewToDo } = props;
  const [valueInput, SetValueInput] = useState("");
  const handleClick = () => {
    addNewToDo(valueInput);
  };
  const handleOnChange = (input) => {
    SetValueInput(input);
  };
  return (
    <div className="flex items-center justify-center gap-10">
      <input
        type="text"
        // value={job}
        placeholder="Add to do job..."
        className="border"
        onChange={(e) => handleOnChange(e.target.value)}
      />
      <button className="border" onClick={() => handleClick()}>
        Add
      </button>
      <div> My input: {valueInput}</div>
    </div>
  );
};

export default ToDoNew;
