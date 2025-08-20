import Header from "../Partials/Header";
import Footer from "../Partials/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen ">
            <Header />
            <main className="flex-grow"> {/* This pushes the footer to the bottom */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default RootLayout;
