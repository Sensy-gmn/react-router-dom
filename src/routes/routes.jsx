import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { JsonToRoutes } from "./JsonToRoutes";

export default function Router() {
    return (
        <>
            <Navbar />
            <Routes>
                {JsonToRoutes.map((route) => (
                    <Route
                        key={route.name}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </>
    );
}
