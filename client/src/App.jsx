import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<p>Login</p>} />
        <Route path="home" element={<p>HOMEPAGE - ICI GET RANDOM USER</p>} />
        <Route
          path="collaborateurs"
          element={<p>collaborateurs - ICI GET ALL USER</p>}
        />
        <Route path="compte" element={<p>Profil - Get user/id</p>}>
          <Route path="update" element={<p>Update user</p>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
