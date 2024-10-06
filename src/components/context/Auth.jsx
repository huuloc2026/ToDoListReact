import { createContext, useState } from "react";

export const AuthContext = createContext({
  emai: "",
  phone: "",
  password: "",
  fullName: "",
  role: "",
  avatar: "",
  id: "",
});

export const AuthWrapper = (props) => {
  const [user, setUser] = useState({
    emai: "",
    phone: "",
    password: "",
    fullName: "",
    role: "",
    avatar: "",
    id: "",
  });
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
