import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" Component={Home} />
                <Route path="/search" Component={Search} />       
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;