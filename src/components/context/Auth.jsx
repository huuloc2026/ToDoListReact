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
  const [isLoading, setIsLoading] = useState(true);
  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {props.children}
    </AuthContext.Provider>
  );
};
