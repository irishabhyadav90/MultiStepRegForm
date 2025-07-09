import { Routes, Route } from "react-router";
import Register from "./pages/register";
import ROUTES from "./constants/routes";

const Navigation = () => {
    const { REGISTER } = ROUTES;
    return (
        <Routes>
            <Route index path={REGISTER} element={<Register />} />
        </Routes>
    );
};

export default Navigation;
