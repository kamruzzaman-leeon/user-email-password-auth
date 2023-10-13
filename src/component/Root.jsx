import Header from "./Header";
import '../App.css'
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <Header></Header>
           <Outlet></Outlet>
        </div>
    );
};

export default Root;