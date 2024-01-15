import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Collaborateurs from "./features/Homepage/Collaborateurs/Collaborateurs.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<p>Login</p>} />
        <Route path="home" element={<p>HOMEPAGE - ICI GET RANDOM USER</p>} />
        <Route path="collaborateurs" element={<Collaborateurs />} />
        <Route path="compte" element={<p>Profil - Get user/id</p>}>
          <Route path="update/:id" element={<p>Update user</p>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
