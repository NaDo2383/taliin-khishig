import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminLayout from "./pages/AdminLayout";
import Dashboard from "./pages/Dashboard";
import News from "./pages/News";
import Project from "./pages/Project";
import Users from "./pages/Users";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<AdminLayout />}>
                    <Route index path="/" element={<Dashboard />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/users" element={<Users />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
