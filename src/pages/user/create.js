
import React from 'react';
import UserForm from '../../components/users/createForm';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';


const CreateUser = () => {

  return (
    <div>
      <Header />
    <div className="container">
      <h1 className="mt-5">Example Component</h1>
      <div className="alert alert-primary" role="alert">
        This is a Bootstrap alert!
      </div>
      <div>
      <h1>Create User</h1>
      <UserForm />
    </div>
    </div>
    <Footer />
    </div>
  );
};

export default CreateUser;
