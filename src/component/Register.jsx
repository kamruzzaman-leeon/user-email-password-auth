import { Helmet } from 'react-helmet-async';

const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        // console.log('form submitting')
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);
    }
    return (
        <div className='border'>
            <Helmet><title>Register</title></Helmet>
            <div className="mx-auto md:w-1/2 p-5">
                <h2 className='text-3xl text-center py-4 mb-8'>Registration</h2>
                <form onSubmit={handleRegister} className='items-center'>
                    <input className='mb-4 w-3/4 py-2 px-4' type="email" name="email" id="" placeholder='Enter Email' />
                    <input className='mb-4 w-3/4 py-2 px-4' type="password" name="password" id="" placeholder='Enter Password' />
                    <input className='mb-4 w-3/4 btn btn-primary py-2 px-4' type="submit" value="Register" />

                </form>
            </div>
        </div>
    );
};

export default Register;