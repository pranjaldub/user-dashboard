import React from "react";
import { useEffect, useState } from "react";
import { fetchUsers } from "../services/fetchUsers";
import RenderUsers from "../ui/renderUser";
import Styles from "../ui/card.module.css";
import Pagination from "../ui/pagination";
import { useNavigate } from "react-router-dom";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const [currentRecords, setcurrentRecords] = useState([]);
  var indexOfLastRecord = currentPage * recordsPerPage;
  var indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  var nPages = Math.ceil(users.length / recordsPerPage);
  const history = useNavigate();
  async function fetchUsersList() {
    const data = await fetchUsers();
    console.log(data);
    try {
      if (data && data.length !== 0) {
        setUsers(data);
        indexOfLastRecord = currentPage * recordsPerPage;
        indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
        nPages = Math.ceil(data.length / recordsPerPage);
        setcurrentRecords(data.slice(indexOfFirstRecord, indexOfLastRecord));
        setIsLoading(false);
        setIsEmpty(false);
      } else if (data.length === 0) {
        setIsEmpty(true);
        setIsLoading(false);
      }
    } catch (err) {
      throw err.message;
    }
  }

  useEffect(() => {
    fetchUsersList();
  }, [currentPage]);

  function routeToAddUser() {
    history("/addUser");
  }
  function addUserHandler(userDetails) {
    setUsers((prevState) => [...prevState, userDetails]);
    indexOfLastRecord = currentPage * recordsPerPage;
    indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    nPages = Math.ceil(users.length / recordsPerPage);
    setcurrentRecords(users.slice(indexOfFirstRecord, indexOfLastRecord));
    console.log(users);
  }

  const AddUser = () => {
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
              placeholder="Enter your balance"
              onChange={(e) => setBalance(e.target.value)}
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

  return (
    <div>
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        <>
          <button className={Styles.stickyButton} onClick={routeToAddUser}>
            Add User
          </button>
          <div>
            <RenderUsers currentItems={currentRecords}></RenderUsers>
          </div>
          <div>
            <Pagination
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            ></Pagination>
          </div>
          <AddUser></AddUser>
        </>
      )}
    </div>
  );
};

export default Users;
