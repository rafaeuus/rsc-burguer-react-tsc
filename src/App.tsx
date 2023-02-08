import { ToastContainer } from "react-toastify";
import { RoutesComponent } from "./routes";
import { GlobalStyle } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <div>
      <ToastContainer />
      <GlobalStyle />
      <RoutesComponent />
    </div>
  );
};
