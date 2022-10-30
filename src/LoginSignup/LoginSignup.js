import { useState } from "react";
import SignIn from "../Forms/SignIn";
import SignUp from "../Forms/SignUp";

const LoginSignup = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div>
      {isRegistered ? (
        <SignIn setIsRegistered={setIsRegistered} />
      ) : (
        <SignUp setIsRegistered={setIsRegistered} />
      )}
    </div>
  );
};

export default LoginSignup;
