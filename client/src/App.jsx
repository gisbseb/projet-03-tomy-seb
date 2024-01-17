import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Collaborateurs from "./features/Collaborateurs/Collaborateurs.jsx";
import Homepage from "./features/Homepage/Homepage.jsx";
import Account from "./features/Account/Account.jsx";

import Login from "./features/Login/Login.jsx";

import { useAuth } from "./context/AuthContext.jsx";
import AddUser from "./features/Users/AddUser/AddUser.jsx";
import SingleCollaborateur from "./features/SingleCollaborateur/SingleCollaborateur.jsx";
import NotFound from "./features/NotFound/NotFound.jsx";

function App() {
  const { isLoggedIn, isAdmin } = useAuth();
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Login />} />
        {isLoggedIn && (
          <>
            <Route path="home" element={<Homepage />} />
            <Route path="collaborateurs" element={<Collaborateurs />} />

            <Route path="compte" element={<Account />}></Route>
            {isAdmin && (
              <>
                <Route path="add" element={<AddUser />} />
                <Route
                  path="collaborateur/:id"
                  element={<SingleCollaborateur />}
                />
              </>
            )}
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
