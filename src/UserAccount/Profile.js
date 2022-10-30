import "./profile.scss";
import { useReducer } from "react";
import axios from "axios";

const Profile = () => {
  const initialFormState = {
    height: "",
    weight: "",
    dob: "",
    language: "",
  };

  const formReducer = (currValues, newValues) => ({
    ...currValues,
    ...newValues,
  });

  const [formValues, setFormValues] = useReducer(formReducer, initialFormState);

  const { height, weight, dob, language } = formValues;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    axios
      .post("http://localhost:4000/changeProfile", {
        token: localStorage.getItem("nodemongo-api-token"),
        ...formValues,
      })
      .then(() => {
        alert("values updated successfully");
      })
      .catch(() => {
        alert("some error occured, please try again!");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="profileDiv">
          <div className="innerContainer">
            <input
              className="profinputField"
              name="height"
              type="number"
              value={height}
              onChange={handleChange}
              placeholder="height"
            />
            <input
              className="profinputField"
              name="weight"
              type="number"
              value={weight}
              onChange={handleChange}
              placeholder="weight"
            />
            <input
              className="profinputField"
              name="dob"
              type="text"
              value={dob}
              onChange={handleChange}
              placeholder="dob"
            />
            <input
              className="profinputField"
              name="language"
              type="text"
              value={language}
              onChange={handleChange}
              placeholder="language"
            />
          </div>
          <span className="profbuttonSpanDiv">
            <button className="profbutton" type="submit">
              Save
            </button>
            <button className="profbutton" id="editButton" type="button">
              Edit
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Profile;
