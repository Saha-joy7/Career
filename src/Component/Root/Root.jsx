import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Banner from "../Banner/Banner";

const Root = () => {
    return (
        <div>
            <div className="mx-auto max-w-[1200px]">
                <Home></Home>
                <Banner></Banner>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;