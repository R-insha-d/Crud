import React, { useState } from "react";
import { addUser } from "../Services/api";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addUser(user);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4">
      <h4>Add User</h4>

      <input
        type="text"
        name="name"
        placeholder="Name"
        className="form-control mb-3"
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="form-control mb-3"
        onChange={handleChange}
        required
      />

      <button className="btn btn-success">Add</button>
    </form>
  );
}

export default AddUser;
