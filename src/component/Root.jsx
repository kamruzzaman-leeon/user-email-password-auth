import Header from "./Header";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="container mx-auto">
            <Header></Header>
           <Outlet></Outlet>
        </div>
    );
};

export default Root;