import { Routes, Route } from "react-router";
import Register from "./pages/register";

const Navigation = () => {
    return (
        <Routes>
            <Route index path="/register" element={<Register />} />
        </Routes>
    );
};

export default Navigation;
