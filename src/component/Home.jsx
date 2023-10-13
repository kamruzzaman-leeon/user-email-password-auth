import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <h2 className="text-3xl">This is a Home</h2>
        </div>
    );
};

export default Home;