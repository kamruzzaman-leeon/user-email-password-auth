import { Helmet } from "react-helmet-async";

const Login = () => {
    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
           <h2 className='text-3xl'>Please Login</h2>
        </div>
    );
};

export default Login;