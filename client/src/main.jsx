import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>
);
