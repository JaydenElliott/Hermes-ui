import { createContext } from "react";

const userInfo = {
  username: "Testing Username",
  messages: [],
};

export const UserContext = createContext(userInfo);
