import { Routes } from "react-router";
import { Route } from "react-router-dom";
import { ProtectedRoutes } from "./components/ProtectedRoutes/ProtectedRoutes";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
