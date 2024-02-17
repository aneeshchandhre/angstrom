import React from 'react';
import Image from "next/image";
import Link from 'next/link'

const LoginPage = () => {
  return (
    <div className='landing_wrapper'>
      <div className='landing_content'>
        <div className='landing_logo_wrapp'>
          <Image
            src="/img/logo.svg"
            alt="Vercel Logo"
            className='landing_logo'
            width={100}
            height={100}
            priority
          />
        </div>
        <form action='{formAction'>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' className='form-control' required />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' className='form-control' required />
          </div>
          <div className='remember_forgot'>
            <div className='remember_wrap'>
              <label><input type='checkbox' /> Remember Me</label>
            </div>
            <div className='forgot_wrapp'>
              <Link href="/landing/forgot">Forgot Password?</Link>
            </div>
          </div>
          <div className='text-center'>
            <button className='btn btn-primary'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;