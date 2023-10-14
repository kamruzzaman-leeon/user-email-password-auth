import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import auth from "../firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [logError, setLogError] = useState('');
    const [logSuccess, setLogSuccess] = useState('');
    const emailRef = useRef(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        setLogError('');
        setLogSuccess('');

        signInWithEmailAndPassword(auth, email, password)

            .then(result => {
                console.log(result.user);
                if(result.user.emailVerified){
                    setLogSuccess('The user logIn successfully')
                }
                else{
                    setLogError('please verified you email address')
                }
                

            })
            .catch(error => {
                console.error(error);
                setLogError('The email or password is incorrect!')

            })

        }
        const handleForgetPassword = () =>{
            const email = emailRef.current.value;
            if(!email){
                console.log('send reset email', emailRef.current.value)
                return;
            }
            else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
                setLogError('Please write a valid mail')
                return;
            }

            //send validation email
            sendPasswordResetEmail(auth,email)
            .then(()=>{
                alert('please check your email')
            })
            .catch(error => {
                console.log(error)
            })
            
        }
    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="email" 
                                    ref={emailRef}
                                    placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    name="password"
                                    type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a
                                    onClick={handleForgetPassword}
                                    href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button name="Submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        {
                            logError && <p className='text-red-600'>{logError}</p>
                        }

                        {
                            logSuccess && <p className='text-success'>{logSuccess}</p>
                        }
                        <p className="ml-10 mb-2">New to this website?<Link to='/register'> <span className='text-sky-400 hover:underline hover:text-sky-700'>Register Now</span></Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;