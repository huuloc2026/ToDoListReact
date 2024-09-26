import { MdCheckCircleOutline } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import { IoMdRadioButtonOn } from "react-icons/io";
const ToDoData = (props) => {
  /// props la object
  const {
    toDoList,
    handleDelete,
    completedTasks,
    handleUpdate,
    handleDoneTask,
  } = props;

  return (
    <ul className="space-y-2">
      {toDoList.map((item) => {
        const isCompleted = completedTasks.includes(item.id);

        return (
          <div
            key={item.id}
            className="flex justify-between items-center m-2 gap-4 flex-wrap"
          >
            <div className="flex items-center gap-2">
              <IoMdRadioButtonOn />
              <li
                className={`list-none  ${
                  isCompleted ? "line-through text-red-500" : ""
                }`}
              >
                {item.job}
              </li>
            </div>
            <div className="flex justify-between gap-10 items-center ">
              {/* //button Done */}
              <MdCheckCircleOutline
                className=" fill-green-500 hover:fill-green-950"
                onClick={() => handleDoneTask(item.id)}
              />
              {/* button update */}
              <LuPencil onClick={() => handleUpdate(item.id)} />
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 border border-red-700 rounded"
              >
                Delete
              </button>
            </div>
            {/* //button Delete */}
          </div>
        );
      })}
    </ul>
  );
};

export default ToDoData;
