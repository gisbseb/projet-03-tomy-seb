import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Collaborateurs from "./features/Collaborateurs/Collaborateurs.jsx";
import Homepage from "./features/Homepage/Homepage.jsx";
import Account from "./features/Account/Account.jsx";
import UpdateUser from "./features/UpdateUser.jsx/UpdateUser.jsx";
import Login from "./features/Login/Login.jsx";
import AddUser from "./features/AddUser/AddUser.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="home" element={<Homepage />} />
        <Route path="collaborateurs" element={<Collaborateurs />} />
        <Route path="add" element={<AddUser />} />
        <Route path="compte" element={<Account />}>
          <Route path="update/:id" element={<UpdateUser />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
