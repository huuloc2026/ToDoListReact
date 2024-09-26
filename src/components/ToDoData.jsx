const ToDoData = (props) => {
  /// props la object
  const { toDoList } = props;

  return (
    <ul className="">
      {toDoList.map((item) => {
        return <li key={item.id}>{item.job}</li>;
      })}
      <div>{JSON.stringify(toDoList)}</div>
    </ul>
  );
};

export default ToDoData;
