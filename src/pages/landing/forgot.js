import React from 'react';
import Image from "next/image";
import Link from 'next/link'

const ForgotPage = () => {
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
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' className='form-control' required />
          </div>
          <div className='text-center'>
            <button className='btn btn-primary'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPage;