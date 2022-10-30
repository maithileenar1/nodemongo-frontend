import LoginSignup from "./LoginSignup/LoginSignup";
import UserAccount from "./UserAccount/UserAccount";
import "./styles.scss";
import { useState, createContext } from "react";

export const UserLoginContext = createContext();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <UserLoginContext.Provider value={setIsLoggedIn}>
      <div className="App">
        {isLoggedIn ? <UserAccount /> : <LoginSignup />}
      </div>
    </UserLoginContext.Provider>
  );
}
