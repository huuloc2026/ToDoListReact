const ToDoData = (props) => {
  /// props la object
  // console.log(listJobData);
  // const { toDoList } = props;
  console.log(props.toDoList);
  return (
    <ul className="">
      {props.toDoList.map((item) => (
        <li key={item.id}>{item.job}</li>
      ))}
      <div>{JSON.stringify(props.toDoList)}</div>
    </ul>
  );
};

export default ToDoData;
