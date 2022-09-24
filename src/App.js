import logo from "./logo.svg";
import Users from "./components/Users/users";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddUser from "./components/Users/addUser";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/users" element={<Users />}></Route>
          <Route exact path="/addUser" element={<AddUser />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
