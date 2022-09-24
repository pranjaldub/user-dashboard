import React, { useState } from "react";
import "./addUser.css";
import { useNavigate } from "react-router-dom";

const AddUser = ({ addUserHandler }) => {
  const history = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");

  function SubmitUser(e) {
    e.preventDefault();
    const obj = {
      first: firstName,
      last: lastName,
      email: email,
      balance: balance,
      created: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
      address: address,
    };
    console.log(obj);
    addUserHandler(obj);
    history("/users");
  }

  return (
    <div className="wrappers">
      <h2>Registration</h2>
      <form>
        <div className="input-box">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Enter your first name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-box">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-box">
          <label htmlFor="name" hidden>
            LastName
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Enter your last name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="input-box">
          <label htmlFor="balance" hidden>
            balance
          </label>
          <input
            type="text"
            name="balance"
            id="balance"
            required
            placeholder="Enter your last name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="input-box">
          <label htmlFor="address" hidden>
            LastName
          </label>
          <input
            type="text"
            name="name"
            id="address"
            required
            placeholder="Enter your address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="input-box button" onClick={SubmitUser}>
          <label htmlFor="submitButton" hidden>
            Submit
          </label>
          <input
            type="submit"
            name="submitButton"
            id="submitButton"
            value="Add User"
            onSubmit={SubmitUser}
          />
        </div>
      </form>
    </div>
  );
};

export default AddUser;
