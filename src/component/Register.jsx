import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';
import auth from '../firebase.config';
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Register = () => {
    const [regError, setRegError] = useState('');
    const [regSuccess, setRegSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log('form submitting')
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.value;
        console.log(email, password,accepted);

        if(password.length < 6){
            setRegError('Password should be at least 6 characters ');
            return;
        }
        else if(/A-Z/.test(password)){
            setRegError('Your password should have at least one upper case characters!');
            return;
        }
        else if(!accepted){
        setRegError('please accept the terms & condition of ours!')
        return;
        }

        setRegError('');
        setRegSuccess('');
        createUserWithEmailAndPassword(auth, email, password)

            .then(result => {
                console.log(result.user);
                setRegSuccess('user successfully created!');

                updateProfile(result.user,{
                    displayName:name
                })
                .then(()=>alert('profile updated'))
                .catch()

                sendEmailVerification(result.user)
                .then(() =>{
                    alert('please check your email and verified your email!')
                })

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
                    <input className='mb-4 w-full py-2 px-4' type="text" name="name" id="" placeholder='Enter Name' required/>
                    <input className='mb-4 w-full py-2 px-4' type="email" name="email" id="" placeholder='Enter Email' required/>
                    <div className='relative mb-4 w-FULL '>
                    <input
                    type={showPassword?"text":"password"}
                    className='py-2 px-4 w-full'
                     name="password"
                     id="" 
                     placeholder='Enter Password' required/>
                    <span className='absolute top-3 right-4
                    ' onClick={()=> setShowPassword(!showPassword)}>
                        {
                            showPassword ?<FaRegEye></FaRegEye>:<FaRegEyeSlash></FaRegEyeSlash>
                        } 
                    </span>
                    </div>
                    <div className='mb-1'>
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms"> Accept our  terms & conditions</label>
                    </div>
                    <input className='mb-4 w-full btn btn-primary py-2 px-4' type="submit" value="Register" />

                </form>
                {
                    regError && <p className='text-red-600'>{regError}</p>
                }

                {
                    regSuccess && <p className='text-success'>{regSuccess}</p>
                }
                <p className=" mb-2">New to this website?<Link to='/login'> <span className='text-sky-400 hover:underline hover:text-sky-700'>Login Now</span></Link></p>

            </div>
        </div>
    );
};

export default Register;