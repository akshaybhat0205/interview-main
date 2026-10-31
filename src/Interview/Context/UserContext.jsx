import { createContext, useContext } from "react";

export const UserContext = createContext(undefined);
export default function UseUsereContext() {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return user;
}
