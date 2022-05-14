import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';


const SignUp = () => {

    const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, userEP, loadingEP, errorEP,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);
    const [error, setError] = useState('');


    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const handleRegistrationForm = async (event) => {
        event.preventDefault();

        const displayName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (password.length >= 6) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName })
            console.log("registration complete")
        } else {
            setError('Password must be 6 or more!!')
        }

    };

    const handleContinueWithGoogle = async () => {
        await signInWithGoogle();
    };

    if (userG || userEP) {
        navigate(from, { replace: true });
    }

    return (
        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-1/2 md:w-1/2 w-full lg:px-0 md:px-0 px-4'>
            <div className="flex flex-col w-full border-opacity-50">
                <div>
                    <div className="w-full p-6 m-auto bg-white rounded-md shadow-lg lg:max-w-md">
                        <h1 className="text-3xl font-semibold text-center text-primary">REGISTRATION</h1>
                        {(loadingEP) && <Loading />}
                        {loadingEP ? "" : (errorEP && <Error message={errorEP?.message} />) || (error && <Error message={error} />)}
                        <form
                            className="mt-6"
                            onSubmit={handleRegistrationForm}
                        >
                            <div>
                                <label htmlFor="name" className="block text-sm text-gray-800">Name</label>
                                <input
                                    type="text"
                                    name='name'
                                    className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm text-gray-800">Email</label>
                                <input
                                    type="email"
                                    name='email'
                                    className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mt-4">
                                <div>
                                    <label htmlFor="password" className="block text-sm text-gray-800">Password</label>
                                    <input
                                        type="password"
                                        name='password'
                                        className="block w-full px-4 py-2 mt-2 text-primary bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                                <div className="mt-6">
                                    <input type="submit" value="Register" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-neutral rounded-md hover:bg-black focus:outline-none focus:bg-secondary cursor-pointer" />
                                </div>
                            </div>
                        </form>
                        <p className="mt-8 text-xs text-center text-gray-700"> Already have an account? <Link to="/login"
                            className="font-medium text-secondary hover:underline">Login</Link></p>
                    </div>
                </div>
                <div className="divider lg:w-1/2 w-full mx-auto">OR</div>

                {(loadingG) && <Loading />}
                <p className='lg;w-1/2 mx-auto'>{(errorG && <Error className=" " message={errorG?.message} />)}</p>
                <button
                    className="
                    btn 
                    btn-block 
                    bg-white
                    text-black
                    hover:text-white
                    border-2
                    border-neutral
                    hover:border-neutral
                    hover:bg-neutral
                    lg:w-1/2 
                    w-fill 
                    mx-auto 
                    rounded-lg"
                    type="submit"
                    onClick={handleContinueWithGoogle}
                >
                    <i className="fa fa-google mr-2" aria-hidden="true"></i>
                    Continue with google
                </button>
            </div>
        </div>
    );
};

export default SignUp;