import axios from "axios";

const API = "https://crud-server-1-ypzn.onrender.com/users";

export const getUsers = () => axios.get(API);
export const addUser = (user) => axios.post(API, user);
export const updateUser = (id, user) => axios.put(`${API}/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API}/${id}`);
export const getUserById = (id) => axios.get(`${API}/${id}`);
