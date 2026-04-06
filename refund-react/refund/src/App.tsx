import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutMain from "./pages/layout-main";
import PageComponents from "./pages/page-components";
import PageHome from "./pages/page-home";
import PageNewRefound from "./pages/page-new-refound";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutMain />}>
                    <Route index element={<PageHome />} />
                    <Route path="/newRefound" element={<PageNewRefound />} />
                </Route>
                <Route path="/componentes" element={<PageComponents />} />
            </Routes>
        </BrowserRouter>
    );
}
