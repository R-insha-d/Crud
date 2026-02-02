import React, { useEffect, useState } from "react";
import { getUserById, updateUser } from "../Services/api";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await getUserById(id);
    setUser(res.data);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(id, user);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4">
      <h4>Edit User</h4>

      <input
        type="text"
        name="name"
        value={user.name}
        className="form-control mb-3"
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        value={user.email}
        className="form-control mb-3"
        onChange={handleChange}
      />

      <button className="btn btn-primary">Update</button>
    </form>
  );
}

export default EditUser;
