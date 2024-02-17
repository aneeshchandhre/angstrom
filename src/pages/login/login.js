import React from 'react';
import Image from "next/image";

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
            height={24}
            priority
          />
        </div>
        <form action='{formAction'>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' className='form-control' required />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;