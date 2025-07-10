import { Routes, Route, Navigate } from "react-router";
import Register from "./pages/register";
import ROUTES from "./constants/routes";

const Navigation = () => {
    const { REGISTER } = ROUTES;
    return (
        <Routes>
            <Route path="/" element={<Navigate to={REGISTER} replace />} />
            <Route path={REGISTER} element={<Register />} />
        </Routes>
    );
};

export default Navigation;
