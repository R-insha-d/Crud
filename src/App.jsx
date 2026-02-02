import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./Components/UserList";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h2 className="text-center mb-4">Add ur Id</h2>

        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
