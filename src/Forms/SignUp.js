import "./signUp.scss";
import { useReducer } from "react";
import axios from "axios";

const SignUp = (props) => {
  const { setIsRegistered } = props;

  const initialFormState = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  const formReducer = (currValues, newValues) => ({
    ...currValues,
    ...newValues,
  });

  const [formValues, setFormValues] = useReducer(formReducer, initialFormState);

  const { email, password, firstName, lastName } = formValues;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    axios
      .post("http://localhost:4000/register", formValues)
      .then((response) => {
        console.log("signup successful");
        alert("you are signed up!");
        location.reload();
      })
      .catch(console.log);
  };

  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <div className="segment">
          <h1>Sign up</h1>
        </div>
        <label>
          <input type="text" placeholder="First name" name="firstName" />
        </label>
        <label>
          <input type="text" placeholder="Last name" name="lastName" />
        </label>
        <label>
          <input type="text" placeholder="Email Address" name="email" />
        </label>
        <label>
          <input type="password" placeholder="Password" name="password" />
        </label>
        <button className="red" type="submit">
          {" "}
          SignUp
        </button>

        <span
          className="anchorTag"
          onClick={() => {
            setIsRegistered(true);
          }}
        >
          {" "}
          <a href="#">Login as an existing user</a>{" "}
        </span>

        {/* <div className="segment">
          <button className="unit" type="button">
            <i className="icon ion-md-arrow-back"></i>
          </button>
          <button className="unit" type="button">
            <i className="icon ion-md-bookmark"></i>
          </button>
          <button className="unit" type="button">
            <i className="icon ion-md-settings"></i>
          </button>
        </div> */}

        {/* <div className="input-group">
          <label>
            <input type="text" placeholder="Email Address" />
          </label>
          <button className="unit" type="button">
            <i className="icon ion-md-search"></i>
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default SignUp;
