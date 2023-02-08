import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext/UserContext";
import { LoadingPage } from "../../pages/LoadingPage/LoadingPage";

export const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <LoadingPage />;
  }

  return user ? <Outlet /> : <Navigate to="/" />;
};
