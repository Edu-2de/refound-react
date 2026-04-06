import { Outlet } from "react-router-dom";
import Header from "../components/header";
import MainContent from "../components/main-content";

export default function LayoutMain() {
    return (
        <div className="flex flex-col items-center">
            <Header className="mt-9" />
            <MainContent>
                <Outlet />
            </MainContent>
        </div>
    );
}
