import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import Loading from '../../components/Loading/Loading';
import auth from '../../firebase.init';

const Reset = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const handleResetForm = async(event) => {
        event.preventDefault();
        const email = event.target.email.value;
        await sendPasswordResetEmail(email)
        alert("Check your email ");
        event.target.reset();


    };
    return (
        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-1/2 md:w-1/2 w-full lg:px-0 md:px-0 px-4'>
           
            <div className="block p-6 rounded-xl shadow-xl bg-white max-w-sm mx-auto">
                <h2 className='text-3xl mb-4'>Welcome to reset form!</h2>
                 {sending && <Loading></Loading>}
                {
                    error && <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                        <span className="font-medium">Error alert!</span> {error}.
                    </div>
                } 
                <form onSubmit={handleResetForm}>
                    <div className="form-group mb-6">
                        <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Email address</label>
                        <input type="email" name='email' className="form-control
                            block
                            w-full 
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
                            aria-describedby="emailHelp" placeholder="Enter email"
                            required
                        />
                    </div>
                    <input type="submit" value="Reset" className="
                        w-full
                        px-6
                        py-2.5
                        bg-neutral
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-black hover:shadow-lg
                        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-blue-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out mt-4"
                    />
                </form>
            </div>
        </div>
    );
};

export default Reset;