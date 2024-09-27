import { Link } from "react-router-dom";
import { JsonToRoutes } from "../routes/JsonToRoutes";

export default function Navbar() {
    return (
        <div className="flex justify-center items-center gap-4">
            <ul className="flex justify-center items-center gap-4">
                {JsonToRoutes.map((route) => (
                    <li key={route.path}>
                        <Link to={route.path}>{route.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
