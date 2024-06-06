import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import JoinMembership from "./pages/JoinMebership/JoinMembership";
import { RecoilRoot } from "recoil";
import GymListPage from "./pages/GymListPage/GymListPage";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />} path="/" />
          <Route element={<LoginPage />} path="/auth/login" />
          <Route element={<JoinMembership />} path="/auth/join_membership" />
          <Route element={<GymListPage />} path="/list_gym" />
          <Route element={<DetailPage />} path="/detail_gym/:id" />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
