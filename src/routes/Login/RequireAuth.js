import { async } from '@firebase/util';
import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth)
   const handleVerificationCode= async()=>{
    await sendEmailVerification(user?.email);
    alert("check you email")
   }

    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (!user.emailVerified) {
        return <div className='h-screen grid grid-cols-1 items-center justify-center'>
            <div className='block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto text-center mt-16'>
            <h2 className='mb-2 text-red-600 text-xl'>Your Email not Verified</h2>
            <h3 className='mb-2 text-secondary'>Please verified your email</h3>
            <button type="button" className="text-white bg-secondary hover:bg-primary focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={handleVerificationCode}>Send Verification Email Again</button>
        </div>
        </div>
    }

    return children;
};

export default RequireAuth;