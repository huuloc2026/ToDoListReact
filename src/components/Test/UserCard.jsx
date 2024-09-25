import React from "react";

const UserCard = (props) => {
  const { name, age, email } = props;
  return (
    <div className="border p-4 m-2">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserCard;
