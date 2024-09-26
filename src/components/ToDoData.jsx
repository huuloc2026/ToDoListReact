const ToDoData = (props) => {
  /// props la object
  const { toDoList, handleDelete } = props;

  return (
    <ul className="">
      {toDoList.map((item) => {
        return (
          <div key={item.id} className="flex justify-start m-2 gap-10">
            <span className="w-2 h-2 mt-2 bg-red-500 rounded-full"></span>
            <li>{item.job}</li>

            <button
              onClick={() => handleDelete(item.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 border border-red-700 rounded "
            >
              Delete
            </button>
          </div>
        );
      })}
    </ul>
  );
};

export default ToDoData;
