import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Router from "./routes/routes";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>
);
