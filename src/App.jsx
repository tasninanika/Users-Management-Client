import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <>
      <h1>Users Management System</h1>
      <p>Number of users: {users.length}</p>
      {users.map((user) => {
        <p>
          {user.id} {user.name} {user.email}
        </p>;
      })}
    </>
  );
}

export default App;
