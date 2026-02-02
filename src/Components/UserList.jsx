import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../Services/api";
import { Link } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";

function UserList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await getUsers();
 
      setUsers(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsers([]);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <>
      <Link
        to="/add"
        className="btn btn-primary mb-3 d-flex align-items-center gap-2"
        style={{ width: "fit-content" }}
      >
        <IoIosPersonAdd size={20} />
        Add User
      </Link>

      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    to={`/edit/${user.id}`}
                    className="btn text-success"
                  >
                    <MdEdit title="Edit" />
                  </Link>

                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn text-danger"
                  >
                    <MdDelete title="Delete" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-muted">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default UserList;
