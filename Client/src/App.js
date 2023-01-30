import UserList from "./features/users/UserList";
import { Routes, Route } from "react-router-dom";
import AddUser from "./features/users/AddUser";
import EditUser from "./features/users/EditUser";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32 ">
      <h1 className="text-center font-bold text-2xl text-white ">
        DASHIDEA CONTACT MANAGER
      </h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;