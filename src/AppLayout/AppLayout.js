import { Outlet } from "react-router-dom";
import "./applayout.scss";
import Navbar from "../Navbar/Navbar";

const AppLayout = () => {
    return (
        <div className="app-container">
            <Navbar />
            <div className="layout">
                <Outlet />
            </div>
        </div>
    )
}
export default AppLayout;