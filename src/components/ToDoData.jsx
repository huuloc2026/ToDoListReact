const ToDoData = (props) => {
  /// props la object
  const { todoList } = props;
  // console.log(todoList);

  return (
    <div className="">
      {todoList.map((Item) => {
        return (
          <div key={Item.id} className="flex justify-between">
            <li>{Item.job}</li>
            <button className="border mx-2"> delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoData;
