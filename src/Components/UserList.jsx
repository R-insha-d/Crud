import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../Services/api";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";




function UserList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers(); 
  };

  return (
    <>
      <Link to="/add" className="btn btn-primary mb-3 d-flex align-items-center gap-2 " style={{width:"fit-content"}}>
        <IoIosPersonAdd size={20}/> Add User
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
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  to={`/edit/${user.id}`}
                  className="btn text-success"
                >
                  <MdEdit data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"/>
                </Link>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn text-danger"
                >
                    <MdDelete data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default UserList;
