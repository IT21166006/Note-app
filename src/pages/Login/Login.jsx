import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from '../../components/Navbar';


function Login() {
  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border rounded bg-white px-7 py-10'>
          <form onSubmit={() => {}}>
            <h4 className='text-2xl mb-7'>Login</h4>
            <input type='text' placeholder='Enter Email' className='input-box mb-4' />
            <button type='submit' className='btn-primary w-full'>
              Login
            </button>
            <p className='text-sm text-center mt-4'>
              Not Registered yet?{" "}
              <Link to="/signup" className='font-medium text-primary underline'>
                Create account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
