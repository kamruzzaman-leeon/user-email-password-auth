import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';
import auth from '../firebase.config';
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const Register = () => {
    const [regError, setRegError] = useState('');
    const [regSuccess, setRegSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleRegister = (e) => {
        e.preventDefault();
        // console.log('form submitting')
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        if(password.length < 6){
            setRegError('Password should be at least 6 characters ');
            return;
        }
        else if(!/A-Z/.test(password)){
            setRegError('Your password should have at least one upper case characters!');
            return;
        }

        setRegError('');
        setRegSuccess('');
        createUserWithEmailAndPassword(auth, email, password)

            .then(result => {
                console.log(result.user);
                setRegSuccess('user successfully created!');
            })
            .catch(error => {
                console.error(error);
                setRegError(error.message);
            })
    }
    return (
        <div className='border'>
            <Helmet><title>Register</title></Helmet>
            <div className="mx-auto md:w-1/2 p-5">
                <h2 className='text-3xl text-center py-4 mb-8'>Registration</h2>
                <form onSubmit={handleRegister} className='items-center'>
                    <input className='mb-4 w-3/4 py-2 px-4' type="email" name="email" id="" placeholder='Enter Email' required/>
                    <div className='input-group mb-4 w-3/4 '>
                    <input
                    type={showPassword?"text":"password"}
                    className='py-2 px-4'
                     name="password"
                     id="" 
                     placeholder='Enter Password' required/>
                    <span onClick={()=> setShowPassword(!showPassword)}>
                        {
                            showPassword ?<FaRegEye></FaRegEye>:<FaRegEyeSlash></FaRegEyeSlash>
                        }
                    </span>
                    </div>
                    
                    <input className='mb-4 w-3/4 btn btn-primary py-2 px-4' type="submit" value="Register" />

                </form>
                {
                    regError && <p className='text-red-600'>{regError}</p>
                }

                {
                    regSuccess && <p className='text-success'>{regSuccess}</p>
                }
            </div>
        </div>
    );
};

export default Register;