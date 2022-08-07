import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from './pages/home';
import Details from './pages/details';
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:state" element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
}