import App from "../App";
import Html from "../pages/Html";
import Js from "../pages/Js";
import React from "../pages/React";

const JsonToRoutes = [
    { path: "/", name: "App", element: <App /> },
    { path: "/html", name: "Html", element: <Html /> },
    { path: "/js", name: "Js", element: <Js /> },
    { path: "/react", name: "React", element: <React /> },
    { path: "*", name: "404", element: <h1>404 page not found</h1> },
];

export { JsonToRoutes };
